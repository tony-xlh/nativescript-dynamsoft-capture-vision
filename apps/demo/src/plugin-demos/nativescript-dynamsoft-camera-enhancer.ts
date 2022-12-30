import { EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptDynamsoftCameraEnhancer } from '@demo/shared';
import { } from 'nativescript-dynamsoft-camera-enhancer';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export function onSwitchTorch(args: EventData) {
    alert("switch torch");
}

export function onSwitchCamera(args: EventData) {
    alert("switch camera");
}

export function onCaptureFrame(args: EventData) {
    alert("capture frame");
}

export class DemoModel extends DemoSharedNativescriptDynamsoftCameraEnhancer {
	get isActive(): boolean {
		return true;
	}
}
