import { Component, OnInit } from '@angular/core';
import { DashboardServiceService } from '../dashboard-service.service';


@Component({
  selector: 'app-maintab',
  templateUrl: './maintab.component.html',
  styleUrls: ['./maintab.component.scss']
})
export class MaintabComponent implements OnInit {
  dashboard:string;
  downArrow:string;
  avatar:string;
  dashservice:DashboardServiceService;
  details:any=[];
  constructor(dashservice:DashboardServiceService) { 
    this.dashboard= '/assets/images/graph.png';
    this.downArrow= '/assets/images/down-arrow.png';
    this.avatar='/assets/images/user_1.svg';
    this.dashservice=dashservice;
    this.details=dashservice.getData();
    console.log("check here :"+this.details);
   

  }


  ngOnInit(): void {

    
    this.details=this.dashservice.getData();
    console.log(this.details);
    console.log("call from base");
    
   
  }
  

}
