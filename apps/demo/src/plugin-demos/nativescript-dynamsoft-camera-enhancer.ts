import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptDynamsoftCameraEnhancer } from '@demo/shared';
import { } from 'nativescript-dynamsoft-camera-enhancer';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptDynamsoftCameraEnhancer {
	
}
