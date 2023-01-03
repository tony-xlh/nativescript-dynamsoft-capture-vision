import { DynamsoftBarcodeReaderCommon, TextResult } from './common';

export class DynamsoftBarcodeReader extends DynamsoftBarcodeReaderCommon {
  dbr:com.dynamsoft.dbr.BarcodeReader;
  constructor(){
    super();
    this.dbr = new com.dynamsoft.dbr.BarcodeReader()
  }

  initLicense(license:string){
    console.log("init license: "+license);
    const listener = new com.dynamsoft.dbr.DBRLicenseVerificationListener();
    //listener.DBRLicenseVerificationCallback = function (isSuccessful, e) {
    //  console.log(isSuccessful);
    //}
    com.dynamsoft.dbr.BarcodeReader.initLicense(license,listener);
    console.log("init license done");
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
