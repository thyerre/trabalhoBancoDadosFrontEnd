import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente.model'
import { API_PATH_IMG } from './../../app.api'
@Component({
  selector: 'app-detalhar',
  templateUrl: './detalhar.component.html',
  styleUrls: ['./detalhar.component.css']
})
export class DetalharComponent implements OnInit {
  cliente: Cliente;
  loader: boolean = true
  img: string = 'assets/img/user/padrao.png';
  bo_ativo:boolean

  constructor(private clienteService: ClienteService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.getCliente();
  }
  getCliente() {
    this.clienteService.clienteById(this.router.snapshot.params['id']).subscribe(cliente => {
      this.cliente = cliente        
     
      if (this.cliente.img) {
        this.img = `${API_PATH_IMG}/cliente/${this.cliente.img}`
      }
      this.loader = false
    });
  }
}
