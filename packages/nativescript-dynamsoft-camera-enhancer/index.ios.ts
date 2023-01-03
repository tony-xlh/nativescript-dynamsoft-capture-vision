import { CameraEnhancerCommon } from './common';

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
}
