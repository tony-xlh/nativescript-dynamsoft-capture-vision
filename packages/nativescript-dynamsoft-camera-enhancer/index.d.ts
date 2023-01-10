import { CameraEnhancerCommon } from './common';

export declare class CameraEnhancer extends CameraEnhancerCommon {
    captureFrame(): any;
    captureFrameAsync(): Promise<any>;
    captureFrameAsBase64(): string;
    getAllCameras(): string[];
    getSelectedCamera(): string;
    getCameraEnhancer(): any;
    getResolution(): Resolution;
    setResolution(resolution:Resolution): void;
    setZoom(factor:number);
    getMaxZoomFactor(): number;
    open(): void;
    close(): void;
}

export * from "./common";