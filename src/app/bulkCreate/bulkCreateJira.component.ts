import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { Http, Response } from '@angular/http';
import { CreateJiraService } from '../creteJira/createJira.service';
import {Jsonp} from '@angular/http';
import * as csv from 'csvtojson';


@Component({
selector: 'bulkcreateJira',
templateUrl: './app/bulkCreate/bulkCreateJira.html',
providers: [CreateJiraService],
styleUrls: ['./styles.css'],
})
export class BulkCreateJiraComponent implements OnInit{
data: any;
errMsg: string;
private selectAll: any;

constructor(private form: FormsModule, public http: Http, private createJiraService: CreateJiraService, private jsonp: Jsonp) {}

    ngOnInit() {
        this.createJiraService.getMetadata()
        .subscribe(resData => this.data = resData,
                   resErr => this.errMsg = resErr );
    }
    checkAll() {
     this.data.forEach((t: any) => {
            t.checked = true;
        });
    }
    resetAll() {
     this.data.forEach((t: any) => {
     t.checked = false;
     //check: = false;
        });
    }
}