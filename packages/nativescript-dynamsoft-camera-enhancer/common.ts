import { booleanConverter, Observable, Property, View } from '@nativescript/core';

export enum EnumCameraResolution {
    RESOLUTION_AUTO = 0,
    RESOLUTION_480P = 1,
    RESOLUTION_720P = 2,
    RESOLUTION_1080P = 3,
    RESOLUTION_4K = 4
  }

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