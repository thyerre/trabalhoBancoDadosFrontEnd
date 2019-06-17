import { Component, OnInit } from '@angular/core';
import {LoginService} from './security/login/login.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLogged = false;
  
  mostrarMenu: boolean = false;
  constructor(private loginService:LoginService,private router:Router){}
  
  ngOnInit(){
    this.router.navigate(['/login']);
    this.loginService.mostrarMenu.subscribe(
      mostrarMenu => this.mostrarMenu = mostrarMenu
    );
}
}
