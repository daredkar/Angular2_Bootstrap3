import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Jsonp} from '@angular/http';
import { Jira, JiraAuth } from '../creteJira/createJira.interface';
import {ResponseJira} from '../bulkCreate/responseJira.interface';
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
    constructor(private http: Http, private jsonp: Jsonp ) {}

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
    authorize(u: string, p: string){

    }
    createBulkJira(jiraList: string[]) {

    }
 }