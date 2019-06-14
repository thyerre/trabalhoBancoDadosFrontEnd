import { Injectable } from '@angular/core' 
import { Observable } from 'rxjs'
import {tap,filter} from 'rxjs/operators'
import { HttpClient } from '@angular/common/http'
import { Router,NavigationEnd} from '@angular/router'

import { Suporte } from './suporte.model'


import { NotificationService } from '../shared/messages/notification.service';
import { API } from '../app.api'

@Injectable({
  providedIn: 'root'
})

export class SuporteService {

  constructor(
    private http: HttpClient,
    private notificationService: NotificationService,
    private router: Router
  ) { }

  getSuportes(search?: string): Observable<Suporte[]> {
    
    return this.http.get <Suporte[]>(`${API}/suporte`)
  }

  suporteById(id: string): Observable<Suporte> {
    return this.http.get<Suporte>(`${API}/suporte/${id}`)

  }
    save(form) {
    return this.http.post(`${API}/suporte`, form)
      .subscribe((data) => {
        if (data['response']) {
          this.notify('Registro inserido com sucesso!');
          this.router.navigate(['/suporte'])
        }
        console.log(data);
      }, (error) => {
        this.notify(`Error: ${error}`);
      });
  }
  update(form,id) {
    console.log(form);
    
    return this.http.put(`${API}/suporte/${id}`, form)
      .subscribe((data) => {
        if (data['response']) {
          this.notify('Registro alterado com sucesso!');
          this.router.navigate(['/suporte'])
        }
        console.log(data);
      }, (error) => {
        this.notify(`Error: ${error}`);
      });
  }
  inativar(id: string) {
    return this.http.delete(`${API}/suporte/${id}`)

  }
  notify(msg) {
    this.notificationService.notify(msg);
  }
}
