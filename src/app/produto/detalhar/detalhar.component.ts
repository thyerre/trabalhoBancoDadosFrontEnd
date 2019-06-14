import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ProdutoService } from '../produto.service';
import { Produto } from './../produto.model'
import { API_PATH_IMG } from './../../app.api'
@Component({
  selector: 'app-detalhar',
  templateUrl: './detalhar.component.html',
  styleUrls: ['./detalhar.component.css']
})
export class DetalharComponent implements OnInit {
  produto: Produto;
  loader: boolean = true
  img: string = 'assets/img/user/padrao.png';

  constructor(private produtoService: ProdutoService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.getCliente();
  }
  getCliente() {
    this.produtoService.produtoById(this.router.snapshot.params['id']).subscribe(produto => {
      this.produto = produto
      if (produto.img) {
        this.img = `${API_PATH_IMG}/produto/${produto.img}`
      }
      this.loader = false
    });
  }
}
