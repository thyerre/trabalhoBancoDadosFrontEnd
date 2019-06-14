import { Injectable } from '@angular/core' 
import { Observable } from 'rxjs'
import {tap,filter} from 'rxjs/operators'
import { HttpClient } from '@angular/common/http'
import { Router,NavigationEnd} from '@angular/router'

import { Contato } from './contato.model'


import { NotificationService } from '../shared/messages/notification.service';
import { API } from '../app.api'

@Injectable({
  providedIn: 'root'
})

export class ContatoService {

  constructor(
    private http: HttpClient,
    private notificationService: NotificationService,
    private router: Router
  ) { }

  getContatos(search?: string): Observable<Contato> {
    
    return this.http.get <Contato>(`${API}/contato`)
  }

    save(form) {
    return this.http.post(`${API}/contato`, form)
      .subscribe((data) => {
        if (data['response']) {
          this.notify('Registro inserido com sucesso!');
          this.router.navigate(['/contato'])
        }
        // console.log(data);
      }, (error) => {
        this.notify(`Error: ${error}`);
      });
  }
  update(form,id) {
    return this.http.put(`${API}/contato/${id}`, form)
      .subscribe((data) => {
        if (data['response']) {
          this.notify('Registro alterado com sucesso!');
          this.router.navigate(['/contato'])
        }
        // console.log(data);
      }, (error) => {
        this.notify(`Error: ${error}`);
      });
  }
  inativar(id: string) {
    return this.http.delete(`${API}/contato/${id}`)

  }
  notify(msg) {
    this.notificationService.notify(msg);
  }
}
