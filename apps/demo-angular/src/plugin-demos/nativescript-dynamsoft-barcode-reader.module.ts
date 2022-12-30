import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptDynamsoftBarcodeReaderComponent } from './nativescript-dynamsoft-barcode-reader.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptDynamsoftBarcodeReaderComponent }])],
  declarations: [NativescriptDynamsoftBarcodeReaderComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class NativescriptDynamsoftBarcodeReaderModule {}
