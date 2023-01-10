import { EventData, Page, AndroidActivityBundleEventData, AndroidApplication, Application } from '@nativescript/core';
import { DemoSharedNativescriptDynamsoftBarcodeReader } from '@demo/shared';
import { BarcodeReader,LicenseListener,TextResult } from 'nativescript-dynamsoft-barcode-reader';
import { CameraEnhancer } from 'nativescript-dynamsoft-camera-enhancer';
import "./styles.css";

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

	interval:any;
	liveOn:boolean = false;
	decoding:boolean = false;
	liveButtonText:string = "Turn on Live Detection";
	barcodeText:string = "";
	barcodes:TextResult[] = [];
	constructor(){
		super();
    this.dbr = new BarcodeReader();
		//scan QR code only
		//const template = "{\"ImageParameter\":{\"BarcodeFormatIds\":[\"BF_QR_CODE\"],\"Description\":\"\",\"Name\":\"Settings\"},\"Version\":\"3.0\"}";
		//this.dbr.initRuntimeSettingsWithString(template);
		this.registerLifeCycleEvents();
	}

	registerLifeCycleEvents(){
		if (global.isAndroid) {
			let pThis = this;
			Application.android.on(AndroidApplication.activityPausedEvent, function (args: AndroidActivityBundleEventData) {
				console.log("paused");
				if (pThis.dbr && pThis.liveOn) {
					console.log("stop scanning");
					pThis.dbr.stopScanning();
				}
				if (pThis.dce && pThis.isActive) {
					console.log("close camera");
					pThis.dce.close();
				}
			});
	
			Application.android.on(AndroidApplication.activityResumedEvent, function (args: AndroidActivityBundleEventData) {
				console.log("resumed");
				if (pThis.dce && pThis.isActive === true) {
					console.log("restart camera");
					pThis.dce.open();
				}
				if (pThis.dbr && pThis.liveOn) {
					console.log("start scanning");
					pThis.dbr.startScanning();
				}
			});
		}
  }


	initLicense(){
		const listener:LicenseListener = function (isSuccess:boolean,error:any) {
      console.log("License initialization result: "+isSuccess);
		}
		this.dbr.initLicense("DLS2eyJoYW5kc2hha2VDb2RlIjoiMjAwMDAxLTE2NDk4Mjk3OTI2MzUiLCJvcmdhbml6YXRpb25JRCI6IjIwMDAwMSIsInNlc3Npb25QYXNzd29yZCI6IndTcGR6Vm05WDJrcEQ5YUoifQ==", listener);
	}

	dceLoaded(args: EventData) {
		this.dce = <CameraEnhancer>args.object;
		this.dbr.setCameraEnhancer(this.dce.getCameraEnhancer());
		let pThis = this;
		this.dbr.setTextResultListener(function (textResults:TextResult[]) {
			pThis.barcodes = textResults;
			console.log(pThis.barcodes);
		})
	}

	onSwitchCamera(args: EventData) {
		if (this.dce) {
			if (this.liveOn) {
				this.toggleLiveDetection();
			}
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

	async onDecodeFrame(args: EventData){
		let frame = this.dce.captureFrame();
		console.log(frame);
    let textResults:TextResult[] = this.dbr.decodeFrame(frame);
		console.log(textResults);
		let barcodes = "Found "+textResults.length+" barcode(s).\n";
		textResults.forEach(textResult => {
			barcodes = barcodes + textResult.barcodeFormat + ": " + textResult.barcodeText + "\n";
		});
		alert(barcodes);
	}

	onInitLicense(args:EventData) {
		this.initLicense();
	}

	onToggleLiveDetection(args:EventData) {
    this.toggleLiveDetection();
	}

	toggleLiveDetection(){
		if (this.liveOn === false) {
			this.liveOn = true;
			this.set("liveButtonText","Turn off Live Detection");
			this.dbr.startScanning();
			const rerender = async () => {
				console.log("rerender");
				let barcodes = "Found "+this.barcodes.length+" barcode(s).\n";
				this.barcodes.forEach(textResult => {
					barcodes = barcodes + textResult.barcodeFormat + ": " + textResult.barcodeText + "\n";
				});
				this.set("barcodeText",barcodes);
			}
			console.log("set interval");
			this.interval = setInterval(rerender,200);
		}else{
			this.liveOn = false;
			this.set("liveButtonText","Turn on Live Detection");
			this.dbr.stopScanning();
			if (this.interval) {
				console.log("clear interval");
				clearInterval(this.interval);
			}
		}
	}

	toggleLiveDetection2(){
		if (this.liveOn === false) {
			this.liveOn = true;
			this.set("liveButtonText","Turn off Live Detection");
			this.decoding = false;
			console.log("set interval");
			const detecting = async () => {
				if (this.decoding === true) {
					console.log("is decoding");
					return;
				}
				console.log("start detecting");
				this.decoding = true;
				let frame = this.dce.captureFrame();
				if (frame) {
					let textResults:TextResult[] = await this.dbr.decodeFrameAsync(frame);
					let barcodes = "Found "+textResults.length+" barcode(s).\n";
					textResults.forEach(textResult => {
						barcodes = barcodes + textResult.barcodeFormat + ": " + textResult.barcodeText + "\n";
					});
					this.set("barcodeText",barcodes);
					console.log(barcodes);
				}
				this.decoding = false;
			}
			this.interval = setInterval(detecting,200);
		}else{
			this.liveOn = false;
			this.set("liveButtonText","Turn on Live Detection");
			console.log("clear interval");
			if (this.interval) {
				clearInterval(this.interval);
			}
		}
	}

}
