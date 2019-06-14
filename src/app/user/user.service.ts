import { Injectable } from '@angular/core' 
import { Observable } from 'rxjs'
import {tap} from 'rxjs/operators'
import { HttpClient } from '@angular/common/http'
import { Router} from '@angular/router'

import { User } from './user.model'

import { NotificationService } from '../shared/messages/notification.service';
import { API } from '../app.api'

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(
    private http: HttpClient,
    private notificationService: NotificationService,
    private router: Router
  ) { }

  getUsers(): Observable<User[]> {
    return this.http.get <User[]>(`${API}/user`)
  }
  getUserPerfil(): Observable<any> {
    return this.http.get <any>(`${API}/auth/me`)
  }

  userById(id: any): Observable<User> {
    return this.http.get<User>(`${API}/user/${id}`)

  }
  save(form) {
    return this.http.post<any>(`${API}/user`, form)
    .pipe(
      tap(user => {

      })
    )
  }
  update(form,id) {
    return this.http.put(`${API}/user/${id}`, form)
    .pipe(
      tap(user => {
        console.log(user);
      })
    )
  }
  inativar(id: string) {
    return this.http.delete(`${API}/user/${id}`)

  }
  goTo(path: string = "user") {
    this.router.navigate([`/${path}`])
  }
  notify(msg) {
    this.notificationService.notify(msg);
  }
  search(form){
    return this.http.post<any>(`${API}/user/search`, form)
    .pipe(
      tap(user => {
      })
    )
  }
}
