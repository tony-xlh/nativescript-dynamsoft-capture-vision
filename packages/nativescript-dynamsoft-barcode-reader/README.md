# nativescript-dynamsoft-barcode-reader

Nativescript plugin for [Dynamsoft Barcode Reader](https://www.dynamsoft.com/barcode-reader/overview/).

We can use it read barcodes from sources like the camera frames or static images.

## Installation

```javascript
npm install nativescript-dynamsoft-barcode-reader
```

## Usage

Sample:

```ts
this.dbr = new BarcodeReader();
this.dbr.initLicense("DLS2eyJoYW5kc2hha2VDb2RlIjoiMjAwMDAxLTE2NDk4Mjk3OTI2MzUiLCJvcmdhbml6YXRpb25JRCI6IjIwMDAwMSIsInNlc3Npb25QYXNzd29yZCI6IndTcGR6Vm05WDJrcEQ5YUoifQ=="); //1-day public trial.
let results = this.dbr.decodeFrame(this.dce.captureFrame()); //get a camera frame from Dynamsoft Camera Enhancer
```

You can apply a trial license [here](https://www.dynamsoft.com/customer/license/trialLicense/?product=dbr).

Methods:

```ts
initLicense(license:string):void;
decodeFrame(frame:any):TextResult[];
decodeFrameAsync(frame:any):Promise<TextResult[]>;
decodeBitmap(bitmap:any):TextResult[];
decodeBase64(base64:string):TextResult[];
decodeFile(file:string):TextResult[];
```

## License

Apache License Version 2.0
