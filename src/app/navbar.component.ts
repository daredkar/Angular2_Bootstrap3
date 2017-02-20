import { Component ,Input } from '@angular/core'; 

@Component({
	selector: 'nav-bar',
	template: `
	<div class="col-sm-3 col-md-2 sidebar">
          <ul class="nav nav-sidebar">
            <li class="active"><a href="#">Overview <span class="sr-only">(current)</span></a></li>
            <li><a href = "home">Home	</a></li>
            <li><a href="#">Analytics</a></li>
            <li><a href="#">Export</a></li>
          </ul>
          <ul class="nav nav-sidebar">
            <li><a href="">Nav item</a></li>
            <li><a href="">Nav item again</a></li>
            <li><a href="">One more nav</a></li>
            <li><a href="">Another nav item</a></li>
            <li><a href="">More navigation</a></li>
          </ul>
          <ul class="nav nav-sidebar">
            <li><a href="">Nav item again</a></li>
            <li><a href="">One more nav</a></li>
            <li><a href="">Another nav item</a></li>
          </ul>
        </div>
	`,
	styles: [`
	/*
	* Sidebar
	*/

	/* Hide for mobile, show later */
	.sidebar {
		display: none;
	}
	@media (min-width: 768px) {
		.sidebar {
			position: fixed;
			top: 51px;
			bottom: 0;
			left: 0;
			z-index: 1000;
			display: block;
			padding: 20px;
			overflow-x: hidden;
			overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
			background-color: #f5f5f5;
			border-right: 1px solid #eee;
		}
	}

	/* Sidebar navigation */
	.nav-sidebar {
		margin-right: -21px; /* 20px padding + 1px border */
		margin-bottom: 20px;
		margin-left: -20px;
	}
	.nav-sidebar > li > a {
		padding-right: 20px;
		padding-left: 20px;
	}
	.nav-sidebar > .active > a,
	.nav-sidebar > .active > a:hover,
	.nav-sidebar > .active > a:focus {
		color: #fff;
		background-color: #428bca;
	}

	`]
})
export class NavbarComponent {

}
