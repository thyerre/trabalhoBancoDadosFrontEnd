import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { LoginService } from './login.service'
import { NotificationService } from '../../shared/messages/notification.service'
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  navigateTo: string
  img:string = 'assets/img/bg-img/';
  erro:string
  cria:boolean = false

  constructor(private fb: FormBuilder,
    private loginService: LoginService,
    private notificationService: NotificationService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    $("body").addClass("sidebar-collapse");
    $("header").hide();
    this.loginForm = this.fb.group({
      email: this.fb.control('admin', [Validators.required]),
      password: this.fb.control('123', [Validators.required])
    })
    //btoa é para criptografar com javascript puro
    // this.navigateTo = this.activatedRoute.snapshot.params['to'] || btoa('/')
    // console.log(atob(this.navigateTo));
    this.img += this.rundImg(1 , 11)+".jpg";
    // console.log(this.img)
  }
  criar(){
    this.cria = true;
  }
  logar(){
    this.cria = false;
  }
  login() {
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe(user => {
        console.log(user)//httpErrorResponse
          this.erro = user;
          // if(user.id_login){
            // }

          //atob é para decodificar 
          
          // window.location.replace(atob(this.navigateTo))
          // window.location.reload();
          // this.router.navigate([atob(this.navigateTo)])
        })
  }
  criarLogin() {
    this.loginService.criarLogin(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe(user => {
        console.log(user)//httpErrorResponse
          this.erro = user;
          // if(user.id_login){
            // }

          //atob é para decodificar 
          
          // window.location.replace(atob(this.navigateTo))
          // window.location.reload();
          // this.router.navigate([atob(this.navigateTo)])
        })
  }


  rundImg(min = 1, max = 11) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
