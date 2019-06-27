import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { GaragemService } from '../garagem.service';
import { API_PATH_IMG } from '../../app.api'
@Component({
  selector: 'app-detalhar',
  templateUrl: './detalharGaragem.component.html',
  styleUrls: ['./detalharGaragem.component.css']
})
export class DetalharGaragemComponent implements OnInit {
  garagem: any;
  loader: boolean = true

  constructor(private garagemService: GaragemService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.getGaragem();
  }
  getGaragem() {
    this.garagemService.garagemById(this.router.snapshot.params['id']).subscribe(garagem => {
      this.garagem = garagem[0]
      console.log(garagem)
      
      this.loader = false
    });
  }
}
