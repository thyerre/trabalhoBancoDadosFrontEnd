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
  vaga: any;
  loader: true;

  constructor(private vagaService: VagaService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.getVaga();
  }
  getVaga() {
    this.vagaService.getVagaById(this.router.snapshot.params['id']).subscribe(vaga => {
      this.vaga = vaga[0];
      console.log(vaga)
      this.loader = true;
    });
  }
}
