import { Injectable,EventEmitter } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router,NavigationEnd} from '@angular/router'
import { Observable } from 'rxjs'
import {tap,filter, flatMap} from 'rxjs/operators'
import { API } from '../../app.api'
import {Helper} from '../../helper'




@Injectable()
export class LoginService {
    user: any
    lastUrl: string
    mostrarMenu = new EventEmitter<boolean>();
    

    constructor(private http: HttpClient,private router:Router,private helper:Helper) { 
        //pegando a rota que o usuario estava antes de clicar para logar.
        this.router.events.pipe(filter(e=> e instanceof NavigationEnd))
        .subscribe( (e:NavigationEnd) => this.lastUrl = e.url)
    }
    getUser(){
        return JSON.parse(atob(this.helper.decrypt(localStorage.getItem('user'))));
    }

    isLoggedIn(): boolean{
        // console.log("token: "+localStorage.getItem('token'))
        if(localStorage.getItem('token') !== null){
            this.mostrarMenu.emit(true);
            return true;
        }
        return false;
    }
    logout(){
        this.http.get(`${API}/auth/logout`).subscribe(resp=>{
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            this.mostrarMenu.emit(false);
            this.user = undefined;
            this.handleLogin();
        })
        // this.mostrarMenu.emit(false);
        // this.handleLogin();

    }

    login(email: string, password: string): Observable<any> {
        return this.http.post<any>(`${API}/v1/login/logar
        `, { usuario: email, senha: password })
            .pipe(
                tap(user => {
                    console.log(user);
                    if(user[0].id_login > 0){
                        localStorage.setItem("token",user.id_login);
                        this.router.navigate(['/dashboard']);
                    }else{
                        return user;
                    }

                    // localStorage.setItem('user', btoa(JSON.stringify(user.pessoa)));
                    // let userString = JSON.stringify(user.pessoa);
                    // let encrypt = btoa(userString);
                    // let myencrypt = this.helper.encrypt(encrypt);
                    // let encriptografado = this.helper.encrypt(userString);
                    // console.log(myencrypt);
                    // localStorage.setItem('user', myencrypt);
                    // this.user = user
                })
            )
    }
    criarLogin(email: string, password: string): Observable<any> {
        return this.http.post<any>(`${API}/v1/login/criar
        `, { usuario: email, senha: password })
            .pipe(
                tap(user => {
                    console.log(user[0].id_login);
                    if(user[0].id_login > 0){
                        localStorage.setItem("token",user.id_login);
                        this.router.navigate(['/dashboard']);
                    }else{
                        return user;
                    }

                    // localStorage.setItem('user', btoa(JSON.stringify(user.pessoa)));
                    // let userString = JSON.stringify(user.pessoa);
                    // let encrypt = btoa(userString);
                    // let myencrypt = this.helper.encrypt(encrypt);
                    // let encriptografado = this.helper.encrypt(userString);
                    // console.log(myencrypt);
                    // localStorage.setItem('user', myencrypt);
                    // this.user = user
                })
            )
    }
    bloquearMenu(){
        this.mostrarMenu.emit(false);
        localStorage.removeItem("token");
        this.handleLogin();
    }
    handleLogin(path:string = this.lastUrl ){
        // console.log("ultimo "+path);
        // console.log('vai mandar para o login');
        // this.router.navigate(['/login',path]);
        this.mostrarMenu.emit(false);
        this.router.navigate(['/login',btoa(path)])
    }
    
}