import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  dash: string;
  issue:string;
  create:string;
  constructor() {
    this.dash = '/assets/images/Dashboard_dark.svg';
    this.issue='/assets/images/Issues_dark.svg';
    this.create='/assets/images/Create_dark.svg';


   }

  ngOnInit(): void {
  }

}
