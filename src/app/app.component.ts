import { Component } from '@angular/core'; 
import { NavbarComponent } from './navbar.component';

@Component({
	selector: 'my-app',
	template: `
	<div class="row">
	<div class="col-sm-3">
	<nav-bar></nav-bar>
	</div>
	<div class="col-sm-9">
	<div class="alert alert-success">
	<strong>Success!</strong> Indicates a successful or positive action.
	</div>
	<h1>{{title}}</h1>
	<h2>{{hero.name}} details!</h2>
	<div><label>id: </label>{{hero.id}}</div>
	<div>
	<label>name: </label>
	<input [(ngModel)]="hero.name" placeholder="name">
	</div>
	<div>
	<h2>My Heroes</h2>
	<ul class="heroes">
	<li *ngFor="let hero of heroes">
	<span class="badge">{{hero.id}}</span> {{hero.name}}
	</li>
	</ul>
	</div>
	<button type="button" class="btn btn-primary"
	popover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
	Live demo
	</button>
	</div>
	</div>
	`,
	styles: [`
	.selected {
		background-color: #CFD8DC !important;
		color: white;
	}
	.heroes {
		margin: 0 0 2em 0;
		list-style-type: none;
		padding: 0;
		width: 15em;
	}
	.heroes li {
		cursor: pointer;
		position: relative;
		left: 0;
		background-color: #EEE;
		margin: .5em;
		padding: .3em 0;
		height: 1.6em;
		border-radius: 4px;
	}
	.heroes li.selected:hover {
		background-color: #BBD8DC !important;
		color: white;
	}
	.heroes li:hover {
		color: #607D8B;
		background-color: #DDD;
		left: .1em;
	}
	.heroes .text {
		position: relative;
		top: -3px;
	}
	.heroes .badge {
		display: inline-block;
		font-size: small;
		color: white;
		padding: 0.8em 0.7em 0 0.7em;
		background-color: #607D8B;
		line-height: 1em;
		position: relative;
		left: -1px;
		top: -4px;
		height: 1.8em;
		margin-right: .8em;
		border-radius: 4px 0 0 4px;
	}
	`],
})
export class AppComponent { 

	title = 'Tour of Heroes';
	hero: Hero = {
		id: 1,
		name: 'Windstorm'
	};
	HEROES: Hero[] = [
	{ id: 11, name: 'Mr. Nice' },
	{ id: 12, name: 'Narco' },
	{ id: 13, name: 'Bombasto' },
	{ id: 14, name: 'Celeritas' },
	{ id: 15, name: 'Magneta' },
	{ id: 16, name: 'RubberMan' },
	{ id: 17, name: 'Dynama' },
	{ id: 18, name: 'Dr IQ' },
	{ id: 19, name: 'Magma' },
	{ id: 20, name: 'Tornado' }
	];
	heroes = this.HEROES;

}

export class Hero {
	id: number;
	name: string;
}
