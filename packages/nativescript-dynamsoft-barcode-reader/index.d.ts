import { BarcodeReaderCommon, TextResult } from './common';

export declare class BarcodeReader extends BarcodeReaderCommon {
    initLicense(license:string):void;
    decodeFrame(frame:any):TextResult[];
    decodeFrameAsync(frame:any):Promise<TextResult[]>;
    decodeBitmap(bitmap:any):TextResult[];
    decodeBase64(base64:string):TextResult[];
    decodeFile(file:string):TextResult[];
    setCameraEnhancer(dce:any):void;
    startScanning():void;
    stopScanning():void;
}

export * from "./common";



