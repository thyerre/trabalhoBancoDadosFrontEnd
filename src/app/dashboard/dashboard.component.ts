import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../shared/messages/notification.service';
import { DashboardService } from './dashboard.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
declare var $: any;


import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  clientes: any[];
  total: number = 0;
  searchForm: FormGroup;
  searchControl: FormControl;
  loader: boolean = true;
  page: number = 1;
  itensPorPagina = 10;

  texto = 'Santa Helena de Goiás';
  lat = -17.8260154;
  lng = -50.6083592;
  zoom = 15;

  constructor(private dashboardService: DashboardService, private fb: FormBuilder, private notificationService: NotificationService) { }

  ngOnInit() {
    $("body").removeClass("sidebar-collapse");
    $("header").show();
    // this.getClientes();

  }

  getClientes() {
    this.dashboardService.getClientes().subscribe(clientes => {
      this.clientes = clientes;
      this.loader = false;
    });
  }
  getClientesSeach(form) {
    this.dashboardService.getClientes().subscribe(clientes => {
      this.clientes = clientes;
      this.loader = false;
    });
  }
  search(form){
    this.dashboardService.search(form).subscribe(clientes =>{
      this.clientes = clientes;
      this.loader = false;
    });
  }
  clearSearch(){
    this.searchForm = this.fb.group({
      search: this.fb.control(''), 
    })
    this.getClientes();
  }

  InativarCliente(Cliente) {
    if (confirm('Você tem certeza que deseja remover a Cliente ')) {
      this.loader = true;
      this.dashboardService.inativar(Cliente.id).subscribe((data) => {
        if (data['success']) {
          this.clientes.splice(this.clientes.indexOf(Cliente), 1)
          this.notificationService.notify(`Você removeu a Cliente`)
        }
        this.loader = false;
      });
    }
  }
  update(form) {
    this.dashboardService.update(form, form.id)
      .subscribe(data => {
        this.dashboardService.notify(data['response']);
      },
        response => {
          if (response.status === 401) {
            this.dashboardService.notify("não foi possivel salvar");
          }
        },
        () => {
        })
  }
}
