import { Injectable } from '@angular/core' 
import { Observable } from 'rxjs'
import {tap,filter} from 'rxjs/operators'
import { HttpClient } from '@angular/common/http'
import { Router,NavigationEnd} from '@angular/router'

import { Fornecedor } from './fornecedor.model'


import { NotificationService } from '../shared/messages/notification.service';
import { API } from '../app.api'

@Injectable({
  providedIn: 'root'
})

export class FornecedorService {

  constructor(
    private http: HttpClient,
    private notificationService: NotificationService,
    private router: Router
  ) { }

  getProdutos(search?: string): Observable<Fornecedor[]> {
    
    return this.http.get <Fornecedor[]>(`${API}/fornecedor`)
  }

  produtoById(id: string): Observable<Fornecedor> {
    return this.http.get<Fornecedor>(`${API}/fornecedor/${id}`)

  }
  save(form) {
    return this.http.post<any>(`${API}/fornecedor`, form)
    .pipe(
      tap(user => {

      })
    )
  }
  update(form,id) {
    console.log(form)
    return this.http.put(`${API}/fornecedor/${id}`, form)
    .pipe(
      tap(user => {
      })
    )
  }
  inativar(id: string) {
    return this.http.delete(`${API}/fornecedor/${id}`)

  }
  goTo(path: string = "fornecedor") {
    this.router.navigate([`/${path}`])
  }
  notify(msg) {
    this.notificationService.notify(msg);
  }
}
