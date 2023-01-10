import { booleanConverter, Observable, Property, View } from '@nativescript/core';

export interface Resolution {
  width: number;
  height: number;
}

export class CameraEnhancerCommon extends View {
  
}

export const activeProperty = new Property<CameraEnhancerCommon, boolean>({
    name: 'active'
})

export const torchProperty = new Property<CameraEnhancerCommon, boolean>({
    name: 'torch',
    defaultValue: false,
    valueConverter: booleanConverter,
})

export const cameraIDProperty = new Property<CameraEnhancerCommon, string>({
    name: 'cameraID'
})

//register the property with the view component class
activeProperty.register(CameraEnhancerCommon)
torchProperty.register(CameraEnhancerCommon)
cameraIDProperty.register(CameraEnhancerCommon)