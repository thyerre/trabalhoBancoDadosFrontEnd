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

  getVagas(search?: string): Observable<any[]> {

    return this.http.get <any[]>(`${API}/v1/vaga`);
  }

  getVagaById(id: string): Observable<any> {
    return this.http.get<any>(`${API}/v1/vaga/${id}`);

  }
  save(form) {
    console.log(form)
    return this.http.post<any>(`${API}/v1/vaga`, form)
    .pipe(
      tap(user => {

      })
    );
  }
  update(form, id) {
    console.log(form);
    return this.http.put(`${API}/v1/vaga/${id}`, form)
    .pipe(
      tap(user => {
      })
    );
  }
  excluir(id: string) {
    return this.http.delete(`${API}/v1/vaga/${id}`)

  }
  goTo(path: string) {
    this.router.navigate([`/${path}`]);
  }
}
