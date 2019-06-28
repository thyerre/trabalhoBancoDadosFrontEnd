import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { tap, filter } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http'
import { Router, NavigationEnd } from '@angular/router'


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

    return this.http.get<any[]>(`${API}/v1/garagem`)
  }

  garagemById(id: string): Observable<any> {
    return this.http.get<any>(`${API}/v1/garagem/${id}`)

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
  update(form, id) {
    return this.http.put(`${API}/v1/garagem/${id}`, form)
      .pipe(
        tap(user => {
        })
      )
  }
  excluir(id: string) {
    return this.http.delete(`${API}/v1/garagem/${id}`)

  }

  getInfo(): Observable<any[]> {
    return this.http.get<any[]>(`${API}/v1/garagem/info`)
  }

  goTo(path: string = "garagem") {
    this.router.navigate([`/${path}`])
  }
  notify(msg) {
    this.notificationService.notify(msg);
  }
}
