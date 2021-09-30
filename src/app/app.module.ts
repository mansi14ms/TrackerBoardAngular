import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MaintabComponent } from './maintab/maintab.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { IssuesComponent } from './issues/issues.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IssueDetailsComponent } from './issue-details/issue-details.component';

const routes = [
  { path: 'dashboard', component: MaintabComponent, children: [
    
  ] },
  { path: 'form', component: FormComponent },
  { path: 'issues', component: IssuesComponent },
  { path: 'issueDetails/:id', component: IssueDetailsComponent },

  { path: '**', redirectTo: '/dashboard' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MaintabComponent,
    FormComponent,
    IssuesComponent,
    IssueDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
