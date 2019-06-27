import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'
import { GaragemService } from '../garagem.service';
import { API_PATH_IMG } from './../../app.api'

@Component({
  selector: 'app-alterar',
  templateUrl: './alterarGaragem.component.html',
  styleUrls: ['./alterarGaragem.component.css']
})
export class AlterarGaragemComponent implements OnInit {
  garagem: any;
  form: FormGroup;
  img: string = 'assets/img/user/padrao.png';
  loader: boolean = true;
  selectedFile: File

  constructor(private garagemService: GaragemService, private formBuilder: FormBuilder, private router: ActivatedRoute) { }

  ngOnInit() {
    this.initializeFormEmpty();
    this.getFornecedor();
  }
  getFornecedor() {
    this.garagemService.garagemById(this.router.snapshot.params['id']).subscribe(garagem => {
      this.garagem = garagem[0]
      console.log(garagem)
      this.initializeForm(this.garagem)
      this.loader = false
    });
  }

  initializeForm(garagem) {
    this.form = this.formBuilder.group({
      id: this.formBuilder.control(garagem.id_garagem),
      nome_garagem: this.formBuilder.control(garagem.nome_garagem),
      logradouro: this.formBuilder.control(garagem.logradouro),
      quadra: this.formBuilder.control(garagem.quadra),
      lote: this.formBuilder.control(garagem.lote),
      num_imovel: this.formBuilder.control(garagem.num_imovel),
      bairo: this.formBuilder.control(garagem.bairo),
      cidade: this.formBuilder.control(garagem.cidade),
      uf: this.formBuilder.control(garagem.uf),
      cep: this.formBuilder.control(garagem.cep)
    })
    
  }
  initializeFormEmpty() {
    this.form = this.formBuilder.group({
      id: this.formBuilder.control(''),
      nome_garagem: this.formBuilder.control(''),
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

  update(form) {
    this.garagemService.update(form, form.id)
      .subscribe(data => {
        this.garagemService.goTo()
      });
    }
}
