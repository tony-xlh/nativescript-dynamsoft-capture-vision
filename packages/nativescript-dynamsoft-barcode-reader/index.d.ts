import { BarcodeReaderCommon, TextResult } from './common';

export declare class BarcodeReader extends BarcodeReaderCommon {
    initLicense(license:string):void;
    decodeFrame(frame:any):TextResult[];
    decodeBitmap(bitmap:any):TextResult[];
    decodeFile(file:string):TextResult[];
}

export * from "./common";



