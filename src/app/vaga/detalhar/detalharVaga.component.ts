import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VagaService } from '../vaga.service';
import { API_PATH_IMG } from '../../app.api';
@Component({
  selector: 'app-detalhar',
  templateUrl: './detalharVaga.component.html',
  styleUrls: ['./detalharVaga.component.css']
})
export class DetalharVagaComponent implements OnInit {
  fornecedor: any;
  loader: true;

  constructor(private vagaService: VagaService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.getCliente();
  }
  getCliente() {
    this.vagaService.produtoById(this.router.snapshot.params['id']).subscribe(fornecedor => {
      this.fornecedor = fornecedor;

      this.loader = true;
    });
  }
}
