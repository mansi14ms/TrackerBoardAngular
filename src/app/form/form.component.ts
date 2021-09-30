import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { DashboardServiceService } from '../dashboard-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  title="";
  typeD="";
  priority:any;
  affectedVersion="";
  components="";
  labels="";
  sprint="";
  type=0;
  status:any;
  resolution="";
  fixedVersion="";
  assignee="";
  reporter="";
  description="";
  today=new Date;
  createdOn=this.today.getDate().toString();
  //createdOn="";
  id="";
  dashService:DashboardServiceService;
 assigneeData:any;


  profileForm = this.fb.group({
    title: ['', [Validators.required,Validators.maxLength(350)]],
    typeD: ['',Validators.required],
    priority: ['', Validators.required],
    affectedVersion: ['', Validators.maxLength(100)],
    components: ['', Validators.maxLength(100)],
    labels: ['', Validators.maxLength(100)],
    sprint: ['', Validators.maxLength(100)],
    type: ['', Validators.max(10)],
    status: ['', Validators.required],
    resolution: ['', Validators.maxLength(100)],
    fixedVersion: ['', Validators.required],
    assignee: ['', Validators.required],
    reporter: [''],
    description: ['', [Validators.required,Validators.maxLength(250)]],
    

  });

  constructor(dashService:DashboardServiceService,private fb: FormBuilder) {
    this.dashService=dashService;
   }

  ngOnInit(): void {
    console.log(this.status);
    //this.assigneeData=this.dashService.getAssignee();
    console.log("assignee");
    console.log(this.assigneeData);
  }

  onClick()
  {
    if(!this.profileForm.valid)
    alert("please fill all the details");
    else{
    console.log("submitted");
    console.log("statuss="+this.status);
    if(this.status==='todo')
     this.status=1; 
     else if(this.status==='inProgress')
     this.status=2;
     else
     this.status=3;
     if(this.priority=='low')
     this.priority=5;
     else if(this.priority='medium')
     this.priority=4;
     else if(this.priority='high')
     this.priority=3;
     else if(this.priority='urgent')
     this.priority=2;
     else 
     this.priority=1;
    console.log(this.status);
    alert("Form Submitted Successfully");
    this.id=this.dashService.getId(this.assignee);

    this.dashService.addDetails({createdOn:this.createdOn,title:this.title,status:this.status,id:this.id,assignee:this.assignee,
      project:"dummy",createdBy:this.assignee,description:this.description,severity:this.priority,type:this.type

    })
  }
  }

}
