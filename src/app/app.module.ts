import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NavbarComponent } from './navbar.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent }  from './app.component';
@NgModule({

	imports:      [ BrowserModule, FormsModule, AppRoutingModule],
	declarations: [ AppComponent, NavbarComponent, HomeComponent, routingComponents],
	bootstrap:    [ AppComponent ]
})
export class AppModule { }
