import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

import { SuporteService } from '../suporte.service';
import { Suporte } from '../suporte.model'

@Component({
  selector: 'app-incluir',
  templateUrl: './incluir.component.html',
  styleUrls: ['./incluir.component.css']
})
export class IncluirComponent implements OnInit {
suporte: Suporte;
form: FormGroup
loader: boolean = true


  constructor(private suporteService: SuporteService, private formBuilder: FormBuilder) { }
  
  ngOnInit() {
    this.initializeFormEmpty();
  }
  
  initializeFormEmpty() {
    this.form = this.formBuilder.group({
      title: this.formBuilder.control('', [Validators.required]), 
        subtitle: this.formBuilder.control(''), 
        bo_ativo: this.formBuilder.control(''), 
        value: this.formBuilder.control('')
        
    })
  }
  save(form){
    this.suporteService.save(form)
  }
  
}
