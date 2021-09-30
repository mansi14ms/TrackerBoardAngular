import { Component, OnInit } from '@angular/core';
import { DashboardServiceService } from './dashboard-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'HUAngularProject2021';
  dashservice:DashboardServiceService;

  constructor (dashservice: DashboardServiceService) {
    this.dashservice = dashservice;
  }

  ngOnInit() {
    this.dashservice.fetchData();
    console.log("data fetched");
    this.dashservice.fetchReporterData();
  }

}
