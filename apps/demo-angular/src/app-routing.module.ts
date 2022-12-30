import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { HomeComponent } from './home.component';

const routes: Routes = [
   { path: '', redirectTo: '/home', pathMatch: 'full' },
   { path: 'home', component: HomeComponent },
	{ path: 'nativescript-dynamsoft-barcode-reader', loadChildren: () => import('./plugin-demos/nativescript-dynamsoft-barcode-reader.module').then(m => m.NativescriptDynamsoftBarcodeReaderModule) },
	{ path: 'nativescript-dynamsoft-camera-enhancer', loadChildren: () => import('./plugin-demos/nativescript-dynamsoft-camera-enhancer.module').then(m => m.NativescriptDynamsoftCameraEnhancerModule) }
];

@NgModule({
	imports: [NativeScriptRouterModule.forRoot(routes)],
	exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
