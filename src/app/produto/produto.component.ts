import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../shared/messages/notification.service';
import { Produto } from './produto.model'
import { ProdutoService } from './produto.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


import { Observable } from 'rxjs';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
produtos: Produto[];
total: number = 0;
searchForm: FormGroup
searchControl: FormControl
loader: boolean = true;
page: number = 1;
itensPorPagina = 10;

  constructor(private produtoService: ProdutoService, private fb: FormBuilder, private notificationService: NotificationService) { }

  ngOnInit() {
    this.searchControl = this.fb.control('')
    this.searchForm = this.fb.group({
      searchControl: this.searchControl
    })

    this.getProdutos();
  
  }

getProdutos() {
    this.produtoService.getProdutos().subscribe(produtos => {
      this.produtos = produtos
      this.loader = false
    });
  }
  

  InativarProduto(Produto) {
    if (confirm('Você tem certeza que deseja inativar o Produto ' )) {
      this.loader = true
      this.produtoService.inativar(Produto.id).subscribe((data) => {
        if (data['ok']) {
          Produto.bo_ativo = false;
          this.notificationService.notify(`Você removeu a Produto`)
        }
        this.loader = false
      });
    }
  }
  update(form){
    this.produtoService.update(form,form.id)
    .subscribe(data =>{
      this.produtoService.notify(data['response']);
    },
      response => {
        if (response.status === 401) {
          this.produtoService.notify("não foi possivel salvar");
        }
      },
      () => {
      })
  }
}
