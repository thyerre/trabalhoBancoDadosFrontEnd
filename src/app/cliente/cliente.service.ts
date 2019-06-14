import { Injectable } from '@angular/core' 
import { Observable } from 'rxjs'
import {tap,filter} from 'rxjs/operators'
import { HttpClient } from '@angular/common/http'
import { Router,NavigationEnd} from '@angular/router'

import { Cliente } from './cliente.model'


import { NotificationService } from '../shared/messages/notification.service';
import { API } from '../app.api'

@Injectable({
  providedIn: 'root'
})

export class ClienteService {

  constructor(
    private http: HttpClient,
    private notificationService: NotificationService,
    private router: Router
  ) { }

  getClientes(search?: string): Observable<any[]> {
    
    return this.http.get <any[]>(`${API}/v1/login`)
  }

  clienteById(id: any): Observable<Cliente> {
    return this.http.get<Cliente>(`${API}/cliente/${id}`)

  }
  save(form) {
    return this.http.post<any>(`${API}/cliente`, form)
    .pipe(
      tap(user => {

      })
    )
  }
  update(form,id) {
    return this.http.put(`${API}/cliente/${id}`, form)
    .pipe(
      tap(user => {
      })
    )
  }
  inativar(id: string) {
    return this.http.delete(`${API}/cliente/${id}`)

  }
  goTo(path: string = "cliente") {
    this.router.navigate([`/${path}`])
  }
  notify(msg) {
    this.notificationService.notify(msg);
  }
  search(form){
    return this.http.post<any>(`${API}/cliente/search`, form)
    .pipe(
      tap(user => {
      })
    )
  }
}
