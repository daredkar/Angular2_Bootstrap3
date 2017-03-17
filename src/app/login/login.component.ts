import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Converter } from 'csvtojson';
import { RouterModule } from '@angular/router';

import * as csv from 'csvtojson';

@Component({
selector: 'login',
templateUrl: './app/login/login.html',
})
export class LoginComponent {
csvUrl: string = 'app/assets/export.csv';  // URL to web API
  csvData: any[] = [];

  constructor (private http: Http, private router: RouterModule) {}

  readCsvData () {
    this.http.get(this.csvUrl)
    .subscribe(
      data => this.extractData(data),
      err => this.handleError(err)
    );
  }

  private extractData(res: Response) {

    let csvData = res['_body'] || '';
    let allTextLines = csvData.split(/\r\n|\n/);
    let headers = allTextLines[0].split(',');
    let lines = [];

    for ( let i = 0; i < allTextLines.length; i++) {
        // split content based on comma
        let data = allTextLines[i].split(',');
        if (data.length === headers.length) {
            let tarr = [];
            for ( let j = 0; j < headers.length; j++) {
                tarr.push(data[j]);
            }
            lines.push(tarr);
        }
    }
    this.csvData = lines;
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return errMsg;
  }

  convertToJson() {
    const csvFilePath = 'app/assets/export.csv';
   csv({noheader: true})
      .fromFile(csvFilePath)
      .on('json', (jsonObj: JSON) => {
    console.log(jsonObj);
    })
      .on('done', (error: any) => {
    console.log('end');
    });
  }
}
