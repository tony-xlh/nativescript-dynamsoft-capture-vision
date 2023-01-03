import { DynamsoftBarcodeReaderCommon, TextResult } from './common';

export declare class DynamsoftBarcodeReader extends DynamsoftBarcodeReaderCommon {
    initLicense(license:string):void;
    decodeFrame(frame:any):TextResult[];
    decodeBitmap(bitmap:any):TextResult[];
    decodeFile(file:string):TextResult[];
}
