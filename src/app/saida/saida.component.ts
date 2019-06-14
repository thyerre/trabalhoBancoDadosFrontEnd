import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../shared/messages/notification.service';
import { Saida } from './saida.model'
import { SaidaService } from './saida.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-saida',
  templateUrl: './saida.component.html',
  styleUrls: ['./saida.component.css']
})
export class SaidaComponent implements OnInit {
saidas: Saida[];
total: number = 0;
searchForm: FormGroup
searchControl: FormControl
loader: boolean = true;
page: number = 1;
itensPorPagina = 10;

  constructor(private saidaService: SaidaService, private fb: FormBuilder, private notificationService: NotificationService) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      search: this.fb.control(''), 
    })
    this.getSaidas();
  
  }

getSaidas() {
    this.saidaService.getSaidas().subscribe(saidas => {
      this.saidas = saidas
      this.loader = false
    });
  }
  search(form){
    this.saidaService.search(form).subscribe(saidas =>{
      this.saidas = saidas
      this.loader = false
    });
  }
  clearSearch(){
    this.searchForm = this.fb.group({
      search: this.fb.control(''), 
    })
    this.getSaidas()
  }
  

  InativarSaida(saida) {
    if (confirm('Você tem certeza que deseja excluir essa Saida?' )) {
      this.loader = true
      this.saidaService.inativar(saida.id_saida).subscribe((data) => {
        if (data['ok']) {
          this.notificationService.notify(`Você removeu a Saida`)
          this.saidas.splice(this.saidas.indexOf(saida), 1)
        }
        this.loader = false
      });
    }
  }
  update(form){
    this.saidaService.update(form,form.id)
    .subscribe(data =>{
      this.saidaService.notify(data['response']);
    },
      response => {
        if (response.status === 401) {
          this.saidaService.notify("não foi possivel salvar");
        }
      },
      () => {
      })
  }
}
