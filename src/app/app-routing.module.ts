import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {CreateJiraComponent} from './creteJira/createJira.component';
import { BulkCreateJiraComponent } from './bulkCreate/bulkCreateJira.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'readExcel', component: LoginComponent },
  { path: 'createJira', component: CreateJiraComponent },
  { path: 'bulkCreate', component: BulkCreateJiraComponent },
  ];
  @NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

export const routingComponents = [HomeComponent, LoginComponent, CreateJiraComponent, BulkCreateJiraComponent];
