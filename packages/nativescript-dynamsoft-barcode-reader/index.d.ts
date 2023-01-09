import { BarcodeReaderCommon, TextResult } from './common';

export interface TextResultListener{
    (results:TextResult[]):void;
}

export interface LicenseListener{
    (isSuccess:boolean,error:any):void;
}

export declare class BarcodeReader extends BarcodeReaderCommon {
    initLicense(license:string,licenseListener?:LicenseListener):void;
    initRuntimeSettingsWithString(template:string);
    decodeFrame(frame:any):TextResult[];
    decodeFrameAsync(frame:any):Promise<TextResult[]>;
    decodeBitmap(bitmap:any):TextResult[];
    decodeBase64(base64:string):TextResult[];
    decodeFile(file:string):TextResult[];
    setCameraEnhancer(dce:any):void;
    startScanning():void;
    stopScanning():void;
    setTextResultListener(listener: TextResultListener);
}

export * from "./common";



