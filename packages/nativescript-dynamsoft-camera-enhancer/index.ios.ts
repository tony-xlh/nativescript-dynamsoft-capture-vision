import { Resolution } from '.';
import { activeProperty, CameraEnhancerCommon, cameraIDProperty, torchProperty } from './common';

export class CameraEnhancer extends  CameraEnhancerCommon {
  dce:DynamsoftCameraEnhancer
  cameraView:DCECameraView;
  // @ts-ignore
  get ios() {
    return this.nativeView;
  }

  createNativeView() {
    this.cameraView = DCECameraView.alloc().init();
    this.dce = DynamsoftCameraEnhancer.alloc().init();
    this.dce.dceCameraView = this.cameraView;
    return this.cameraView;
  }

  initNativeView() {
    
  }

  captureFrame() {
    return this.dce.getFrameFromBuffer(true);
  }

  captureFrameAsync() {
    let pThis = this;
    return new Promise(function (resolve, reject) {
      resolve(pThis.dce.getFrameFromBuffer(true));
    });
  }

  captureFrameAsBase64() {
    let frame = this.dce.getFrameFromBuffer(true);
    let image = frame.toUIImage();
    return this.UIImage2Base64(image);
  }

  getAllCameras():string[] {
    let array = [];
    let cameras = this.dce.getAllCameras();
    for (let index = 0; index < cameras.count; index++) {
        const camera = cameras[index];
        array.push(camera);
    }
    return array;
  }

  getSelectedCamera():string {
    return this.dce.getSelectedCamera();
  }

  getCameraEnhancer(): DynamsoftCameraEnhancer {
    return this.dce;
  }

  UIImage2Base64(image:UIImage):string{
    let data = UIImageJPEGRepresentation(image,100);
    return data.base64Encoding();
  }

  open(){
    this.dce.open();
  }

  close(){
    this.dce.close();
  }

  getResolution():Resolution {
    let res = this.dce.getResolution();
    let width = parseInt(res.split("x")[0]);
    let height = parseInt(res.split("x")[1]);
    return {width:width,height:height};
  }

  setResolution(res:Resolution) {
    let targetRes:EnumResolution;
    if (res.width === 640 && res.height === 480) {
      targetRes = EnumResolution.ESOLUTION_480P;
    }else if (res.width === 1280 && res.height === 720) {
      targetRes = EnumResolution.ESOLUTION_720P;
    }else if (res.width === 1920 && res.height === 1080) {
      targetRes = EnumResolution.ESOLUTION_1080P;
    }else if (res.width === 3840 && res.height === 2160) {
      targetRes = EnumResolution.ESOLUTION_4K;
    }else {
      targetRes = EnumResolution.ESOLUTION_AUTO;
    }
    this.dce.setResolution(targetRes);
  }

  setZoom(factor:number){
    this.dce.setZoom(factor);
  }

  getMaxZoomFactor():number{
    return this.dce.getMaxZoomFactor();
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
      this.dce.selectCameraError(value);
    }
  }
}
