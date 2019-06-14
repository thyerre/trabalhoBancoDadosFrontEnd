import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { FornecedorService } from '../fornecedor.service';
import { Fornecedor } from '../fornecedor.model'

@Component({
  selector: 'app-incluir',
  templateUrl: './incluir.component.html',
  styleUrls: ['./incluir.component.css']
})
export class IncluirComponent implements OnInit {
  fornecedor: Fornecedor;
  form: FormGroup
  loader: boolean = true


  constructor(private fornecedorService: FornecedorService, private formBuilder: FormBuilder) { }

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
    this.fornecedorService.save(form)
      .subscribe(data => {
        this.fornecedorService.notify(data.response);
        this.fornecedorService.goTo()

      });
  }
}
