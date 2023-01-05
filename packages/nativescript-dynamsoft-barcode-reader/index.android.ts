import { BarcodeReaderCommon, TextResult } from './common';

@NativeClass
class ScanHandler {
  onScanned(results:androidNative.Array<com.dynamsoft.dbr.TextResult>) {}
}

@NativeClass
class DecodingRunnable extends java.lang.Runnable {
  dbr:com.dynamsoft.dbr.BarcodeReader;
  frame:any;
  handler:ScanHandler;
  constructor(reader:com.dynamsoft.dbr.BarcodeReader,frame:any,handler:ScanHandler){
    super();
    this.dbr = reader;
    this.frame = frame;
    this.handler = handler;
    return global.__native(this);
  }

  run() {
    let results = this.dbr.decodeBuffer(this.frame.getImageData(),this.frame.getWidth(),this.frame.getHeight(), this.frame.getStrides()[0], this.frame.getPixelFormat());
    this.handler.onScanned(results);
  }
}

export class BarcodeReader extends BarcodeReaderCommon {
  dbr:com.dynamsoft.dbr.BarcodeReader;
  constructor(){
    super();
    this.dbr = new com.dynamsoft.dbr.BarcodeReader();
  }

  initLicense(license:string) {
    console.log("init license: "+license);
    com.dynamsoft.dbr.BarcodeReader.initLicense(license,null);
    console.log("init license done");
  }

  decodeFrameAsync(frame:any):Promise<TextResult[]> {
    let pThis = this;
    return new Promise(function (resolve, reject) {
      let handler:ScanHandler = new ScanHandler();
      handler.onScanned = function (results) {
        resolve(pThis.wrapResult(results));
      }
      let decodingThread = new java.lang.Thread(new DecodingRunnable(pThis.dbr,frame,handler));
      decodingThread.start();
    });
  }

  decodeFrame(frame:any):TextResult[] {
    let results = this.dbr.decodeBuffer(frame.getImageData(),frame.getWidth(),frame.getHeight(), frame.getStrides()[0], frame.getPixelFormat());
    return this.wrapResult(results);
  }

  decodeBitmap(bitmap:any):TextResult[] {
    let results = this.dbr.decodeBufferedImage(bitmap);
    return this.wrapResult(results);
  }

  decodeFile(file:string):TextResult[] {
    let results = this.dbr.decodeFile(file)
    return this.wrapResult(results);
  }

  wrapResult(results:androidNative.Array<com.dynamsoft.dbr.TextResult>):TextResult[] {
    let textResults:TextResult[] = [];
    for (let index = 0; index < results.length; index++) {
      const result = results[index];
      let textResult:TextResult = {
        barcodeText:result.barcodeText,
        barcodeFormat:result.barcodeFormatString,
        x1:result.localizationResult.resultPoints[0].x,
        x2:result.localizationResult.resultPoints[1].x,
        x3:result.localizationResult.resultPoints[2].x,
        x4:result.localizationResult.resultPoints[3].x,
        y1:result.localizationResult.resultPoints[0].y,
        y2:result.localizationResult.resultPoints[1].y,
        y3:result.localizationResult.resultPoints[2].y,
        y4:result.localizationResult.resultPoints[3].y
      }
      textResults.push(textResult);
    }
    return textResults;
  }
}
