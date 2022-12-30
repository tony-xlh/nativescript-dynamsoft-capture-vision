import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptDynamsoftBarcodeReader } from '@demo/shared';
import { } from 'nativescript-dynamsoft-barcode-reader';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptDynamsoftBarcodeReader {
	
}
