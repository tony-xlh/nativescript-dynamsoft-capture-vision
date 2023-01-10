import { CameraEnhancerCommon } from './common';

export declare class CameraEnhancer extends CameraEnhancerCommon {
    captureFrame(): any;
    captureFrameAsync(): Promise<any>;
    captureFrameAsBase64(): string;
    getAllCameras(): string[];
    getSelectedCamera(): string;
    getCameraEnhancer(): any;
    getResolution(): Resolution;
    /**
     * supported resolutions: 640x480, 1280x720, 1920x1080, 3840x2160 or pass empty for auto
     */
    setResolution(resolution:Resolution): void;
    setZoom(factor:number);
    getMaxZoomFactor(): number;
    open(): void;
    close(): void;
}

export * from "./common";