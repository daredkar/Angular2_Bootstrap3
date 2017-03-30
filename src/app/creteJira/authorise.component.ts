import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { Http, Response } from '@angular/http';
import { CreateJiraService } from './createJira.service';
import { Jira, JiraAuth } from './createJira.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
// tslint:disable-next-line:no-trailing-whitespace
moduleId: module.id,    
selector: 'createJira',
template: `
<div class=" " >
<div class="jumbotron row col-md-6 col-lg-6 col-xs-6 col-md-offset-3 col-xs-offset-2" style="margin-top:4%; box-shadow: 0 0 10px grey;" >
<h4 class="title"> Authorization </h4>
<div class="well leftColouredWell">
  <form class="ui form " novalidate [formGroup]="AuthForm" (ngSubmit)="ngOnInit()">
    <div class="input-group">
      <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
        <input id="name" type="text" class="form-control"  placeholder="UserName"  required>
        <!--<div [hidden]="name.valid || name.pristine"
             class="alert alert-danger">
             Name is required
        </div>-->
    </div> <br />
    <div class="input-group">
      <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
      <input id="password" type="password" class="form-control" name="password" placeholder="Password">
    </div>
  <br />
    <button type="submit" class="btn btn-primary btn-md" (click)="redirect($event)">Authorise</button>
  </form>
  <router-outlet></router-outlet>
  </div>
  </div>`,
providers: [CreateJiraService]
})
export class AuthorizeComponent implements OnInit {

public jiraAuth: JiraAuth;
AuthForm: FormGroup;

constructor(private router: Router) {};
ngOnInit() {
    this.jiraAuth = {
        username: '',
        password: ''
    };
    this.AuthForm = new FormGroup({
        username: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
    });
}
redirect() {
  alert('Authorization is Successfull');
  this.router.navigate(['./bulkCreate']);
}
}