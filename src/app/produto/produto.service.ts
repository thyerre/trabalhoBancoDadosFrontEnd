import { Injectable } from '@angular/core' 
import { Observable } from 'rxjs'
import {tap,filter} from 'rxjs/operators'
import { HttpClient } from '@angular/common/http'
import { Router,NavigationEnd} from '@angular/router'

import { Produto } from './produto.model'


import { NotificationService } from '../shared/messages/notification.service';
import { API } from '../app.api'

@Injectable({
  providedIn: 'root'
})

export class ProdutoService {

  constructor(
    private http: HttpClient,
    private notificationService: NotificationService,
    private router: Router
  ) { }

  getProdutos(search?: string): Observable<Produto[]> {
    
    return this.http.get <Produto[]>(`${API}/produto`)
  }

  produtoById(id: string): Observable<Produto> {
    return this.http.get<Produto>(`${API}/produto/${id}`)

  }
  save(form) {
    
    return this.http.post<any>(`${API}/produto`, form)
    .pipe(
      tap(user => {

      })
    )
  }
  update(form,id) {
    console.log(form)
    return this.http.put(`${API}/produto/${id}`, form)
    .pipe(
      tap(user => {
      })
    )
  }
  inativar(id: string) {
    return this.http.delete(`${API}/produto/${id}`)

  }
  goTo(path: string = "produto") {
    this.router.navigate([`/${path}`])
  }
  notify(msg) {
    this.notificationService.notify(msg);
  }
}
