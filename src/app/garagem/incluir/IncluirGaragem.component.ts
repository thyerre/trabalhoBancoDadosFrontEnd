import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { GaragemService } from '../garagem.service';

@Component({
  selector: 'app-IncluirGaragem',
  templateUrl: './IncluirGaragem.component.html',
  styleUrls: ['./IncluirGaragem.component.css']
})
export class IncluirGaragemComponent implements OnInit {
  fornecedor: any;
  form: FormGroup
  loader: boolean = true


  constructor(private garagemService: GaragemService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initializeFormEmpty();
  }

  initializeFormEmpty() {
    this.form = this.formBuilder.group({
      id: this.formBuilder.control(''),
      endereco: this.formBuilder.control('', [Validators.required]),
      razao_social: this.formBuilder.control('', [Validators.required]),
      nome_contato: this.formBuilder.control('',),
      pais: this.formBuilder.control(''),
      ins_est: this.formBuilder.control(''),
      nome_fantasia: this.formBuilder.control(''),
      cnpj: this.formBuilder.control(''),
      observacao: this.formBuilder.control('')
    })
  }

  save(form) {
    this.garagemService.save(form)
      .subscribe(data => {
        this.garagemService.notify(data.response);
        this.garagemService.goTo()

      });
  }
}
