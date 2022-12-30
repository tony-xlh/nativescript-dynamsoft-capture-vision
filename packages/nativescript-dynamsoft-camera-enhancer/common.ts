import { Observable, Property, View } from '@nativescript/core';

export class DynamsoftCameraEnhancerCommon extends View {

}
export const activeProperty = new Property<DynamsoftCameraEnhancerCommon, boolean>({
  name: 'active',
})
  
//register the property with the view component class
activeProperty.register(DynamsoftCameraEnhancerCommon)