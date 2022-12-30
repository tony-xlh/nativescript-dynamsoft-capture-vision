import { Component } from '@angular/core';

@Component({
	selector: 'demo-home',
	templateUrl: 'home.component.html',
})
export class HomeComponent {
	demos = [
	{
		name: 'nativescript-dynamsoft-barcode-reader'
	},
	{
		name: 'nativescript-dynamsoft-camera-enhancer'
	}
];
}