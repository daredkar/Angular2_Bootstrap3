import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { Http, Response } from '@angular/http';
import { CreateJiraService } from '../creteJira/createJira.service';
import { Jira, JiraAuth } from '../creteJira/createJira.interface';
import {ResponseJira} from './responseJira.interface';
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
r_Jira: ResponseJira[];
n_Jira: ResponseJira[] = [];
jiraSelectedList: string [] = [] ;
allJiraSelected: boolean;
isjirasorted: boolean = false;

constructor(private form: FormsModule, public http: Http, private createJiraService: CreateJiraService, private jsonp: Jsonp) {}

    ngOnInit() {
        this.createJiraService.getMetadata()
        .subscribe(resData => this.r_Jira = resData,
                   resErr => this.errMsg = resErr );
                    //this.sortSupport();
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

    jiraSelected(list: string , event : any){
        if (event.target.checked){
                this.jiraSelectedList.push(list);
        } else {
            let index = this.jiraSelectedList.indexOf(list);
            this.jiraSelectedList.splice(index,1);
        }

        console.log(this.jiraSelectedList);
    }
 }