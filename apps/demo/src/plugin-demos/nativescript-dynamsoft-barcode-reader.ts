import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptDynamsoftBarcodeReader } from '@demo/shared';
import { BarcodeReader,TextResult } from 'nativescript-dynamsoft-barcode-reader';
import { CameraEnhancer } from 'nativescript-dynamsoft-camera-enhancer';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptDynamsoftBarcodeReader {
	isActive: boolean = true;
	desiredTorchStatus:boolean = false;
	desiredCamera:string = "";

	dce:CameraEnhancer;
	dbr:BarcodeReader;
	cameras:string[]|undefined;
	worker:Worker;
	constructor(){
		super();
    this.dbr = new BarcodeReader();
		this.worker = new Worker("./workers/barcodeReader.js");
		this.worker.onmessage = function(msg) {
			console.log("on message");
			console.log(msg);
		}
		this.worker.onerror = function(err) {
			console.log(`An unhandled error occurred in worker: ${err.filename}, line: ${err.lineno} :`);
			console.log(err.message);
		}
	}

	initLicense(){
		this.dbr.initLicense("DLS2eyJoYW5kc2hha2VDb2RlIjoiMjAwMDAxLTE2NDk4Mjk3OTI2MzUiLCJvcmdhbml6YXRpb25JRCI6IjIwMDAwMSIsInNlc3Npb25QYXNzd29yZCI6IndTcGR6Vm05WDJrcEQ5YUoifQ==");
	}

	dceLoaded(args: EventData) {
		this.dce = <CameraEnhancer>args.object;
	}

	onSwitchCamera(args: EventData) {
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
		const frame = this.dce.captureFrame();
		this.worker.postMessage({ info:"asd",frame: frame, dbr: this.dbr });
	}



	onInitLicense(args:EventData) {
		this.initLicense();
	}
}
