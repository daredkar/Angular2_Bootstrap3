import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { Http, Response } from '@angular/http';
import { CreateJiraService } from '../creteJira/createJira.service';
import { Jira, JiraAuth } from '../creteJira/createJira.interface';
import {ResponseJira} from './responseJira.interface';
import {ReqCreateJira} from './reqCreateJira.interface';
import { JiraCreated } from '../bulkCreate/jiraCreated.interface';
import { Observable } from 'rxjs/Observable';
import {Jsonp} from '@angular/http';
import * as csv from 'csvtojson';
import * as _ from 'lodash';


@Component({
selector: 'bulkcreateJira',
templateUrl: './app/bulkCreate/bulkCreateJira.html',
providers: [CreateJiraService],
styleUrls: ['./styles.css'],
})
export class BulkCreateJiraComponent implements OnInit {
data: any[];
errMsg: string;
newData: any;
c_data: Jira[];
r_Jira: ResponseJira[] = [];
n_Jira: ResponseJira[] = [];
jiraSelectedList: string [] = [] ;
allJiraSelected: boolean;
isjirasorted: boolean = false;
req_Jira: ReqCreateJira[] = [];
d_Jira: ResponseJira[] = [];
jira_success: JiraCreated;

constructor(private form: FormsModule, public http: Http, private createJiraService: CreateJiraService, private jsonp: Jsonp) {}

    ngOnInit() {
        this.createJiraService.getMetadata()
        .subscribe(resData => this.r_Jira = resData,
                   resErr => this.errMsg = resErr );
    }
    checkAll(event: any) {
        if (event.target.checked){
                 this.r_Jira.forEach((t: any) => {
                 t.checked = true;
                 this.allJiraSelected = true ;
            });
            } else {
            this.r_Jira.forEach((t: any) => {
            t.checked = false;
            this.allJiraSelected = false;
            });
        }
    }

    resetAll() {
     this.r_Jira.forEach((t: any) => {
     t.checked = false;
        });
    }
    sortSupport() {
        if (!this.isjirasorted) {
        this.r_Jira.forEach(element => {
           if (!(_.includes(element.Title, 'SUPPORT'))) {
                this.n_Jira.push(element);
           }
        });
        console.log(this.n_Jira);
        this.isjirasorted = true;
        }
    }

    jiraSelected(list: string , event: any){
        if (event.target.checked) {
                this.jiraSelectedList.push(list);
        } else {
            let index = this.jiraSelectedList.indexOf(list);
            this.jiraSelectedList.splice(index, 1);
        }

        console.log(this.jiraSelectedList);
    }
    createJira(event: any) {
        let a_Jira: ResponseJira = new ResponseJira();
        if (this.allJiraSelected) {

        }else {
            this.jiraSelectedList.forEach(element => {
             a_Jira = _.find(this.r_Jira, function(o){return o['Incident ID'] === element; });
             this.d_Jira.push(a_Jira);
            });
             //this.req_Jira.splice(0, this.req_Jira.length);
             //this.req_Jira.length = 0;
             for (let i = 0; i < this.d_Jira.length; i++) {
                let request: ReqCreateJira = new ReqCreateJira();
                request.fields.summary = this.d_Jira[i].Title;
                request.fields.description = this.d_Jira[i].Description;
                request.fields.issuetype.id = this.d_Jira[i]['Incident ID'];
                request.fields.issuetype.name = 'bug';
                //request.fields.customfield_10002 = 'admin';
                // // request.fields.components.components.forEach(e => {
                // //  e.name = 'Kasia2';
                // //  });
                //request.fields.assignee.name = this.d_Jira[i].Assignee;
                this.req_Jira.push(request);
             }
             this.req_Jira.forEach(element => {
                 console.log('element ' + JSON.stringify(element));
                 //do {
                 this.createJiraService.createBulkJira(element)
                 .subscribe(resData => this.jira_success = resData,
                   resErr => this.errMsg = resErr );
                 //}while (this.jira_success.id = null);
             });
            console.log('record is trying to insert in jira ' + JSON.stringify(this.jira_success));
        }
        console.log('record is trying to insert in jira ' + JSON.stringify(this.jira_success));
    }
 }