import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptDynamsoftBarcodeReader } from '@demo/shared';
import { DynamsoftBarcodeReader } from 'nativescript-dynamsoft-barcode-reader';
import { DynamsoftCameraEnhancer } from '@xulihang/nativescript-dynamsoft-camera-enhancer';
import { TextResult } from '@xulihang/nativescript-dynamsoft-barcode-reader/common';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptDynamsoftBarcodeReader {
	isActive: boolean = true;
	desiredTorchStatus:boolean = false;
	desiredCamera:string = "";

	dce:DynamsoftCameraEnhancer;
	dbr:DynamsoftBarcodeReader;
	cameras:string[]|undefined;

	constructor(){
		super();
    this.dbr = new DynamsoftBarcodeReader();
		//this.initLicense();
	}

	initLicense(){
		this.dbr.initLicense("DLS2eyJoYW5kc2hha2VDb2RlIjoiMjAwMDAxLTE2NDk4Mjk3OTI2MzUiLCJvcmdhbml6YXRpb25JRCI6IjIwMDAwMSIsInNlc3Npb25QYXNzd29yZCI6IndTcGR6Vm05WDJrcEQ5YUoifQ==");
	}

	dceLoaded(args: EventData) {
		alert("loaded");
		this.dce = <DynamsoftCameraEnhancer>args.object;
	}

	onSwitchCamera(args: EventData) {
		alert("switch camera");
		if (this.dce) {
			if (!this.cameras) {
                this.cameras = this.dce.getAllCameras();
			}
            const selectedCamera = this.dce.getSelectedCamera();
			let nextIndex = this.cameras.indexOf(selectedCamera) + 1;
			if (nextIndex >= this.cameras.length) {
				nextIndex = 0;
			}
			const nextCamera = this.cameras[nextIndex];
			if (nextCamera != selectedCamera) {
                this.set("desiredCamera",nextCamera);
			}
		}
	}

	onSwitchTorch(args: EventData) {
		this.set("desiredTorchStatus",!this.desiredTorchStatus);
	}

	onDecodeFrame(args: EventData){
    let textResults:TextResult[] = this.dbr.decodeFrame(this.dce.captureFrame());
		alert("Found "+textResults.length+" barcodes.");
	}
}
