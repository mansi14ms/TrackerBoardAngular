import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardServiceService } from '../dashboard-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-issue-details',
  templateUrl: './issue-details.component.html',
  styleUrls: ['./issue-details.component.scss']
})
export class IssueDetailsComponent implements OnInit {
  details:any;
  reporter:any;
  name:any;
  flagIssueNull=false;
  activatedRoute: ActivatedRoute;
  dashservice:DashboardServiceService;
  error:any;
  id="";

  constructor(activatedRoute: ActivatedRoute,dashservice:DashboardServiceService) {
    this.activatedRoute=activatedRoute;
    this.dashservice=dashservice;
   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        console.log("params="+params.id);
        this.id=params.id;
        this.details=this.dashservice.getIssueData(params.id);
        if(this.details==null)
        this.flagIssueNull=true;
        this.name=this.dashservice.getName(this.details.assignee);
      },
      error =>{
        this.error=error;
      }
    );
  }
  onClickDelete()
  {
       this.dashservice.onClickDelete(this.id);
       console.log("deleted="+this.id);

  }

}
