import { Application,Utils } from '@nativescript/core';
import { activeProperty, DynamsoftCameraEnhancerCommon } from './common';

export class DynamsoftCameraEnhancer extends DynamsoftCameraEnhancerCommon {
  cameraView: com.dynamsoft.dce.DCECameraView;
  dce:com.dynamsoft.dce.CameraEnhancer;
  createNativeView() {
    let context = Utils.android.getApplicationContext();
    this.dce = new com.dynamsoft.dce.CameraEnhancer(Application.android.foregroundActivity);
    this.cameraView = new com.dynamsoft.dce.DCECameraView(context);
    this.dce.setCameraView(this.cameraView);
    return this.cameraView;
  }

  initNativeView() {
    
  }

  [activeProperty.setNative](value: boolean) {
    if (value === true) {
      this.dce.open();
    }else{
      this.dce.close();
    }
  }
}
