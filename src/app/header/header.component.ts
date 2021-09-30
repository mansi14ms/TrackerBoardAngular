import { Component, OnInit } from '@angular/core';
import { DashboardServiceService } from '../dashboard-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  imagePath: string;
  avatar:string;
  search:string;
  dashService:DashboardServiceService;
  text="";
  
  constructor(dashService:DashboardServiceService) { 
    this.imagePath = '/assets/images/logo.svg';
    this.avatar='/assets/images/user_1.svg';
    this.search='/assets/images/icons-icon_search.svg';
    this.dashService=dashService;

  }

  ngOnInit(): void {
  }
  
  onClick()
  {
    console.log("img clicked"+this.text);
    this.dashService.searchResult(this.text);
  }


}
