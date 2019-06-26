import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../shared/messages/notification.service';
import { GaragemService } from './garagem.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


import { Observable } from 'rxjs';

@Component({
  selector: 'app-garagem',
  templateUrl: './garagem.component.html',
  styleUrls: ['./garagem.component.css']
})
export class GaragemComponent implements OnInit {
garagens: any[];
total: number = 0;
searchForm: FormGroup
searchControl: FormControl
loader: boolean = true;
page: number = 1;
itensPorPagina = 10;

  constructor(private garagemService: GaragemService, private fb: FormBuilder, private notificationService: NotificationService) { }


  ngOnInit() {
    this.searchControl = this.fb.control('')
    this.searchForm = this.fb.group({
      searchControl: this.searchControl
    })
  
    this.getGaragem();

  }
  getGaragem(){
    this.garagemService.getGaragens()
      .subscribe(data => {
        this.garagens = data;
      });
  }
}
