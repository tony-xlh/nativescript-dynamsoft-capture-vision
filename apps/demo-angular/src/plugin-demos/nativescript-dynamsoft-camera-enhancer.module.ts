import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptDynamsoftCameraEnhancerComponent } from './nativescript-dynamsoft-camera-enhancer.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptDynamsoftCameraEnhancerComponent }])],
  declarations: [NativescriptDynamsoftCameraEnhancerComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class NativescriptDynamsoftCameraEnhancerModule {}
