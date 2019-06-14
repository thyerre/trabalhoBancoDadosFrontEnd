import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../shared/messages/notification.service';
import { Cliente } from './cliente.model'
import { ClienteService } from './cliente.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


import { Observable } from 'rxjs';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  clientes: Cliente[];
  total: number = 0;
  searchForm: FormGroup
  searchControl: FormControl
  loader: boolean = true;
  page: number = 1;
  itensPorPagina = 10;

  constructor(private clienteService: ClienteService, private fb: FormBuilder, private notificationService: NotificationService) { }

  ngOnInit() {
    this.searchControl = this.fb.control('')
    this.searchForm = this.fb.group({
      searchControl: this.searchControl
    })
    this.searchForm = this.fb.group({
      search: this.fb.control(''), 
    })
    this.getClientes();

  }

  getClientes() {
    this.clienteService.getClientes().subscribe(clientes => {
      this.clientes = clientes
      this.loader = false
    });
  }
  getClientesSeach(form) {
    this.clienteService.getClientes().subscribe(clientes => {
      this.clientes = clientes
      this.loader = false
    });
  }
  search(form){
    this.clienteService.search(form).subscribe(clientes =>{
      this.clientes = clientes
      this.loader = false
    });
  }
  clearSearch(){
    this.searchForm = this.fb.group({
      search: this.fb.control(''), 
    })
    this.getClientes()
  }

  InativarCliente(Cliente) {
    if (confirm('Você tem certeza que deseja remover a Cliente ')) {
      this.loader = true
      this.clienteService.inativar(Cliente.id).subscribe((data) => {
        if (data['success']) {
          this.clientes.splice(this.clientes.indexOf(Cliente), 1)
          this.notificationService.notify(`Você removeu a Cliente`)
        }
        this.loader = false
      });
    }
  }
  update(form) {
    this.clienteService.update(form, form.id)
      .subscribe(data => {
        this.clienteService.notify(data['response']);
      },
        response => {
          if (response.status === 401) {
            this.clienteService.notify("não foi possivel salvar");
          }
        },
        () => {
        })
  }
}
