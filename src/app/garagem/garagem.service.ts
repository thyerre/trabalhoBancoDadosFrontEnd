import { Injectable } from '@angular/core' 
import { Observable } from 'rxjs'
import {tap,filter} from 'rxjs/operators'
import { HttpClient } from '@angular/common/http'
import { Router,NavigationEnd} from '@angular/router'


import { NotificationService } from '../shared/messages/notification.service';
import { API } from '../app.api'

@Injectable({
  providedIn: 'root'
})

export class GaragemService {

  constructor(
    private http: HttpClient,
    private notificationService: NotificationService,
    private router: Router
  ) { }

  getGaragens(search?: string): Observable<any[]> {
    
    return this.http.get <any[]>(`${API}/v1/garagem`)
  }

  produtoById(id: string): Observable<any> {
    return this.http.get<any>(`${API}/geragem/${id}`)

  }
  saveGaragem(form) {
    return this.http.post<any>(`${API}/v1/garagem`, form)
    .pipe(
      tap(user => {

      })
    )
  }
  save(form) {
    return this.http.post<any>(`${API}/garagem`, form)
    .pipe(
      tap(user => {

      })
    )
  }
  update(form,id) {
    console.log(form)
    return this.http.put(`${API}/geragem/${id}`, form)
    .pipe(
      tap(user => {
      })
    )
  }
  inativar(id: string) {
    return this.http.delete(`${API}/geragem/${id}`)

  }
  goTo(path: string = "geragem") {
    this.router.navigate([`/${path}`])
  }
  notify(msg) {
    this.notificationService.notify(msg);
  }
}
