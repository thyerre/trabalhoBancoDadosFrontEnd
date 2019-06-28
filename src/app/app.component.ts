import { Component, OnInit } from '@angular/core';
import {LoginService} from './security/login/login.service'
import { Router } from '@angular/router';
import { GaragemService } from './garagem/garagem.service';
import { InfoWindowManager } from '@agm/core';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  texto: string = 'Wenceslau Braz - Cuidado com as cargas';
  lat: number = -23.8779431;
  lng: number = -49.8046873;
  zoom: number = 15;
  info:any[]

  isLogged = false;
  mostrarMenu: false;
  constructor(private garagemService: GaragemService,private loginService: LoginService, private router: Router) {}
  ngOnInit() {
    //this.router.navigate(['/login']);
    this.loginService.mostrarMenu.subscribe(
      mostrarMenu => this.mostrarMenu = mostrarMenu
    );
    this.garagemService.getInfo().subscribe(
      info => this.info = info
    );
}
sair(){
  $(".control-sidebar").removeClass("control-sidebar-open");
  // $("header").show();
  this.router.navigate(['/login']);
}
}
