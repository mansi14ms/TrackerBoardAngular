import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { DashboardServiceService } from './dashboard-service.service';

describe('DashboardServiceService', () => {
  let service: DashboardServiceService;

  beforeEach(() => {
    
    TestBed.configureTestingModule({ imports: [
      BrowserModule,
   AppRoutingModule,
   ReactiveFormsModule,
   HttpClientModule,
   FormsModule
    ],});
    service = TestBed.inject(DashboardServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  
});
