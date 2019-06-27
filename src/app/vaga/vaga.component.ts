import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../shared/messages/notification.service';
import { VagaService } from './vaga.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


import { Observable } from 'rxjs';

@Component({
  selector: 'app-vaga',
  templateUrl: './vaga.component.html',
  styleUrls: ['./vaga.component.css']
})
export class VagaComponent implements OnInit {
vagas: any[];
total: 0;
searchForm: FormGroup;
searchControl: FormControl;
loader: true;
page: 1;
itensPorPagina = 10;

  constructor(private vagaService: VagaService, private fb: FormBuilder, private notificationService: NotificationService) { }

  ngOnInit() {
    this.getVagas();

  }
  getVagas(){
    this.vagaService.getVagas()
      .subscribe(data => {
        this.vagas = data;
      });
  }

  InativarProduto() {
    if (confirm('Você tem certeza que deseja inativar o Fornecedor ' )) {
      this.loader = true;
          }
  }
  excluir(form){
    this.vagaService.excluir(form.id_vaga)
      .subscribe(data => {
        this.vagas.splice(this.vagas.indexOf(form), 1)
      });

  }
}
