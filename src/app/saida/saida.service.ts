import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { tap, filter } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http'
import { Router, NavigationEnd } from '@angular/router'

import { Saida } from './saida.model'


import { NotificationService } from '../shared/messages/notification.service';
import { API } from '../app.api'

@Injectable({
  providedIn: 'root'
})

export class SaidaService {

  constructor(
    private http: HttpClient,
    private notificationService: NotificationService,
    private router: Router
  ) { }

  getSaidas(search?: string): Observable<Saida[]> {

    return this.http.get<Saida[]>(`${API}/saida`)
  }

  saidaById(id: string): Observable<Saida[]> {
    return this.http.get<any[]>(`${API}/saida/${id}`)

  }
  saveSaida(form) {
    return this.http.post<any>(`${API}/saida/savepk`, form)
  }
  save(form) {
    return this.http.post<any>(`${API}/saida`, form)
  }
  getParcelas(id:any){
    return this.http.get<Saida[]>(`${API}/saida/parcela/${id}`)
  }
  getFormasDePagamento(){
    return this.http.get<any[]>(`${API}/forma/pagamento`)
  }
  PagarParcela(id:any){
    return this.http.get<Saida[]>(`${API}/saida/pagar/parcela/${id}`)
  }

  update(form, id) {
    return this.http.put(`${API}/saida/${id}`, form)
  }
  search(form) {
    return this.http.post<any>(`${API}/saida/search`, form)
      .pipe(
        tap(user => {
        })
      )
  }
  inativar(id: string) {
    return this.http.delete(`${API}/saida/${id}`)

  }
  goTo(path: string = "saida") {
    // console.log(path)
    this.router.navigate([`/${path}`])
  }
  notify(msg) {
    this.notificationService.notify(msg);
  }
  /**
   * 
   * @param tipo Função para verificar qual tipo de pagamento sendo passado a abreviatura
   */
  getTipoPagamento(tipo:string){
    
    if(tipo === "CRED"){
      return "CARTÃO DE CREDITO"
    }else if(tipo === "DEB"){
      return "CARTÃO DE DEBITO"
    }else if(tipo === "NOTA"){
      return "NOTA";
    }else{
      return "AVISTA";
    }
  }
}
