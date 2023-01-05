import { AndroidActivityBundleEventData, AndroidApplication, Application,Utils } from '@nativescript/core';
import { activeProperty, cameraIDProperty, CameraEnhancerCommon, torchProperty } from './common';

export class CameraEnhancer extends CameraEnhancerCommon {
  cameraView: com.dynamsoft.dce.DCECameraView;
  dce:com.dynamsoft.dce.CameraEnhancer;
  cameraStatus:com.dynamsoft.dce.EnumCameraState;
  // @ts-ignore
  get android(): com.dynamsoft.dce.DCECameraView {
    return this.nativeView;
  }

  constructor(){
    super();
    this.registerLifeCycleEvents();
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

  registerLifeCycleEvents(){
    let pThis = this;
    Application.android.on(AndroidApplication.activityPausedEvent, function (args: AndroidActivityBundleEventData) {
      console.log("paused");
      if (pThis.dce) {
        pThis.cameraStatus = pThis.dce.getCameraState();
        console.log("camera status: "+pThis.cameraStatus);
        if (pThis.cameraStatus === com.dynamsoft.dce.EnumCameraState.OPENED) {
          pThis.dce.close();
        }
      }
    });

    Application.android.on(AndroidApplication.activityResumedEvent, function (args: AndroidActivityBundleEventData) {
      console.log("resumed");
      if (pThis.dce && pThis.cameraStatus) {
        console.log("camera status: "+pThis.cameraStatus);
        if (pThis.cameraStatus === com.dynamsoft.dce.EnumCameraState.OPENED) {
          pThis.dce.open();
        }
      }
    });
  }

  captureFrame():com.dynamsoft.dce.DCEFrame{
    return this.dce.getFrameFromBuffer(true);
  }

  captureFrameAsBase64():string{
    let frame = this.dce.getFrameFromBuffer(true);
    let bitmap = frame.toBitmap();
    return this.bitmap2Base64(bitmap);
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

  bitmap2Base64(bitmap:android.graphics.Bitmap):string{
    let outputStream = new java.io.ByteArrayOutputStream();
    bitmap.compress(android.graphics.Bitmap.CompressFormat.JPEG, 100, outputStream);
    return android.util.Base64.encodeToString(outputStream.toByteArray(), android.util.Base64.DEFAULT);
  }

  [activeProperty.setNative](value: boolean) {
    if (value === true) {
      this.dce.open();
    }else{
      this.dce.close();
    }
  }

  [torchProperty.setNative](value: boolean) {
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
