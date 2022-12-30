import { Application,Utils } from '@nativescript/core';
import { activeProperty, cameraIDProperty, DynamsoftCameraEnhancerCommon, torchProperty } from './common';

export class DynamsoftCameraEnhancer extends DynamsoftCameraEnhancerCommon {
  cameraView: com.dynamsoft.dce.DCECameraView;
  dce:com.dynamsoft.dce.CameraEnhancer;

  // @ts-ignore
  get android(): com.dynamsoft.dce.DCECameraView {
    return this.nativeView;
  }

  createNativeView() {
    let context = Utils.android.getApplicationContext();
    this.dce = new com.dynamsoft.dce.CameraEnhancer(Application.android.foregroundActivity);
    this.cameraView = new com.dynamsoft.dce.DCECameraView(context);
    this.dce.setCameraView(this.cameraView);
    return this.cameraView;
  }

  initNativeView() {
    
  }

  captureFrame():com.dynamsoft.dce.DCEFrame{
    return this.dce.getFrameFromBuffer(true);
  }

  getAllCameras():string[]{
    let array = [];
    let cameras = this.dce.getAllCameras();
    for (let index = 0; index < cameras.length; index++) {
        const camera = cameras[index];
        array.push(camera);
    }
    return array;
  }

  getSelectedCamera():string{
    return this.dce.getSelectedCamera();
  }

  [activeProperty.setNative](value: boolean) {
    if (value === true) {
      this.dce.open();
    }else{
      this.dce.close();
    }
  }

  [torchProperty.setNative](value: boolean) {
    alert("torch property: "+value);
    if (value === true) {
      this.dce.turnOnTorch();
    }else{
      this.dce.turnOffTorch();
    }
  }

  [cameraIDProperty.setNative](value: string) {
    if (value) {
      this.dce.selectCamera(value);
    }
  }
}
