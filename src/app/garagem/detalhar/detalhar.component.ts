import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { GaragemService } from '../garagem.service';
import { API_PATH_IMG } from './../../app.api'
@Component({
  selector: 'app-detalhar',
  templateUrl: './detalhar.component.html',
  styleUrls: ['./detalhar.component.css']
})
export class DetalharComponent implements OnInit {
  fornecedor: any;
  loader: boolean = true

  constructor(private garagemService: GaragemService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.getCliente();
  }
  getCliente() {
    this.garagemService.produtoById(this.router.snapshot.params['id']).subscribe(fornecedor => {
      this.fornecedor = fornecedor
      
      this.loader = false
    });
  }
}
