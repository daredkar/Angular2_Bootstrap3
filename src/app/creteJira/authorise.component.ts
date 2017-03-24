import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { Http, Response } from '@angular/http';
import { CreateJiraService } from './createJira.service';
import { Jira, JiraAuth } from './createJira.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
// tslint:disable-next-line:no-trailing-whitespace
moduleId: module.id,    
selector: 'createJira',
template: `
<div class="container">
<div class="jumbotron" style="background-size: cover; background: contain;"><h4> Enter the username and password to check authorization</h4>
<div class="well">
  <form class="ui form" novalidate [formGroup]="AuthForm" (ngSubmit)="ngOnInit()">
    <div class="input-group">
      <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
        <input id="name" type="text" class="form-control"  placeholder="UserName"  required>
        <!--<div [hidden]="name.valid || name.pristine"
             class="alert alert-danger">
             Name is required
        </div>-->
    </div>
    <div class="input-group">
      <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
      <input id="password" type="password" class="form-control" name="password" placeholder="Password">
    </div>

    <button type="submit" class="btn btn-primary btn-md" >Authorise</button>
  </form>
  <router-outlet></router-outlet>
  </div>
  </div>`,
providers: [CreateJiraService]
})
export class AuthorizeComponent {

public jiraAuth: JiraAuth;
AuthForm: FormGroup;

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
}