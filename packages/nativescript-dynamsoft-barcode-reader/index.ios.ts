import { BarcodeReaderCommon, TextResult } from './common';

export class BarcodeReader extends BarcodeReaderCommon {
  dbr:DynamsoftBarcodeReader;
  
  constructor(){
    super();
    this.dbr = DynamsoftBarcodeReader.alloc().init();
  }

  initLicense(license:string) {
    console.log("init license: "+license);
    DynamsoftBarcodeReader.initLicenseVerificationDelegate(license,null);
  }

  decodeFrameAsync(frame:any):Promise<TextResult[]> {
    let pThis = this;
    return new Promise(function (resolve, reject) {
      let result = pThis.decodeFrame(frame)
      resolve(result);
    });
  }

  decodeFrame(frame:any):TextResult[] {
    let results = this.dbr.decodeBufferWithWidthHeightStrideFormatError(frame.imageData,frame.width,frame.height, frame.stride, frame.pixelFormat);
    return this.wrapResult(results);
  }

  decodeBitmap(bitmap:any):TextResult[] {
    let results = this.dbr.decodeImageError(bitmap);
    return this.wrapResult(results);
  }

  decodeFile(file:string):TextResult[] {
    let results = this.dbr.decodeFileWithNameError(file)
    return this.wrapResult(results);
  }

  decodeBase64(base64:string):TextResult[] {
    let image = this.base642UIImage(base64);
    return this.decodeBitmap(image);
  }

  wrapResult(results:NSArray<iTextResult>):TextResult[] {
    let textResults:TextResult[] = [];
    if (results) {
      for (let index = 0; index < results.count; index++) {
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
    }
    return textResults;
  }

  base642UIImage(base64:string):UIImage{
    let data = NSData.alloc().initWithBase64EncodedStringOptions(base64,NSDataBase64DecodingOptions.IgnoreUnknownCharacters);
    let image = UIImage.alloc().initWithData(data);
    return image;
  }
}
