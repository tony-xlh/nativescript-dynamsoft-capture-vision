import { CameraEnhancerCommon } from './common';

export declare class CameraEnhancer extends CameraEnhancerCommon {
    captureFrame(): any;
    captureFrameAsync(): Promise<any>;
    captureFrameAsBase64(): string;
    getAllCameras(): string[];
    getSelectedCamera(): string;
}
