import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../shared/messages/notification.service';
import { User } from './user.model'
import { UserService } from './user.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[];
  total: number = 0;
  searchForm: FormGroup
  searchControl: FormControl
  loader: boolean = true;
  page: number = 1;
  itensPorPagina = 10;

  constructor(private userService: UserService, private fb: FormBuilder, private notificationService: NotificationService) { }

  ngOnInit() {
    this.searchControl = this.fb.control('')
    this.searchForm = this.fb.group({
      searchControl: this.searchControl
    })
    this.searchForm = this.fb.group({
      search: this.fb.control(''), 
    })
    this.getUsers();

  }

  getUsers() {
    this.userService.getUsers().subscribe(user => {
      console.log(user);
      this.users = user
      this.loader = false
    });
  }
  getUsersSeach(form) {
    this.userService.getUsers().subscribe(users => {
      this.users = users
      this.loader = true
    });
  }
  search(form){
    this.userService.search(form).subscribe(users =>{
      this.users = users
      this.loader = false
    });
  }
  clearSearch(){
    this.searchForm = this.fb.group({
      search: this.fb.control(''), 
    })
    this.getUsers()
  }

  InativarUser(user) {
    if (confirm('Você tem certeza que deseja remover a Usuasd ')) {
      this.loader = true
      this.userService.inativar(user.id).subscribe((data) => {
        if (data['success']) {
          this.users.splice(this.users.indexOf(user), 1)
          this.notificationService.notify(`Você removeu a Cliente`)
        }
        this.loader = false
      });
    }
  }
  update(form) {
    this.userService.update(form, form.id)
      .subscribe(data => {
        this.userService.notify(data['response']);
      },
        response => {
          if (response.status === 401) {
            this.userService.notify("não foi possivel salvar");
          }
        },
        () => {
        })
  }
}
