import { EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptDynamsoftCameraEnhancer } from '@demo/shared';
import { CameraEnhancer } from 'nativescript-dynamsoft-camera-enhancer';

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
		alert("loaded");
		this.dce = <CameraEnhancer>args.object;
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

	onCaptureFrame(args: EventData) {
		alert("capture frame");
		if (this.dce) {
			alert("dce defined");
			const frame = this.dce.captureFrame();
			alert(frame.getWidth());
		}else{
			alert("dce undefined");
		}
	}
}
