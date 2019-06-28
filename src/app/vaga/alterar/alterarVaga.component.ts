import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { VagaService } from '../vaga.service';
import { API_PATH_IMG } from '../../app.api';
import { GaragemService } from 'src/app/garagem/garagem.service';

@Component({
  selector: 'app-alterar',
  templateUrl: './alterarVaga.component.html',
  styleUrls: ['./alterarVaga.component.css']
})
export class AlterarVagaComponent implements OnInit {
  vaga: any;
  garagens:any
  form: FormGroup;
  img: 'assets/img/user/padrao.png';
  selectedFile: File;
  loader: true;

  constructor(private vagaService: VagaService,private garagemService: GaragemService, private formBuilder: FormBuilder, private router: ActivatedRoute) { }

  ngOnInit() {
    this.initializeFormEmpty();
    this.getvaga();
    this.getGaragem();
  }
  getvaga() {
    this.vagaService.getVagaById(this.router.snapshot.params['id']).subscribe(vaga => {
      this.vaga = vaga[0];
      this.initializeForm(this.vaga);
    });
  }
  getGaragem(){
    this.garagemService.getGaragens()
      .subscribe(data => {
        this.garagens = data;
      });
  }

  initializeForm(vaga) {
    this.form = this.formBuilder.group({
      id_vaga: this.formBuilder.control(vaga.id_vaga, [Validators.required]),
      descricao: this.formBuilder.control(vaga.descricao, [Validators.required]),
      largura_garagem: this.formBuilder.control(vaga.largura_garagem, [Validators.required]),
      altura_garagem: this.formBuilder.control(vaga.altura_garagem, [Validators.required]),
      id_garagem: this.formBuilder.control(vaga.id_garagem, [Validators.required]),
      quantidade_vaga: this.formBuilder.control(vaga.quantidade_vaga),
      valor: this.formBuilder.control(vaga.valor)
    });

  }
  initializeFormEmpty() {
    this.form = this.formBuilder.group({
      id_vaga: this.formBuilder.control('', [Validators.required]),
      descricao: this.formBuilder.control('', [Validators.required]),
      altura_garagem: this.formBuilder.control('', [Validators.required]),
      largura_garagem: this.formBuilder.control('', [Validators.required]),
      id_garagem: this.formBuilder.control('', [Validators.required]),
      quantidade_vaga: this.formBuilder.control(''),
      valor: this.formBuilder.control('')
    });
  }

  update(form) {
    this.vagaService.update(form, form.id_vaga)
      .subscribe(data => {
        this.garagemService.goTo('vaga')
        this.loader = true;
      });
    }
}
