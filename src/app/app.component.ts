import { Component } from '@angular/core'; 
import { NavbarComponent } from './navbar.component';
import { HomeComponent } from './home/home.component';
import { Http, Response } from '@angular/http';
import { PageToRead } from './page_to_read';

@Component({
	selector: 'my-app',
	templateUrl: 'app/app.html'
})
export class AppComponent { 

	pages : PageToRead[] = [];

	constructor (private http: Http) {}
	onChange(event) {
        var text : PageToRead[] = [];
        var files = event.srcElement.files;
        if(files[0].name.includes(".csv"))
        {
           var input = event.target;
           var reader = new FileReader();
         
           reader.onload = function(){
             let csvData = reader.result;
             let allTextLines = csvData.split(/\r\n|\n/);
             let headers = allTextLines[0].split(';');
             let lines = [];
             
             for (let i = 0; i < allTextLines.length; i++) {
              // split content based on comma
              let data = allTextLines[i].split(';');
              if (data.length == headers.length) {
                let tarr = [];
                for (let j = 0; j < headers.length; j++) {
                  tarr.push(data[j]);
                }
                var page = new PageToRead();
                page.Url = "https://www.google.ie/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#safe=active&q=" + tarr[0] + "+" + tarr[1] + "+" + tarr[2];
                text.push(page);
              }
            }
          };
          reader.readAsText(input.files[0]);
          this.pages = text;
          console.log(this.pages);
          this.http.post("localhost:5000/setData", text)
      }
    }
}
