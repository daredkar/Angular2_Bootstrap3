import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { Http, Response } from '@angular/http';
import { CreateJiraService } from './createJira.service';
import {Jsonp} from '@angular/http';
import * as csv from 'csvtojson';
import { Jira, JiraAuth } from './createJira.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
// tslint:disable-next-line:no-trailing-whitespace
moduleId: module.id,    
selector: 'createJira',
templateUrl: './createJira.html',
providers: [CreateJiraService]
})
export class CreateJiraComponent implements OnInit {

data: any;
errMsg: string;
public jira: Jira;
public jiraAuth: JiraAuth;
jiraForm: FormGroup;

constructor(private form: FormsModule, public http: Http, private createJiraService: CreateJiraService, private jsonp: Jsonp) {}

    ngOnInit() {
        this.createJiraService.getMetadata()
        .subscribe(resData => this.data = resData,
                   resErr => this.errMsg = resErr );
        this.jira = {
            project_key: '',
            decription: '',
            issuetype_name: '',
            summary: ''
        };
        this.jiraForm = new FormGroup({
            project_key: new FormControl('', Validators.required),
            description: new FormControl(''),
            issuetype_name: new FormControl(''),
            summary: new FormControl('')
        });
    }
    // public save(isValid: boolean, f: Jira) {
    //     console.log(f);
    //     console.log(f.decription);
    // }
     onSubmit() {
    console.log(this.jiraForm.value, this.jiraForm.valid);
    }
    authorization(){

    }
}