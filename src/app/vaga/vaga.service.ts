import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {tap, filter} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationEnd} from '@angular/router';


import { NotificationService } from '../shared/messages/notification.service';
import { API } from '../app.api';

@Injectable({
  providedIn: 'root'
})

export class VagaService {

  constructor(
    private http: HttpClient,
    private notificationService: NotificationService,
    private router: Router
  ) { }

  getProdutos(search?: string): Observable<any[]> {

    return this.http.get <any[]>(`${API}/vaga`);
  }

  produtoById(id: string): Observable<any> {
    return this.http.get<any>(`${API}/vaga/${id}`);

  }
  save(form) {
    return this.http.post<any>(`${API}/vaga`, form)
    .pipe(
      tap(user => {

      })
    );
  }
  update(form, id) {
    console.log(form);
    return this.http.put(`${API}/vaga/${id}`, form)
    .pipe(
      tap(user => {
      })
    );
  }
  inativar(id: string) {
    return this.http.delete(`${API}/vaga/${id}`);

  }
  goTo(path: string) {
    this.router.navigate([`/${path}`]);
  }
  notify(msg) {
    this.notificationService.notify(msg);
  }
}
