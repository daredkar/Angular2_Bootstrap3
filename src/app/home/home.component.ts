import { Component } from '@angular/core'; 
import { CreateJiraService } from '../creteJira/createJira.service';
import { DataService } from './data.service';
import { Http, Response } from '@angular/http';
import {Jsonp} from '@angular/http';

@Component({
selector: 'home',
template: `
<div>
<button type="button" class="btn btn-primary btn-md" (click)=getData()>create basic jira issue</button>
  <h2>rest data in home</h2>
    <ul *ngFor="let d of post">
        <li>{{ d.title }}</li>
    </ul>
	<h2>rest data in jira</h2>
    <ul *ngFor="let t of data">
        <li>{{ t['Incident ID'] }}</li>
    </ul>
    <router-outlet></router-outlet>
</div>`,
providers: [CreateJiraService, DataService],
})
export class HomeComponent {
data: any;
errMsg: string;
post: any;
constructor(public http: Http, private createJiraService: CreateJiraService, private jsonp: Jsonp){
this.post = [
		{"title": "one", "body": "osne is one"},
        {"title": "two", "body": "osne is two"},
        {"title": "three", "body": "osne is three"}
    ];
}
ngOnInit() {
        this.createJiraService.getMetadata()
        .subscribe(resData => this.data = resData,
                   resErr => this.errMsg = resErr );
    }

getData() {
return this.post;
}
}