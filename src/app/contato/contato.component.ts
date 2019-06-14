import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'
import { ContatoService } from './contato.service';
import { Contato } from './contato.model'

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
contato: Contato;
  form: FormGroup;
  loader: boolean = true;
  

  constructor(private contatoService: ContatoService, private formBuilder: FormBuilder, private router: ActivatedRoute) { }
  
  ngOnInit() {
    this.initializeFormEmpty();
    this.getContato();
  }
  getContato() {
    this.contatoService.getContatos().subscribe(contato => {
      this.contato = contato
      this.initializeForm(this.contato)
      this.loader = false
    });
  }
  
  initializeForm(contato) {
    this.form = this.formBuilder.group({
      id: this.formBuilder.control(contato.id, [Validators.required]), 
        ds_endereco: this.formBuilder.control(contato.ds_endereco, [Validators.required]), 
        title: this.formBuilder.control(contato.title), 
        sub_title: this.formBuilder.control(contato.sub_title), 
        email: this.formBuilder.control(contato.email, [Validators.required]), 
        nu_telefone_um: this.formBuilder.control(contato.nu_telefone_um, [Validators.required]), 
        nu_telefone_dois: this.formBuilder.control(contato.nu_telefone_dois), 
        embed_map: this.formBuilder.control(contato.embed_map)
        
    })
  }
  initializeFormEmpty() {
    this.form = this.formBuilder.group({
      id: this.formBuilder.control('', [Validators.required]),
        ds_endereco: this.formBuilder.control(''),
        title: this.formBuilder.control('', [Validators.required]),
        sub_title: this.formBuilder.control(''),
        email: this.formBuilder.control('', [Validators.required]),
        nu_telefone_um: this.formBuilder.control('', [Validators.required]),
        nu_telefone_dois: this.formBuilder.control(''),
        embed_map: this.formBuilder.control('')
        
    })
  }
  update(form){
    this.contatoService.update(form,form.id)
  }
  
}
