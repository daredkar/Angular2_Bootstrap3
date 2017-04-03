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

constructor(private form: FormsModule, public http: Http, private createJiraService: CreateJiraService, private jsonp: Jsonp) {}

    ngOnInit() {
        this.createJiraService.getMetadata()
        .subscribe(resData => this.r_Jira = resData,
                   resErr => this.errMsg = resErr );
    }
    checkAll() {
     this.r_Jira.forEach((t: any) => {
            t.checked = true;
        });
    }
    resetAll() {
     this.r_Jira.forEach((t: any) => {
     t.checked = false;
        });
    }
    sortSupport() {
        this.r_Jira.forEach(element => {
           if (!(_.includes(element.Title, 'SUPPORT'))) {
                this.n_Jira.push(element);
           }
        });
        console.log(this.n_Jira);
    }

}