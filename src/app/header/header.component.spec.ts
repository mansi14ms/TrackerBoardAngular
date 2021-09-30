import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { DashboardServiceService } from '../dashboard-service.service';

import { HeaderComponent } from './header.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
      ],
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create the header', async(() => {
    let fixture = TestBed.createComponent(HeaderComponent);
    let app = fixture.debugElement.componentInstance;
    let dashService=fixture.debugElement.injector.get(DashboardServiceService);
    fixture.detectChanges();
    expect(app).toBeTruthy();
  }));
  it('should check injector', async(() => {
    let fixture = TestBed.createComponent(HeaderComponent);
    let app = fixture.debugElement.componentInstance;
    let dashService=fixture.debugElement.injector.get(DashboardServiceService);
    let dummy="checkingTest";
    fixture.detectChanges();
    expect(dashService.dummyData).toEqual(dummy);
  }));



 

});
