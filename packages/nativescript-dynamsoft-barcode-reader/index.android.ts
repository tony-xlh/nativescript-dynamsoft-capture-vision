import { BarcodeReaderCommon, TextResult } from './common';

interface LicenseVerificationListener {
  new(): com.dynamsoft.dbr.DBRLicenseVerificationListener
}

export class BarcodeReader extends BarcodeReaderCommon {
  dbr:com.dynamsoft.dbr.BarcodeReader;
  LicenseVerificationListener: LicenseVerificationListener;
  constructor(){
    super();
    this.dbr = new com.dynamsoft.dbr.BarcodeReader();
    this.initializeLicenseVerificationListener();
  }

  initializeLicenseVerificationListener(){
    if (this.LicenseVerificationListener) {
      return;
    }
    @Interfaces([com.dynamsoft.dbr.DBRLicenseVerificationListener])
    class LicenseVerificationListenerImpl extends java.lang.Object implements com.dynamsoft.dbr.DBRLicenseVerificationListener {
        constructor() {
          super();
          // necessary when extending TypeScript constructors
          return global.__native(this);
        }

        DBRLicenseVerificationCallback(isSuccessful:boolean,e:java.lang.Exception): void {
          console.log(isSuccessful);
          console.log(e.getLocalizedMessage());
        }
    }
    this.LicenseVerificationListener = LicenseVerificationListenerImpl;
  }

  initLicense(license:string) {
    console.log("init license: "+license);
    //let listener = new this.LicenseVerificationListener();
    com.dynamsoft.dbr.BarcodeReader.initLicense(license,null);
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
