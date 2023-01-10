import { AndroidActivityBundleEventData, AndroidApplication, Application, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptDynamsoftCameraEnhancer } from '@demo/shared';
import { CameraEnhancer } from 'nativescript-dynamsoft-camera-enhancer';
import "./styles.css";
import { EnumCameraResolution } from '@xulihang/nativescript-dynamsoft-camera-enhancer/common';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptDynamsoftCameraEnhancer {
	isActive: boolean = true;
	desiredTorchStatus:boolean = false;
	desiredCamera:string = "";

	dce:CameraEnhancer;
	cameras:string[]|undefined;

	dceLoaded(args: EventData) {
		this.dce = <CameraEnhancer>args.object;
		this.dce.setResolution(EnumCameraResolution.RESOLUTION_480P);
		this.registerLifeCycleEvents();
	}

	registerLifeCycleEvents(){
		if (global.isAndroid) {
			let pThis = this;
			Application.android.on(AndroidApplication.activityPausedEvent, function (args: AndroidActivityBundleEventData) {
				console.log("paused");
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
			});
		}
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

	onCaptureFrame(args: EventData) {
		if (this.dce) {
			console.log(this.dce.getResolution());
			let width,height;
			const frame = this.dce.captureFrame();
			if (global.isAndroid) {
        width = frame.getWidth();
				height = frame.getHeight();
			}else{
				width = frame.width;
				height = frame.height;
			}
			alert("Captured a "+width+"x"+height+" sized frame");
		}else{
			alert("dce undefined");
		}
	}
}
