import { Injectable } from '@angular/core';

@Injectable()
export class DataService{

private post: any;

constructor() {
    this.post = [
        {title: 'one', body: 'osne is one'},
        {title: 'two', body: 'osne is two'},
        {title: 'three', body: 'osne is three'}
    ];
}
getPost() {
    return this.post;
}
}