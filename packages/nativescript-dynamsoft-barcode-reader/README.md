# nativescript-dynamsoft-barcode-reader

Nativescript plugin for [Dynamsoft Barcode Reader](https://www.dynamsoft.com/barcode-reader/overview/).

We can use it read barcodes from sources like the camera frames or static images.

## Installation

```javascript
npm install nativescript-dynamsoft-barcode-reader
```

## Usage

### Initialization

```ts
this.dbr = new BarcodeReader();
this.dbr.initLicense("DLS2eyJoYW5kc2hha2VDb2RlIjoiMjAwMDAxLTE2NDk4Mjk3OTI2MzUiLCJvcmdhbml6YXRpb25JRCI6IjIwMDAwMSIsInNlc3Npb25QYXNzd29yZCI6IndTcGR6Vm05WDJrcEQ5YUoifQ=="); //1-day public trial.
```

### Decoding

1. Decode from a camera frame

   ```ts
   let results = this.dbr.decodeFrame(this.dce.captureFrame()); //get a camera frame from Dynamsoft Camera Enhancer
   ```
   
2. Start live scanning with Dynamsoft Camera Enhancer.

   ```ts
   //bind Dynamsoft Camera Enhancer to Dynamsoft Barcode Reader
   this.dbr.setCameraEnhancer(this.dce.getCameraEnhancer()); 
   //set the text result listener
   this.dbr.setTextResultListener(function (textResults:TextResult[]) {
     console.log(textResults);
   })
   //start scanning from the camera
   this.dbr.startScanning();
   ```

You can apply a trial license [here](https://www.dynamsoft.com/customer/license/trialLicense/?product=dbr).

## API

Methods:

```ts
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
```

Interfaces:

```ts
export interface TextResultListener{
  (results:TextResult[]):void;
}

export interface LicenseListener{
  (isSuccess:boolean,error:any):void;
}

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
```

## License

Apache License Version 2.0
