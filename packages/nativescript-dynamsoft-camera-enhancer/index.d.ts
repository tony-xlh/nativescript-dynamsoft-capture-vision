import { CameraEnhancerCommon } from './common';

export declare class CameraEnhancer extends CameraEnhancerCommon {
    captureFrame(): any;
    captureFrameAsync(): Promise<any>;
    captureFrameAsBase64(): string;
    getAllCameras(): string[];
    getSelectedCamera(): string;
    getCameraEnhancer(): any;
    open(): void;
    close(): void;
    getResolution(): Resolution;
    setResolution(resolution:Resolution): void;
}

export * from "./common";