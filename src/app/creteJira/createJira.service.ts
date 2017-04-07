import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Jsonp} from '@angular/http';
import { Jira, JiraAuth } from '../creteJira/createJira.interface';
import {ResponseJira} from '../bulkCreate/responseJira.interface';
import {ReqCreateJira} from '../bulkCreate/reqCreateJira.interface';
import { JiraCreated } from '../bulkCreate/jiraCreated.interface';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/filter';
import * as _ from 'lodash';


@Injectable()
export class CreateJiraService {
    times: number= 0;
    private url: string = 'app/assets/c_export.json';
    c_data: Jira[];
    r_data: ResponseJira[];
    createdJira: JiraCreated;
    username: string;
    password: string;
    constructor(private http: Http, private jsonp: Jsonp) {}

    getMetadata(): Observable<ResponseJira[]> {
      //  let params = new URLSearchParams();
      //  params.set('format', 'json');
       // params.set('callback', `__ng_jsonp__.__req${this.times}.finished`);
      // params.set('callback', `JSONP_CALLBACK`);
       // this.times = this.times + 1;
        return this.http.get(this.url)
        .map((response: Response) => response.json())
        .catch(this.errorHandler);
    }
    errorHandler(error: Response) {
        console.error(error);
        return Observable.throw(error || 'Server Error');
    }
    authorize(u: string, p: string) {
        console.log(u , p);
    }
    createBulkJira(jira: ReqCreateJira): Observable<JiraCreated> {
        this.username = 'admin';
        this.password = 'Shamika@1112';
        let encode: string;
        encode = this.username.concat(this.password);
        let jira_creation_url: string;
        jira_creation_url = 'https://daredkar.atlassian.net/rest/api/2/issue';
        let body;
        body = {
    "fields": {
       "project":
       { 
          "key": "HPSMTOJ"
       },
       "summary": "SUPPORT-5168 CC-93 - 5",
       "description": "five testing on dev by issuetypeid",
       "issuetype": {
          "name": "Bug",
          "id": "10000"
       },
       "customfield_10002": "admin",
       "components": [
            {
                "name": "Kasia2"
            }
        ],
        "assignee": {
            "name": "admin"
        },
        "priority": {
            "id": "3"
        }
   }
};
        let headers = new Headers();
        headers.append('Access-Control-Allow-Origin', 'http://http://localhost:4600/bulkCreate');
        headers.append('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
        //headers.append('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Accept', 'application/json');
        headers.append('X-Atlassian-Token', 'no-check');
        let encoded: string;
        encoded = btoa(encode);
        console.log('encoded string' + encoded);
        headers.append('Authorization', 'Basic '  + btoa(this.username + ":" + this.password));
        headers.append('Cache-Control', 'no-cache');
        //headers.append('Postman-Token', '2cc1bedb-598d-09d7-575b-6fd54475925b');
        let options = new RequestOptions({method: RequestMethod.Post, headers: headers});
        console.log('headers are' + JSON.stringify(headers));
        return this.http.post(jira_creation_url + body, options)
        .map(res => res.json)
        .catch(this.jiraFailed);
    }
    jiraFailed(error: Response) {
        console.error(error);
        return Observable.throw(error || 'Server Error with Jira Creation');
    }
 }