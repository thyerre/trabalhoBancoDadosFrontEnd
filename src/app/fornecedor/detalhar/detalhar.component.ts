import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { FornecedorService } from '../fornecedor.service';
import { Fornecedor } from './../fornecedor.model'
import { API_PATH_IMG } from './../../app.api'
@Component({
  selector: 'app-detalhar',
  templateUrl: './detalhar.component.html',
  styleUrls: ['./detalhar.component.css']
})
export class DetalharComponent implements OnInit {
  fornecedor: Fornecedor;
  loader: boolean = true

  constructor(private fornecedorService: FornecedorService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.getCliente();
  }
  getCliente() {
    this.fornecedorService.produtoById(this.router.snapshot.params['id']).subscribe(fornecedor => {
      this.fornecedor = fornecedor
      
      this.loader = false
    });
  }
}
