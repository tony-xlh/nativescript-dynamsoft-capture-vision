import { booleanConverter, Observable, Property, View } from '@nativescript/core';

export class DynamsoftCameraEnhancerCommon extends View {
  
}

export const activeProperty = new Property<DynamsoftCameraEnhancerCommon, boolean>({
    name: 'active'
})

export const torchProperty = new Property<DynamsoftCameraEnhancerCommon, boolean>({
    name: 'torch',
    defaultValue: false,
    valueConverter: booleanConverter,
})

export const cameraIDProperty = new Property<DynamsoftCameraEnhancerCommon, string>({
    name: 'cameraID'
})

//register the property with the view component class
activeProperty.register(DynamsoftCameraEnhancerCommon)
torchProperty.register(DynamsoftCameraEnhancerCommon)
cameraIDProperty.register(DynamsoftCameraEnhancerCommon)