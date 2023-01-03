/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module dynamsoft {
		export module dce {
			export class AutoFitTextureView {
				public static class: java.lang.Class<com.dynamsoft.dce.AutoFitTextureView>;
				public hasGestureDetector(): boolean;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public constructor(param0: globalAndroid.content.Context);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public setIfContain(param0: boolean): void;
				public onMeasure(param0: number, param1: number): void;
				public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
				public setAspectRatio(param0: number, param1: number): void;
				public setGestureListener(param0: globalAndroid.view.GestureDetector.OnGestureListener): void;
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dce {
			export class AutoFocusHelper {
				public static class: java.lang.Class<com.dynamsoft.dce.AutoFocusHelper>;
				public static METERING_REGION_FRACTION: number;
				public static afRegionsForNormalizedCoord(param0: number, param1: number, param2: globalAndroid.graphics.Rect, param3: number): androidNative.Array<globalAndroid.hardware.camera2.params.MeteringRectangle>;
				public static getZeroWeightRegion(): androidNative.Array<globalAndroid.hardware.camera2.params.MeteringRectangle>;
				public static aeRegionsForNormalizedCoord(param0: number, param1: number, param2: globalAndroid.graphics.Rect, param3: number): androidNative.Array<globalAndroid.hardware.camera2.params.MeteringRectangle>;
				public static cropRegionForZoom(param0: globalAndroid.hardware.camera2.CameraCharacteristics, param1: number): globalAndroid.graphics.Rect;
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dce {
			export class BoxView {
				public static class: java.lang.Class<com.dynamsoft.dce.BoxView>;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public setAspectRatio(param0: number, param1: number): void;
				public dispatchDraw(param0: globalAndroid.graphics.Canvas): void;
				public onFinishInflate(): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
				public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
				public setOnSizeChangedListener(param0: com.dynamsoft.dce.BoxView.SizeChangedListener): void;
				public constructor(param0: globalAndroid.content.Context);
				public setIfContain(param0: boolean): void;
				public onMeasure(param0: number, param1: number): void;
				public clear(): void;
				public reSetboxview(param0: number, param1: number, param2: number, param3: number): void;
			}
			export module BoxView {
				export class SizeChangedListener {
					public static class: java.lang.Class<com.dynamsoft.dce.BoxView.SizeChangedListener>;
					/**
					 * Constructs a new instance of the com.dynamsoft.dce.BoxView$SizeChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onSizeChanged(param0: com.dynamsoft.dce.BoxView, param1: number, param2: number): void;
					});
					public constructor();
					public onSizeChanged(param0: com.dynamsoft.dce.BoxView, param1: number, param2: number): void;
				}
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dce {
			export class BuildConfig {
				public static class: java.lang.Class<com.dynamsoft.dce.BuildConfig>;
				public static DEBUG: boolean;
				public static LIBRARY_PACKAGE_NAME: string;
				public static BUILD_TYPE: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dce {
			export abstract class CameraController {
				public static class: java.lang.Class<com.dynamsoft.dce.CameraController>;
				public getScanRegionVisible(): boolean;
				public getCameraPosition(): com.dynamsoft.dce.EnumCameraPosition;
				public setResolution(param0: com.dynamsoft.dce.EnumResolution): void;
				public selectCamera(param0: com.dynamsoft.dce.EnumCameraPosition): void;
				public addListener(param0: com.dynamsoft.dce.DCEFrameListener): number;
				public isFeatureEnabled(param0: number): boolean;
				public setFrameRate(param0: number): void;
				public disableFeatures(param0: number): void;
				public getAllCameras(): androidNative.Array<string>;
				public getSelectedCamera(): string;
				public setAutoZoomRange(param0: globalAndroid.util.Range<java.lang.Float>): void;
				public getScanRegion(): com.dynamsoft.dce.RegionDefinition;
				public getAutoZoomRange(): globalAndroid.util.Range<java.lang.Float>;
				public setScanRegion(param0: com.dynamsoft.dce.RegionDefinition): void;
				public setCameraView(param0: com.dynamsoft.dce.DCECameraView): void;
				public removeListener(param0: com.dynamsoft.dce.DCEFrameListener): void;
				public open(): void;
				public takePhoto(param0: com.dynamsoft.dce.DCEPhotoListener): void;
				public close(): void;
				public setFocus(param0: globalAndroid.graphics.PointF, param1: com.dynamsoft.dce.EnumFocusMode): void;
				public resume(): void;
				public turnOffTorch(): void;
				public setZoom(param0: number): void;
				public updateAdvancedSettingsFromFile(param0: string): void;
				public getFrameRate(): number;
				public pause(): void;
				public setScanRegionVisible(param0: boolean): void;
				public getMaxZoomFactor(): number;
				public enableFeatures(param0: number): void;
				public getResolutionList(): java.util.List<any>;
				public setCameraStateListener(param0: com.dynamsoft.dce.DCECameraStateListener): void;
				public getCameraView(): com.dynamsoft.dce.DCECameraView;
				public setFocus(param0: number, param1: number): void;
				public getResolution(): any;
				public getCameraState(): com.dynamsoft.dce.EnumCameraState;
				public selectCamera(param0: string): void;
				public turnOnTorch(): void;
				public updateAdvancedSettingsFromString(param0: string): void;
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dce {
			export class CameraEnhancer extends com.dynamsoft.dce.CameraController {
				public static class: java.lang.Class<com.dynamsoft.dce.CameraEnhancer>;
				public getScanRegionVisible(): boolean;
				public getCameraPosition(): com.dynamsoft.dce.EnumCameraPosition;
				public setResolution(param0: com.dynamsoft.dce.EnumResolution): void;
				public constructor(param0: globalAndroid.app.Activity);
				public finalize(): void;
				/** @deprecated */
				public pause(): void;
				public selectCamera(param0: com.dynamsoft.dce.EnumCameraPosition): void;
				/** @deprecated */
				public setFrameRate(param0: number): void;
				public addListener(param0: com.dynamsoft.dce.DCEFrameListener): number;
				public setFrameRate(param0: number): void;
				public isFeatureEnabled(param0: number): boolean;
				public disableFeatures(param0: number): void;
				public getAllCameras(): androidNative.Array<string>;
				public getSelectedCamera(): string;
				public static initLicense(param0: string, param1: com.dynamsoft.dce.DCELicenseVerificationListener): void;
				public setAutoZoomRange(param0: globalAndroid.util.Range<java.lang.Float>): void;
				/** @deprecated */
				public constructor(param0: globalAndroid.content.Context);
				public getScanRegion(): com.dynamsoft.dce.RegionDefinition;
				public getAutoZoomRange(): globalAndroid.util.Range<java.lang.Float>;
				public setScanRegion(param0: com.dynamsoft.dce.RegionDefinition): void;
				public setCameraView(param0: com.dynamsoft.dce.DCECameraView): void;
				public removeListener(param0: com.dynamsoft.dce.DCEFrameListener): void;
				public open(): void;
				public takePhoto(param0: com.dynamsoft.dce.DCEPhotoListener): void;
				public close(): void;
				public setFocus(param0: globalAndroid.graphics.PointF, param1: com.dynamsoft.dce.EnumFocusMode): void;
				public resume(): void;
				public turnOffTorch(): void;
				public setZoom(param0: number): void;
				public updateAdvancedSettingsFromFile(param0: string): void;
				public getFrameRate(): number;
				public pause(): void;
				public setScanRegionVisible(param0: boolean): void;
				public getMaxZoomFactor(): number;
				public getResolutionList(): java.util.List<any>;
				public enableFeatures(param0: number): void;
				public setCameraStateListener(param0: com.dynamsoft.dce.DCECameraStateListener): void;
				public getCameraView(): com.dynamsoft.dce.DCECameraView;
				public setFocus(param0: number, param1: number): void;
				public getResolution(): any;
				public getFrameFromBuffer(param0: boolean): com.dynamsoft.dce.DCEFrame;
				public getCameraState(): com.dynamsoft.dce.EnumCameraState;
				public static getVersion(): string;
				/** @deprecated */
				public resume(): void;
				public selectCamera(param0: string): void;
				public turnOnTorch(): void;
				public updateAdvancedSettingsFromString(param0: string): void;
			}
			export module CameraEnhancer {
				export class DCEGetLicenseTaskEx extends globalAndroid.os.AsyncTask<java.lang.Void,java.lang.Integer,string> {
					public static class: java.lang.Class<com.dynamsoft.dce.CameraEnhancer.DCEGetLicenseTaskEx>;
					public doInBackground(param0: androidNative.Array<java.lang.Void>): string;
				}
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dce {
			export class CameraEnhancerAlgorithm {
				public static class: java.lang.Class<com.dynamsoft.dce.CameraEnhancerAlgorithm>;
				public static initLicense(param0: string): com.dynamsoft.dce.CameraEnhancerException;
				public isNeedDecode(param0: boolean): boolean;
				public LoadParamJsonString(param0: string): number;
				public finalize(): void;
				public NativeIsValidLicense(): number;
				public loadParamJson(param0: string): number;
				public NativeConsumePkg(param0: number, param1: string, param2: string, param3: string, param4: string): any;
				public constructor();
				public static setArg(param0: string, param1: string, param2: string, param3: string, param4: com.dynamsoft.dce.CameraLicenseUtil): void;
				public destroy(): void;
				public SetSensorValue(param0: number): void;
				public isNeedZoom(param0: number, param1: number): boolean;
				public setCurFrameData(param0: androidNative.Array<number>, param1: number, param2: number, param3: number, param4: number): void;
				public NativeSplitForDLS(param0: androidNative.Array<number>): androidNative.Array<string>;
				public isNeedFocus(param0: boolean): boolean;
				public NativeIsValidLocalLicense(): number;
				public initLicenseInfo(param0: string, param1: string, param2: string): number;
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dce {
			export class CameraEnhancerException {
				public static class: java.lang.Class<com.dynamsoft.dce.CameraEnhancerException>;
				public constructor(param0: number, param1: string);
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: java.lang.Exception);
				public getErrorCode(): number;
				public constructor(param0: string);
				public constructor();
				public constructor(param0: number, param1: string, param2: java.lang.Throwable);
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dce {
			export class CameraFocusUtil {
				public static class: java.lang.Class<com.dynamsoft.dce.CameraFocusUtil>;
				public isActivelyFocusing: boolean;
				public focusTimeLong: number;
				public delta_temp: number;
				public setIfSharpnessFilter(param0: boolean): void;
				public setTerminateFocusBySharpness(param0: number): void;
				public setSharpnessThreshold(param0: number): void;
				public setIfFocusSensor(param0: boolean): void;
				public setTerminateFocusByTime(param0: number): void;
				public finalize(): void;
				public setClarity(param0: number): void;
				public setIfFocusTime(param0: boolean): void;
				public isNeedDecode(): boolean;
				public endZoomBySensor(): boolean;
				public setIfFocusClarity(param0: boolean): void;
				public constructor(param0: globalAndroid.content.Context, param1: com.dynamsoft.dce.CameraEnhancer);
				public addCamAlgorithmFilter(param0: com.dynamsoft.dce.CameraEnhancerAlgorithm): void;
				public setIfStatusBySharpness(param0: boolean): void;
				public destroy(): void;
				public setSensorThreshold(param0: number): void;
				public setFocusTimems(param0: number): void;
				public stateFilter(param0: number): void;
				public process(): void;
				public setIfFocusStateFilter(param0: boolean): void;
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dce {
			export class CameraLicenseUtil {
				public static class: java.lang.Class<com.dynamsoft.dce.CameraLicenseUtil>;
				public getDLSAuthSend(param0: string): string;
				public DLSUploadSend(param0: string, param1: string): string;
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dce {
			export class CameraListenerInner {
				public static class: java.lang.Class<com.dynamsoft.dce.CameraListenerInner>;
				/**
				 * Constructs a new instance of the com.dynamsoft.dce.CameraListenerInner interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					OnProcess(param0: number, param1: number): void;
				});
				public constructor();
				public OnProcess(param0: number, param1: number): void;
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dce {
			export class CameraUUID {
				public static class: java.lang.Class<com.dynamsoft.dce.CameraUUID>;
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dce {
			export class CameraUtil {
				public static class: java.lang.Class<com.dynamsoft.dce.CameraUtil>;
				public static normalizedSensorCoordsForNormalizedDisplayCoords(param0: number, param1: number, param2: number): globalAndroid.graphics.PointF;
				public static getOrientationDisplayOffset(param0: globalAndroid.content.Context, param1: number): number;
				public static rectFToRect(param0: globalAndroid.graphics.RectF): globalAndroid.graphics.Rect;
				public static boundaryRotate(param0: globalAndroid.graphics.Point, param1: globalAndroid.graphics.Rect, param2: boolean): globalAndroid.graphics.Rect;
				public static lerp(param0: number, param1: number, param2: number): number;
				public static ConvertFrameRegionToViewRegion(param0: globalAndroid.graphics.Rect, param1: globalAndroid.graphics.Rect, param2: number, param3: any): globalAndroid.graphics.Rect;
				public static ConvertViewRegionToVideoFrameRegion(param0: globalAndroid.graphics.Rect, param1: globalAndroid.graphics.Rect, param2: number, param3: any): globalAndroid.graphics.Rect;
				public static inlineRectToRectF(param0: globalAndroid.graphics.RectF, param1: globalAndroid.graphics.Rect): void;
				public static rectToRectF(param0: globalAndroid.graphics.Rect): globalAndroid.graphics.RectF;
				public static boundaryRotate180(param0: globalAndroid.graphics.Point, param1: globalAndroid.graphics.Rect): globalAndroid.graphics.Rect;
				public static clamp(param0: number, param1: number, param2: number): number;
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dce {
			export class CanvasView {
				public static class: java.lang.Class<com.dynamsoft.dce.CanvasView>;
				public setBoundaryPoints(param0: java.util.ArrayList<globalAndroid.graphics.Point>, param1: number): void;
				public hasGestureDetector(): boolean;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public calculatePreviewScaleEx(param0: number, param1: number): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
				public setAspectRatio(param0: number, param1: number): void;
				public dispatchDraw(param0: globalAndroid.graphics.Canvas): void;
				public calculatePreviewScale(param0: number, param1: number): void;
				public setStartOverlay(param0: boolean): void;
				public setCanvasDegree(param0: number): void;
				public constructor(param0: globalAndroid.content.Context);
				public onMeasure(param0: number, param1: number): void;
				public setIfContain(param0: boolean): void;
				public clear(): void;
				public setBoundaryColor(param0: number, param1: number): void;
				public setGestureListener(param0: globalAndroid.view.GestureDetector.OnGestureListener): void;
				public setBoundaryThickness(param0: number): void;
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dce {
			export class CustomizedBtnView {
				public static class: java.lang.Class<com.dynamsoft.dce.CustomizedBtnView>;
				public hasGestureDetector(): boolean;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public constructor(param0: globalAndroid.content.Context);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
				public onDetachedFromWindow(): void;
				public setGestureListener(param0: globalAndroid.view.GestureDetector.OnGestureListener): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dce {
			export class DCECameraStateListener {
				public static class: java.lang.Class<com.dynamsoft.dce.DCECameraStateListener>;
				/**
				 * Constructs a new instance of the com.dynamsoft.dce.DCECameraStateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					stateChangeCallback(param0: com.dynamsoft.dce.EnumCameraState): void;
				});
				public constructor();
				public stateChangeCallback(param0: com.dynamsoft.dce.EnumCameraState): void;
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dce {
			export class DCECameraView {
				public static class: java.lang.Class<com.dynamsoft.dce.DCECameraView>;
				public getScanRegionVisible(): boolean;
				public setOverlayColour(param0: number, param1: number): void;
				public getVisibleRegionOfVideo(): com.dynamsoft.dce.RegionDefinition;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				/** @deprecated */
				public removeOverlay(): void;
				public setViewfinder(param0: number, param1: number, param2: number, param3: number): void;
				public setScanRegionVisible(param0: boolean): void;
				public setTorchButton(param0: globalAndroid.graphics.Point): void;
				public setViewfinderVisible(param0: boolean): void;
				public setTorchButton(param0: globalAndroid.graphics.Point, param1: number, param2: number, param3: globalAndroid.graphics.drawable.Drawable, param4: globalAndroid.graphics.drawable.Drawable): void;
				public getViewfinderVisible(): boolean;
				public getOverlayVisible(): boolean;
				public requestLayout(): void;
				public getTorchButtonVisible(): boolean;
				public constructor(param0: globalAndroid.content.Context);
				public onDetachedFromWindow(): void;
				public setOverlayVisible(param0: boolean): void;
				public setTorchButtonVisible(param0: boolean): void;
				public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dce {
			export class DCEFeedback {
				public static class: java.lang.Class<com.dynamsoft.dce.DCEFeedback>;
				public static beep(param0: globalAndroid.content.Context): void;
				public static vibrate(param0: globalAndroid.content.Context): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dce {
			export class DCEFrame {
				public static class: java.lang.Class<com.dynamsoft.dce.DCEFrame>;
				public setHeight(param0: number): void;
				public constructor(param0: androidNative.Array<number>, param1: number, param2: number, param3: androidNative.Array<number>, param4: number, param5: number);
				public setImageData(param0: androidNative.Array<number>): void;
				public getHeight(): number;
				public setCropRegion(param0: globalAndroid.graphics.Rect): void;
				public setQuality(param0: number): void;
				public getPixelFormat(): number;
				public getIsCropped(): boolean;
				public setOrientation(param0: number): void;
				public getQuality(): number;
				public toBitmap(): globalAndroid.graphics.Bitmap;
				public setPixelFormat(param0: number): void;
				public getOrientation(): number;
				public setWidth(param0: number): void;
				public getWidth(): number;
				public setIsCropped(param0: boolean): void;
				public getCropRegion(): globalAndroid.graphics.Rect;
				public getImageData(): androidNative.Array<number>;
				public constructor(param0: com.dynamsoft.dce.DCEFrame);
				public getFrameId(): number;
				public setFrameId(param0: number): void;
				public getStrides(): androidNative.Array<number>;
				public setStrides(param0: androidNative.Array<number>): void;
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dce {
			export class DCEFrameListener {
				public static class: java.lang.Class<com.dynamsoft.dce.DCEFrameListener>;
				/**
				 * Constructs a new instance of the com.dynamsoft.dce.DCEFrameListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					frameOutputCallback(param0: com.dynamsoft.dce.DCEFrame, param1: number): void;
				});
				public constructor();
				public frameOutputCallback(param0: com.dynamsoft.dce.DCEFrame, param1: number): void;
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dce {
			export class DCELicenseVerificationListener {
				public static class: java.lang.Class<com.dynamsoft.dce.DCELicenseVerificationListener>;
				/**
				 * Constructs a new instance of the com.dynamsoft.dce.DCELicenseVerificationListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					DCELicenseVerificationCallback(param0: boolean, param1: java.lang.Exception): void;
				});
				public constructor();
				public DCELicenseVerificationCallback(param0: boolean, param1: java.lang.Exception): void;
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dce {
			export class DCEPhotoListener {
				public static class: java.lang.Class<com.dynamsoft.dce.DCEPhotoListener>;
				/**
				 * Constructs a new instance of the com.dynamsoft.dce.DCEPhotoListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					photoOutputCallback(param0: androidNative.Array<number>): void;
				});
				public constructor();
				public photoOutputCallback(param0: androidNative.Array<number>): void;
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dce {
			export class DCEUsage {
				public static class: java.lang.Class<com.dynamsoft.dce.DCEUsage>;
				public inner: androidNative.Array<number>;
				public stamp: number;
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dce {
			export class EnumCameraPosition {
				public static class: java.lang.Class<com.dynamsoft.dce.EnumCameraPosition>;
				public static CP_BACK: com.dynamsoft.dce.EnumCameraPosition;
				public static CP_FRONT: com.dynamsoft.dce.EnumCameraPosition;
				public static values(): androidNative.Array<com.dynamsoft.dce.EnumCameraPosition>;
				public static valueOf(param0: string): com.dynamsoft.dce.EnumCameraPosition;
				public static fromValue(param0: number): com.dynamsoft.dce.EnumCameraPosition;
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dce {
			export class EnumCameraState {
				public static class: java.lang.Class<com.dynamsoft.dce.EnumCameraState>;
				public static OPENING: com.dynamsoft.dce.EnumCameraState;
				public static OPENED: com.dynamsoft.dce.EnumCameraState;
				public static CLOSING: com.dynamsoft.dce.EnumCameraState;
				public static CLOSED: com.dynamsoft.dce.EnumCameraState;
				public static DEFAULT: com.dynamsoft.dce.EnumCameraState;
				public static valueOf(param0: string): com.dynamsoft.dce.EnumCameraState;
				public static fromValue(param0: number): com.dynamsoft.dce.EnumCameraState;
				public static values(): androidNative.Array<com.dynamsoft.dce.EnumCameraState>;
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dce {
			export class EnumDCEErrorCode {
				public static class: java.lang.Class<com.dynamsoft.dce.EnumDCEErrorCode>;
				public static DCE_OK: number;
				public static DCE_UNKNOWN: number;
				public static DCE_LICENSE_INVALID: number;
				public static DCE_LICENSE_EXPIRED: number;
				public static DCE_CAMERA_MODULE_NOT_EXIST: number;
				public static DCE_FILE_NOT_FOUND: number;
				public static DCE_JSON_PARSE_FAILED: number;
				public static DCE_CAMERA_ID_NOT_EXIST: number;
				public static DCE_PARAMETER_VALUE_INVALID: number;
				public static DCE_LICENSEKEY_NOT_MATCHED: number;
				public static DCE_REQUEST_FAILED: number;
				public static DCE_NO_SENSOR: number;
				public static DM_NO_LICENSE: number;
				public static DM_HANDSHAKE_CODE_INVALID: number;
				public static DM_LICENSE_BUFFER_FAILED: number;
				public static DM_LICENSE_SYNC_FAILED: number;
				public static DM_DEVICE_NOT_MATCH: number;
				public static DM_BIND_DEVICE_FAILED: number;
				public static DM_LICENSE_INTERFACE_CONFLICT: number;
				public static DM_LICENSE_CLIENT_DLL_MISSING: number;
				public static DM_INSTANCE_COUNT_OVER_LIMITED: number;
				public static DM_LICENSE_INIT_SEQUENCE_FAILED: number;
				public static DM_TRIAL_LICENSE: number;
				public static DM_FAILED_TO_REACH_DLS: number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dce {
			export class EnumEnhancerFeatures {
				public static class: java.lang.Class<com.dynamsoft.dce.EnumEnhancerFeatures>;
				public static EF_FRAME_FILTER: number;
				public static EF_SENSOR_CONTROL: number;
				public static EF_ENHANCED_FOCUS: number;
				public static EF_FAST_MODE: number;
				public static EF_AUTO_ZOOM: number;
				public static EF_SMART_TORCH: number;
				public static EF_ALL: number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dce {
			export class EnumFocusMode {
				public static class: java.lang.Class<com.dynamsoft.dce.EnumFocusMode>;
				public static FM_LOCKED: com.dynamsoft.dce.EnumFocusMode;
				public static FM_CONTINUOUS_AUTO: com.dynamsoft.dce.EnumFocusMode;
				public static DEFALUT: com.dynamsoft.dce.EnumFocusMode;
				public static fromValue(param0: number): com.dynamsoft.dce.EnumFocusMode;
				public static values(): androidNative.Array<com.dynamsoft.dce.EnumFocusMode>;
				public static valueOf(param0: string): com.dynamsoft.dce.EnumFocusMode;
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dce {
			export class EnumFrameQuality {
				public static class: java.lang.Class<com.dynamsoft.dce.EnumFrameQuality>;
				public static FQ_HIGH: number;
				public static FQ_LOW: number;
				public static FQ_UNKNOWN: number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dce {
			export class EnumResolution {
				public static class: java.lang.Class<com.dynamsoft.dce.EnumResolution>;
				public static RESOLUTION_AUTO: com.dynamsoft.dce.EnumResolution;
				public static RESOLUTION_480P: com.dynamsoft.dce.EnumResolution;
				public static RESOLUTION_720P: com.dynamsoft.dce.EnumResolution;
				public static RESOLUTION_1080P: com.dynamsoft.dce.EnumResolution;
				public static RESOLUTION_2K: com.dynamsoft.dce.EnumResolution;
				public static RESOLUTION_4K: com.dynamsoft.dce.EnumResolution;
				public static DEFALUT: com.dynamsoft.dce.EnumResolution;
				public static values(): androidNative.Array<com.dynamsoft.dce.EnumResolution>;
				public static valueOf(param0: string): com.dynamsoft.dce.EnumResolution;
				public static fromValue(param0: number): com.dynamsoft.dce.EnumResolution;
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dce {
			export class FloatPoint {
				public static class: java.lang.Class<com.dynamsoft.dce.FloatPoint>;
				public x: number;
				public y: number;
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dce {
			export class FrameUtil {
				public static class: java.lang.Class<com.dynamsoft.dce.FrameUtil>;
				public dependOnWid: boolean;
				public calculatePreviewScale(param0: number, param1: number, param2: number, param3: number): void;
				public rotatePoints180(param0: java.util.ArrayList<globalAndroid.graphics.Point>, param1: number, param2: number): java.util.ArrayList<androidNative.Array<com.dynamsoft.dce.FloatPoint>>;
				public handlePoints(param0: java.util.ArrayList<globalAndroid.graphics.Point>, param1: number, param2: number): java.util.ArrayList<androidNative.Array<com.dynamsoft.dce.FloatPoint>>;
				public translatePoints(param0: java.util.ArrayList<globalAndroid.graphics.Point>): java.util.ArrayList<androidNative.Array<com.dynamsoft.dce.FloatPoint>>;
				public calculatePreviewScaleEx(param0: number, param1: number, param2: number, param3: number): void;
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dce {
			export class HardwareUtil {
				public static class: java.lang.Class<com.dynamsoft.dce.HardwareUtil>;
				public static DEVICEINFO_UNKNOWN: number;
				public static DEVICE_LEVEL_HIGH: number;
				public static DEVICE_LEVEL_MID: number;
				public static DEVICE_LEVEL_LOW: number;
				public static DEVICE_LEVEL_UNKNOWN: number;
				public static getNumberOfCPUCores(): number;
				public static getHardWare(): string;
				public static judgeDeviceLevel(param0: globalAndroid.content.Context, param1: number, param2: number, param3: number, param4: number): number;
				public static judgeSensorSupport(param0: globalAndroid.content.Context): boolean;
				public static getTotalMemory(param0: globalAndroid.content.Context): number;
				public static getCPUMaxFreqKHz(): number;
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dce {
			export class RegionDefinition {
				public static class: java.lang.Class<com.dynamsoft.dce.RegionDefinition>;
				public regionLeft: number;
				public regionTop: number;
				public regionRight: number;
				public regionBottom: number;
				public regionMeasuredByPercentage: number;
				public constructor(param0: number, param1: number, param2: number, param3: number, param4: number);
				public toString(): string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dce {
			export class TorchState {
				public static class: java.lang.Class<com.dynamsoft.dce.TorchState>;
				public static TORCH_STATE_OFF: com.dynamsoft.dce.TorchState;
				public static TORCH_STATE_ON: com.dynamsoft.dce.TorchState;
				public static TORCH_STATE_AUTO: com.dynamsoft.dce.TorchState;
				public static DEFAULT: com.dynamsoft.dce.TorchState;
				public static valueOf(param0: string): com.dynamsoft.dce.TorchState;
				public static fromValue(param0: number): com.dynamsoft.dce.TorchState;
				public static values(): androidNative.Array<com.dynamsoft.dce.TorchState>;
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dce {
			export class UIHandler {
				public static class: java.lang.Class<com.dynamsoft.dce.UIHandler>;
				public static getInstance(): globalAndroid.os.Handler;
			}
			export module UIHandler {
				export class UIHandlerHolder {
					public static class: java.lang.Class<com.dynamsoft.dce.UIHandler.UIHandlerHolder>;
				}
			}
		}
	}
}

//Generics information:

