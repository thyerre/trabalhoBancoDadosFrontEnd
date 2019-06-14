import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'
import { SuporteService } from '../suporte.service';
import { Suporte } from '../suporte.model'

@Component({
  selector: 'app-alterar',
  templateUrl: './alterar.component.html',
  styleUrls: ['./alterar.component.css']
})
export class AlterarComponent implements OnInit {
suporte: Suporte;
  form: FormGroup;
  loader: boolean = true;
  

  constructor(private suporteService: SuporteService, private formBuilder: FormBuilder, private router: ActivatedRoute) { }
  
  ngOnInit() {
    this.initializeFormEmpty();
    this.getSuporte();
  }
  getSuporte() {
    this.suporteService.suporteById(this.router.snapshot.params['id']).subscribe(suporte => {
      this.suporte = suporte
      this.initializeForm(this.suporte)
      this.loader = false
    });
  }
  
  initializeForm(suporte) {
    this.form = this.formBuilder.group({
      id: this.formBuilder.control(suporte.id, [Validators.required]), 
        title: this.formBuilder.control(suporte.title, [Validators.required]), 
        subtitle: this.formBuilder.control(suporte.subtitle), 
        bo_ativo: this.formBuilder.control(suporte.bo_ativo), 
        value: this.formBuilder.control(suporte.value)
        
    })
  }
  initializeFormEmpty() {
    this.form = this.formBuilder.group({
      id: this.formBuilder.control('', [Validators.required]),
        title: this.formBuilder.control('', [Validators.required]),
        subtitle: this.formBuilder.control(''),
        bo_ativo: this.formBuilder.control(''),
        value: this.formBuilder.control('')
        
    })
  }
  update(form){
    this.suporteService.update(form,form.id)
  }
  
}
