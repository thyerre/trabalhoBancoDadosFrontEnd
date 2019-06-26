import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { VagaService } from './../vaga.service';

@Component({
  selector: 'app-incluir',
  templateUrl: './IncluirVaga.component.html',
  styleUrls: ['./IncluirVaga.component.css']
})
export class IncluirVagaComponent implements OnInit {
  fornecedor: any;
  form: FormGroup;
  loader: true;


  constructor(private vagaService: VagaService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initializeFormEmpty();
  }

  initializeFormEmpty() {
    this.form = this.formBuilder.group({
      id: this.formBuilder.control(''),
      endereco: this.formBuilder.control('', [Validators.required]),
      razao_social: this.formBuilder.control('', [Validators.required]),
      nome_contato: this.formBuilder.control(''),
      pais: this.formBuilder.control(''),
      ins_est: this.formBuilder.control(''),
      nome_fantasia: this.formBuilder.control(''),
      cnpj: this.formBuilder.control(''),
      observacao: this.formBuilder.control('')
    });
  }

  save(form) {
    this.vagaService.save(form)
      .subscribe(data => {
        this.vagaService.notify(data.response);
        this.loader = true;
      });
  }
}
