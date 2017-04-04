import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { NavbarComponent } from './navbar.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { HttpModule, JsonpModule }    from '@angular/http';
import { LoginComponent } from './login/login.component';
import { RouterModule }  from '@angular/router';
import { AllowAccess } from './allow-access.service';


import { AppComponent }  from './app.component';
@NgModule({

imports:      [ BrowserModule, FormsModule, AppRoutingModule, HttpModule, JsonpModule, ReactiveFormsModule, RouterModule],
declarations: [ AppComponent, NavbarComponent, HomeComponent, routingComponents, LoginComponent],
bootstrap:    [ AppComponent ],
providers:    [ AllowAccess ],
})
export class AppModule { }
