import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Jsonp} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class CreateJiraService {
    times: number= 0;
    private url: string = 'app/assets/c_export.json';
    constructor(private http: Http, private jsonp: Jsonp ) {}

    getMetadata() {
        let params = new URLSearchParams();
        params.set('format', 'json');
       // params.set('callback', `__ng_jsonp__.__req${this.times}.finished`);
       params.set('callback', `JSONP_CALLBACK`);
        this.times = this.times + 1;
        return this.http.get(this.url)
        .map((response: Response) => response.json())
        .catch(this.errorHandler);
    }
    errorHandler(error: Response) {
        console.error(error);
        return Observable.throw(error || 'Server Error');
    }
 }