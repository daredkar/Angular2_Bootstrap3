import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { Http, Response } from '@angular/http';
import { CreateJiraService } from './createJira.service';
import {Jsonp} from '@angular/http';
import * as csv from 'csvtojson';


@Component({
selector: 'createJira',
templateUrl: './app/creteJira/createJira.html',
providers: [CreateJiraService]
})
export class CreateJiraComponent {
data: any;
errMsg: string;
constructor(private form: FormsModule, public http: Http, private createJiraService: CreateJiraService, private jsonp: Jsonp) {}

    ngOnInit() {
        this.createJiraService.getMetadata()
        .subscribe(resData => this.data = resData,
                   resErr => this.errMsg = resErr );
    }
}