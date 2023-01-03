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
