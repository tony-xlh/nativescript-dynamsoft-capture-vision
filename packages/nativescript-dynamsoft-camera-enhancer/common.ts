import { Observable, Property, View } from '@nativescript/core';

export declare class CameraEnhancer {
    constructor();
    switchTorch(on:boolean): Promise<boolean>;
    selectCamera(id:string): Promise<boolean>;
    opened(): Promise<void>;
}


export class DynamsoftCameraEnhancerCommon extends View {

}

export const activeProperty = new Property<DynamsoftCameraEnhancerCommon, boolean>({
  name: 'active',
})
  
//register the property with the view component class
activeProperty.register(DynamsoftCameraEnhancerCommon)