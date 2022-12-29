import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptDynamsoftCameraEnhancer } from '@demo/shared';
import { } from 'nativescript-dynamsoft-camera-enhancer';

@Component({
	selector: 'demo-nativescript-dynamsoft-camera-enhancer',
	templateUrl: 'nativescript-dynamsoft-camera-enhancer.component.html',
})
export class NativescriptDynamsoftCameraEnhancerComponent {
  
  demoShared: DemoSharedNativescriptDynamsoftCameraEnhancer;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNativescriptDynamsoftCameraEnhancer();
  }

}