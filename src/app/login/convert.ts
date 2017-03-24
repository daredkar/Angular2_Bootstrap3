import * as csvtojson from 'csvtojson';
import { Injectable } from '@angular/core';

@Injectable()
export class Convert{
     readData (path: string) {
      const csvFilePath = path;
        csvtojson({noheader: true, ignoreEmpty: true})
        .fromFile(csvFilePath)
        .on('csv', (csvRow: any) => {
         console.log(csvRow);
        // tslint:disable-next-line:eofline
        });
    }
}
