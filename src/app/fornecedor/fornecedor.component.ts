import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../shared/messages/notification.service';
import { Fornecedor } from './fornecedor.model'
import { FornecedorService } from './fornecedor.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


import { Observable } from 'rxjs';

@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.component.html',
  styleUrls: ['./fornecedor.component.css']
})
export class FornecedorComponent implements OnInit {
fornecedors: Fornecedor[];
total: number = 0;
searchForm: FormGroup
searchControl: FormControl
loader: boolean = true;
page: number = 1;
itensPorPagina = 10;

  constructor(private produtoService: FornecedorService, private fb: FormBuilder, private notificationService: NotificationService) { }

  ngOnInit() {
    this.searchControl = this.fb.control('')
    this.searchForm = this.fb.group({
      searchControl: this.searchControl
    })

    this.getProdutos();
  
  }

getProdutos() {
    this.produtoService.getProdutos().subscribe(fornecedors => {
      this.fornecedors = fornecedors
      this.loader = false
    });
  }
  

  InativarProduto(Fornecedor) {
    if (confirm('Você tem certeza que deseja inativar o Fornecedor ' )) {
      this.loader = true
      this.produtoService.inativar(Fornecedor.id).subscribe((data) => {
        if (data['ok']) {
          Fornecedor.bo_ativo = false;
          this.notificationService.notify(`Você removeu a Fornecedor`)
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
