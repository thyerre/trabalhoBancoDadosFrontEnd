import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../shared/messages/notification.service';
import { DashboardService } from './dashboard.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
declare var $: any;


import { Observable } from 'rxjs';
import { GaragemService } from '../garagem/garagem.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  markers: any[];
  total: number = 0;
  searchForm: FormGroup;
  searchControl: FormControl;
  loader: boolean = true;
  page: number = 1;
  itensPorPagina = 10;

  texto: string = 'Wenceslau Braz - Cuidado com as cargas';
  lat = 43.879078;
  lng = -103.4615581;
  // markers = [
  //   { lat: 22.33159, lng: 105.63233},
  //   { lat: 7.92658, lng: -12.05228},
  //   { lat: 48.75606, lng: -118.859},
  //   { lat: 5.19334, lng: -67.03352},
  //   { lat: 12.09407, lng: 26.31618},
  //   // { lat: 47.92393, lng: 78.58339}
  // ];

  constructor(private garagemService: GaragemService,private dashboardService: DashboardService, private fb: FormBuilder, private notificationService: NotificationService) { }

  ngOnInit() {
    $("body").removeClass("sidebar-collapse");
    $("header").show();
    this.getGaragem();

  }
  getGaragem(){
    this.garagemService.getGaragens()
      .subscribe(data => {
        console.log(data)
        this.markers = data;
      });
  }
}
