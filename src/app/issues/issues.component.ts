import { Component, Input, OnInit } from '@angular/core';
import { DashboardServiceService } from '../dashboard-service.service';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss']
})
export class IssuesComponent implements OnInit {
  avatar:string;
  downArrow:string;
  dashservice:DashboardServiceService;
  @Input() details:any=[];
  id:any;
  date:any;
  title:any;
  description:any;
  @Input() flag:boolean=false;
  search:any;

  
  constructor(dashservice:DashboardServiceService) {
    this.avatar='/assets/images/user_1.svg';
    this.downArrow= '/assets/images/down-arrow.png';
    this.dashservice=dashservice;
    this.details=dashservice.getData();
   }

  ngOnInit(): void {
    this.details=this.dashservice.getData();
    this.flag=this.dashservice.flag;
    console.log("in issets"+this.flag)
    if(this.dashservice.flag===true)
    {
      console.log("change flag");
      this.flag=true;
      this.search=this.dashservice.sendResult();
 
    }
  }
  onCompClick(det:[])
  {
    console.log("sendingg"+det);
    this.dashservice.addtemp(det);
  }

}
