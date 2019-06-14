import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { UserService } from '../user.service';
import { User } from '../user.model'
import { API_PATH_IMG } from './../../app.api'
@Component({
  selector: 'app-detalhar',
  templateUrl: './detalhar.component.html',
  styleUrls: ['./detalhar.component.css']
})
export class DetalharComponent implements OnInit {
  user: User;
  loader: boolean = true
  img: string = 'assets/img/user/padrao.png';
  bo_ativo:boolean

  constructor(private userService: UserService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.getCliente();
  }
  getCliente() {
    this.userService.userById(this.router.snapshot.params['id']).subscribe(cliente => {
      this.user = cliente        
     
      if (this.user.img) {
        this.img = `${API_PATH_IMG}/user/${this.user.img}`
      }
      this.loader = false
    });
  }
}
