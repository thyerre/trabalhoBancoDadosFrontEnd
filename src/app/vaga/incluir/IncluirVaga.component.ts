import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { VagaService } from './../vaga.service';
import { GaragemService } from './../../garagem/garagem.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-incluir',
  templateUrl: './IncluirVaga.component.html',
  styleUrls: ['./IncluirVaga.component.css']
})
export class IncluirVagaComponent implements OnInit {
  fornecedor: any;
  form: FormGroup;
  loader: true;
  garagem:any
  garagens:any


  constructor(private vagaService: VagaService,private garagemService: GaragemService,private router: Router, private formBuilder: FormBuilder) { }
  

  ngOnInit() {
    this.initializeFormEmpty();
    this.getGaragem();
  }
  // <!-- altura_garagem|descricao|id_garagem|largura_garagem|quantidade_vaga|valor| -->
  initializeFormEmpty() {
    this.form = this.formBuilder.group({
      altura_garagem: this.formBuilder.control(''),
      descricao: this.formBuilder.control(''),
      largura_garagem: this.formBuilder.control(''),
      id_garagem: this.formBuilder.control(this.garagem),
      quantidade_vaga: this.formBuilder.control(''),
      valor: this.formBuilder.control('')
    })
  }

  save(form) {
    this.vagaService.save(form)
      .subscribe(data => {
        this.vagaService.notify(data.response);
        this.loader = true;
        if(data){
          this.router.navigate(['/garagem']);
        }
      });
  }
  getGaragem(){
    this.garagemService.getGaragens()
      .subscribe(data => {
        this.garagens = data;
      });
  }
  addGaragem(id) {
    this.garagem = id;
  }
}
