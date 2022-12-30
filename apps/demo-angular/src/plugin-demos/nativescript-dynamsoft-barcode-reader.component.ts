import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptDynamsoftBarcodeReader } from '@demo/shared';
import { } from 'nativescript-dynamsoft-barcode-reader';

@Component({
	selector: 'demo-nativescript-dynamsoft-barcode-reader',
	templateUrl: 'nativescript-dynamsoft-barcode-reader.component.html',
})
export class NativescriptDynamsoftBarcodeReaderComponent {
  
  demoShared: DemoSharedNativescriptDynamsoftBarcodeReader;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNativescriptDynamsoftBarcodeReader();
  }

}