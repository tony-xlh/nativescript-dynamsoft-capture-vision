import { Application,Utils } from '@nativescript/core';
import { activeProperty, cameraIDProperty, CameraEnhancerCommon, torchProperty, Resolution, EnumCameraResolution } from './common';


@NativeClass
class CaptureHandler {
  onCaptured(frame:com.dynamsoft.dce.DCEFrame) {}
}

@NativeClass
class CaptureRunnable extends java.lang.Runnable {
  dce:com.dynamsoft.dce.CameraEnhancer;
  frame:any;
  handler:CaptureHandler;
  constructor(dce:com.dynamsoft.dce.CameraEnhancer,handler:CaptureHandler){
    super();
    this.dce = dce;
    this.handler = handler;
    return global.__native(this);
  }

  run() {
    console.log("capture frame");
    let frame = this.dce.getFrameFromBuffer(true);
    this.handler.onCaptured(frame);
  }
}

export class CameraEnhancer extends CameraEnhancerCommon {
  cameraView: com.dynamsoft.dce.DCECameraView;
  dce:com.dynamsoft.dce.CameraEnhancer;
  // @ts-ignore
  get android(): com.dynamsoft.dce.DCECameraView {
    return this.nativeView;
  }

  constructor(){
    super();
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

  captureFrameAsync():Promise<com.dynamsoft.dce.DCEFrame>{
    let pThis = this;
    return new Promise(function (resolve, reject) {
      let handler:CaptureHandler = new CaptureHandler();
      handler.onCaptured = function (frame) {
        resolve(frame);
      }
      let runnable = new CaptureRunnable(pThis.dce,handler);
      let captureThread = new java.lang.Thread(runnable);
      captureThread.start();
    });
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

  getResolution():Resolution {
    let res:string = this.dce.getResolution().toString();
    let width = parseInt(res.split("x")[0]);
    let height = parseInt(res.split("x")[1]);
    return {width:width,height:height};
  }

  setResolution(res:EnumCameraResolution) {
    let targetRes:com.dynamsoft.dce.EnumResolution;
    if (res === EnumCameraResolution.RESOLUTION_AUTO) {
      targetRes = com.dynamsoft.dce.EnumResolution.RESOLUTION_AUTO;
    }else if (res === EnumCameraResolution.RESOLUTION_480P) {
      targetRes = com.dynamsoft.dce.EnumResolution.RESOLUTION_480P;
    }else if (res === EnumCameraResolution.RESOLUTION_720P) {
      targetRes = com.dynamsoft.dce.EnumResolution.RESOLUTION_720P;
    }else if (res === EnumCameraResolution.RESOLUTION_1080P) {
      targetRes = com.dynamsoft.dce.EnumResolution.RESOLUTION_1080P;
    }else if (res === EnumCameraResolution.RESOLUTION_4K) {
      targetRes = com.dynamsoft.dce.EnumResolution.RESOLUTION_4K;
    }else {
      throw new Error("Unsupported resolution");
    }
    this.dce.setResolution(targetRes);
  }

  open(){
    this.dce.open();
  }

  close(){
    this.dce.close();
  }

  getCameraEnhancer(): com.dynamsoft.dce.CameraEnhancer {
    return this.dce;
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
