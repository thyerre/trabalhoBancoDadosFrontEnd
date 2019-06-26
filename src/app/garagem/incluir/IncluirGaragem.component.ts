import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { GaragemService } from '../garagem.service';

@Component({
  selector: 'app-IncluirGaragem',
  templateUrl: './IncluirGaragem.component.html',
  styleUrls: ['./IncluirGaragem.component.css']
})
export class IncluirGaragemComponent implements OnInit {
  endereco: FormGroup;
  form: FormGroup
  loader: boolean = true


  constructor(private garagemService: GaragemService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initializeFormEmpty();
  }

  initializeFormEmpty() {
    this.form = this.formBuilder.group({
      logradouro: this.formBuilder.control(''),
      quadra: this.formBuilder.control(''),
      lote: this.formBuilder.control(''),
      num_imovel: this.formBuilder.control('',),
      bairo: this.formBuilder.control(''),
      cidade: this.formBuilder.control(''),
      uf: this.formBuilder.control(''),
      cep: this.formBuilder.control(''),
      nome_garagem: this.formBuilder.control('')
    })
    this.endereco = this.formBuilder.group({
      logradouro: this.formBuilder.control(''),
      quadra: this.formBuilder.control(''),
      lote: this.formBuilder.control(''),
      num_imovel: this.formBuilder.control('',),
      bairo: this.formBuilder.control(''),
      cidade: this.formBuilder.control(''),
      uf: this.formBuilder.control(''),
      cep: this.formBuilder.control('')
    })
  }

  save(form) {
 
    this.garagemService.saveGaragem(form)
      .subscribe(data => {
        console.log(data)
    });
  }
}
