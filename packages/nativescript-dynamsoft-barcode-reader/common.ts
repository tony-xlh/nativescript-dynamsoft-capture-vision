import { Observable } from '@nativescript/core';

export interface TextResult {
  barcodeText:string;
  barcodeFormat:string;
  x1:number;
  x2:number;
  x3:number;
  x4:number;
  y1:number;
  y2:number;
  y3:number;
  y4:number;
}

export class BarcodeReaderCommon extends Observable {

}
