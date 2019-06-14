import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../shared/messages/notification.service';
import { Suporte } from './suporte.model'
import { SuporteService } from './suporte.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


import { Observable } from 'rxjs';

@Component({
  selector: 'app-suporte',
  templateUrl: './suporte.component.html',
  styleUrls: ['./suporte.component.css']
})
export class SuporteComponent implements OnInit {
suportes: Suporte[];
total: number = 0;
searchForm: FormGroup
searchControl: FormControl
loader: boolean = true;
page: number = 1;
itensPorPagina = 10;

  constructor(private suporteService: SuporteService, private fb: FormBuilder, private notificationService: NotificationService) { }

  ngOnInit() {
    this.searchControl = this.fb.control('')
    this.searchForm = this.fb.group({
      searchControl: this.searchControl
    })

    this.getSuportes();
  
  }

getSuportes() {
    this.suporteService.getSuportes().subscribe(suportes => {
      this.suportes = suportes
      this.loader = false
    });
  }
  

  InativarSuporte(Suporte) {
    if (confirm('Você tem certeza que deseja remover a Suporte ' )) {
      this.loader = true
      this.suporteService.inativar(Suporte.id).subscribe((data) => {
        if (data['success'] == 'ok') {
          this.suportes.splice(this.suportes.indexOf(Suporte), 1)
          this.notificationService.notify(`Você removeu a Suporte`)
        }
        this.loader = false
      });
    }
  }
  update(form){
    this.suporteService.update(form,form.id)
  }
}
