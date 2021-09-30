import { HttpClient, HttpParams } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';


@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {
 // details:any;
  details=[
    {
      "createdOn": "2021-03-31T14:49:33.000Z",
      "title": "Some random title 3",
      "status": 3,
      "id": "PCG000001",
      "assignee": "H005",
      "project": "HU-2021-angular",
      "createdBy": "H002",
      "description": "Incorrect val on edit failure",
      "severity": 2,
      "type": 2
   },
   {
    "severity": 2,
    "createdBy": "H002",
    "title": "Some random title 3",
    "status": 3,
    "id": "PCG000002",
    "description": "Incorrect val on edit failure",
    "project": "HU-2021-angular",
    "assignee": "H005",
    "createdOn": "2021-03-31T14:50:44.973Z",
    "type": 2
   }
  ]
  reporter=[
    {
      "name": "Mansi",
      "designation": "Software Enginner",
      "isActive": true,
      "id": "H051"
   }
  ]
  dummyData="checkingTest";
  li:any;
  lis=[];
  temp:any;
  flag:boolean=false;
  text="";
  httpClient:HttpClient;
  searchList: any;
  issueDetailsStore=[];
  DELETEURL:string;
  POST_URL:string;

  constructor(httpClient:HttpClient) {
    this.httpClient=httpClient;
    //this.DELETEURL="https://us-central1-groupnexus-poc-285411.cloudfunctions.net/api/issue?userId=";
    this.DELETEURL = 'https://us-central1-groupnexus-poc-285411.cloudfunctions.net/api/issue?issueId=';
    this.POST_URL = 'https://us-central1-groupnexus-poc-285411.cloudfunctions.net/api/issue?userId='; 
   }
   arrBirds: any;
   fetchData(){
    this.httpClient.get('https://us-central1-groupnexus-poc-285411.cloudfunctions.net/api/issue').subscribe(
      (data)=>{
       this.lis=data as [];
       for(let i in this.lis)
      { 
      this.details.push(this.lis[i]);}
      
        return this.details;
      }
    )
    
  }
  fetchReporterData(){
    this.httpClient.get('https://us-central1-groupnexus-poc-285411.cloudfunctions.net/api/user').subscribe(
      (data)=>{
        this.lis=data as [];
        for(let i in this.lis)
       { 
       this.reporter.push(this.lis[i]);}
       
         for(let i in this.reporter)
         console.log("id is"+this.reporter[i].id);
         return this.details;
       }
     )


  }

   getData()
  {
  
    return this.details;
                                                   
  }
  addDetails(charc: { createdOn: string; title: string; status:  number; id: string; assignee: string; project: string; createdBy: string; description: string; severity:  number; type: number; })
  {
    this.details.push(charc);
    console.log("id="+charc.id);
    console.log("title="+charc.title);
    console.log("added");
    let randomValue="H"+Math.floor(Math.random() * (999 - 100) + 100);
    console.log(randomValue);
    let finId=charc.id;
    let finalId=finId.toString();
    let posturl=this.POST_URL+finalId;
    console.log("posturl="+posturl);
    this.httpClient.post(posturl, charc)
    .subscribe(
        (transformedData: any) => {
            // Use your response data here
            console.log("data="+transformedData as string);
        }
    );


  }
 assignee:any;
  getAssignee()
  {
    this.assignee=["heello"];
    for(let i in this.details)
    {
      let val=this.details[i].assignee;
      let index=this.assignee.indexOf(val);
      if(index<0)
      this.assignee.push(val);
     
    }
    return this.assignee;
  }

  addtemp(det:[])
  {
this.temp=det;
console.log("det="+det);
  }
  searchResult(text:string)
  {
    this.flag=true;
    this.text=text;
    
 

  }
 sendResult()
 {
   console.log("sending from service");
   return(this.text);
   
 }
 getIssueData(data:string)
 {  
   
     for(let i in this.details)
     {
       if(this.details[i].id==data)
       {
         return this.details[i];
       }
     }
     return null;
 }
 getName(name:string)
 {
   for(let i in this.reporter)
   {
     if(this.reporter[i].id==name)
     return this.reporter[i].name;
   }
   return null;
 }
 getId(name:string)
 {
  for(let i in this.reporter)
  {
    if(this.reporter[i].name==name)
    {
    return this.reporter[i].id;
  }}
  return "";

 }
 onClickDelete(id:string)
 {
   let idz;
   console.log("id received="+id);
   let finalurl=this.DELETEURL+id;
   console.log("url="+finalurl);
  this.httpClient.delete(finalurl)
  .subscribe(
    (result) => console.log("result="+result),
   
  );
 }


}


function subscribe(arg0: (result: any) => void, arg1: (err: any) => void) {
  throw new Error('Function not implemented.');
}

