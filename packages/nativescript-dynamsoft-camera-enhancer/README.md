# nativescript-dynamsoft-camera-enhancer

Nativescript plugin for [Dynamsoft Camera Enhancer](https://www.dynamsoft.com/camera-enhancer/overview/).

We can use it for camera preview, which is the base of building a barcode scanner, a text scanner, a document scanner, etc.

## Installation

```javascript
npm install nativescript-dynamsoft-camera-enhancer
```

## Usage

Add the camera view in the layout:

```xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd" 
    xmlns:dce="nativescript-dynamsoft-camera-enhancer"
    navigatingTo="navigatingTo" class="page">
    <GridLayout rows="*, auto, auto">
        <dce:CameraEnhancer 
        loaded="{{ dceLoaded }}" 
        rowSpan="3" 
        active="{{ isActive }}"
        cameraID="{{ desiredCamera }}"
        torch="{{ desiredTorchStatus }}"></dce:CameraEnhancer>
    </GridLayout>
</Page>
```

Get the camera enhancer intanse in the code behind:

```ts
dce:CameraEnhancer;
dceLoaded(args: EventData) {
  this.dce = <CameraEnhancer>args.object;
}
```

Methods:

```ts
captureFrame(): any;
captureFrameAsBase64(): string;
getAllCameras(): string[];
getSelectedCamera(): string;
```

Properties:

```ts
active:boolean //whether the camera is open
torch:boolean  //whether the torch is on
cameraID:string //the selected camera ID
```


## License

Apache License Version 2.0
