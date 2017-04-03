import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class EditProfileGuard implements CanActivate {

    //must be set to true for navigation to succeed
    allow = false;

    canActivate(){
        if(this.allow){
            this.allow = false;
            return true;
        }
        else return false;
    }
}