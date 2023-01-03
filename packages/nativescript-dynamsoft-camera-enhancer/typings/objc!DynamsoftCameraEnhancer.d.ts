
interface DCECameraStateListener extends NSObjectProtocol {

	stateChangeCallback(currentState: EnumCameraState): void;
}
declare var DCECameraStateListener: {

	prototype: DCECameraStateListener;
};

declare class DCECameraView extends UIView implements CALayerDelegate {

	static alloc(): DCECameraView; // inherited from NSObject

	static appearance(): DCECameraView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): DCECameraView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): DCECameraView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): DCECameraView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): DCECameraView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): DCECameraView; // inherited from UIAppearance

	static cameraWithFrame(frame: CGRect): DCECameraView;

	static new(): DCECameraView; // inherited from NSObject

	overlayVisible: boolean;

	torchButtonVisible: boolean;

	viewfinderVisible: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	actionForLayerForKey(layer: CALayer, event: string): CAAction;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	displayLayer(layer: CALayer): void;

	drawLayerInContext(layer: CALayer, ctx: any): void;

	getVisbleRegionOfVideo(): iRegionDefinition;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	layerWillDraw(layer: CALayer): void;

	layoutSublayersOfLayer(layer: CALayer): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setOverlayColorFill(stroke: UIColor, fill: UIColor): void;

	setTorchButton(torchButtonPosition: CGPoint): void;

	setTorchButtonTorchOnImageTorchOffImage(frame: CGRect, torchOnImage: UIImage, torchOffImage: UIImage): void;

	setViewfinderTopRightBottomError(left: number, top: number, right: number, bottom: number): void;
}

declare class DCEFeedback extends NSObject {

	static alloc(): DCEFeedback; // inherited from NSObject

	static beep(): void;

	static new(): DCEFeedback; // inherited from NSObject

	static vibrate(): void;
}

declare class DCEFrame extends NSObject {

	static alloc(): DCEFrame; // inherited from NSObject

	static new(): DCEFrame; // inherited from NSObject

	cropRegion: CGRect;

	fastFrameID: number;

	frameID: number;

	height: number;

	imageBuffer: any;

	imageData: NSData;

	isCropped: boolean;

	orientation: number;

	originalHeight: number;

	originalWidth: number;

	pixelFormat: number;

	quality: EnumFrameQuality;

	stride: number;

	width: number;

	constructor(o: { buffer: NSData; width: number; height: number; stride: number; pixelFormat: number; frameID: number; orientation: number; quality: EnumFrameQuality; isCropped: boolean; cropRegion: CGRect; originalWidth: number; originalHeight: number; imageBuffer: any; });

	initWithBufferWidthHeightStridePixelFormatFrameIDOrientationQualityIsCroppedCropRegionOriginalWidthOriginalHeightImageBuffer(imageData: NSData, width: number, height: number, stride: number, pixelFormat: number, frameID: number, orientation: number, quality: EnumFrameQuality, isCropped: boolean, cropRegion: CGRect, originalWidth: number, originalHeight: number, imageBuffer: any): this;

	toUIImage(): UIImage;
}

interface DCEFrameListener extends NSObjectProtocol {

	frameOutPutCallbackTimeStamp(frame: DCEFrame, timeStamp: number): void;
}
declare var DCEFrameListener: {

	prototype: DCEFrameListener;
};

interface DCELicenseVerificationListener extends NSObjectProtocol {

	DCELicenseVerificationCallbackError(isSuccess: boolean, error: NSError): void;
}
declare var DCELicenseVerificationListener: {

	prototype: DCELicenseVerificationListener;
};

interface DCEPhotoListener extends NSObjectProtocol {

	photoOutputCallback(jpegBytes: NSData): void;
}
declare var DCEPhotoListener: {

	prototype: DCEPhotoListener;
};

declare class DynamsoftCameraEnhancer extends NSObject {

	static alloc(): DynamsoftCameraEnhancer; // inherited from NSObject

	static initLicenseVerificationDelegate(license: string, connectionDelegate: any): void;

	static new(): DynamsoftCameraEnhancer; // inherited from NSObject

	autoZoomRange: UIFloatRange;

	dceCameraView: DCECameraView;

	scanRegionVisible: boolean;

	constructor(o: { view: DCECameraView; });

	addListener(listener: DCEFrameListener): void;

	close(): void;

	disableFeatures(enumEnhancerFeatures: number): void;

	enableFeaturesError(enumEnhancerFeatures: number): void;

	getAllCameras(): NSArray<string>;

	getCameraPosition(): EnumCameraPosition;

	getCameraState(): EnumCameraState;

	getFrameFromBuffer(iskeep: boolean): DCEFrame;

	getFrameRate(): number;

	getMaxZoomFactor(): number;

	getResolution(): string;

	getScanRegion(): iRegionDefinition;

	getSelectedCamera(): string;

	getVersion(): string;

	initWithView(view: DCECameraView): this;

	isFeatureEnabled(enumEnhancerFeatures: number): boolean;

	open(): void;

	pause(): void;

	removeListener(listener: DCEFrameListener): void;

	resume(): void;

	selectCameraError(cameraId: string): void;

	selectCameraWithPositionError(position: EnumCameraPosition): void;

	setCameraStateListener(listener: DCECameraStateListener): void;

	setFocus(point: CGPoint): void;

	setFocusFocusMode(focusPoint: CGPoint, subsequentFocusMode: EnumFocusMode): void;

	setFrameRate(frameRate: number): void;

	setResolution(resolution: EnumResolution): void;

	setScanRegionError(scanRegion: iRegionDefinition): void;

	setZoom(factor: number): void;

	takePhoto(listener: DCEPhotoListener): void;

	turnOffTorch(): void;

	turnOnTorch(): void;

	updateAdvancedSettingsFromFileError(filePath: string): void;

	updateAdvancedSettingsFromStringError(JsonString: string): void;
}

declare const enum EnumCameraPosition {

	Back = 0,

	Front = 1
}

declare const enum EnumCameraState {

	AMERA_STATE_OPENING = 0,

	AMERA_STATE_OPENED = 1,

	AMERA_STATE_CLOSING = 2,

	AMERA_STATE_CLOSED = 3
}

declare const enum EnumDCEErrorCode {

	OK = 0,

	UNKNOWN = -10000,

	LICENSE_INVALID = -10001,

	LICENSE_EXPIRED = -10002,

	CAMERA_MODULE_NOT_EXIST = -10003,

	FILE_NOT_FOUND = -10004,

	FILE_FORMAT_ERROR = -10005,

	CAMERA_ID_NOT_EXIST = -10006,

	JSON_PARSE_FAILED = -10030,

	PARAMETER_VALUE_INVALID = -10038,

	REQUEST_FAILED = -10044,

	NO_LICENSE = -20000,

	HANDSHAKE_CODE_INVALID = -20001,

	LICENSE_BUFFER_FAILED = -20002,

	LICENSE_SYNC_FAILED = -20003,

	DEVICE_NOT_MATCH = -20004,

	BIND_DEVICE_FAILED = -20005,

	LICENSE_INTERFACE_CONFLICT = -20006,

	LICENSE_CLIENT_DLL_MISSING = -20007,

	INSTANCE_COUNT_OVER_LIMITED = -20008,

	LICENSE_INIT_SEQUENCE_FAILED = -20009,

	TRIAL_LICENSE = -20010,

	FAILED_TO_REACH_DLS = -20200
}

declare const enum EnumEnhancerFeatures {

	FRAME_FILTER = 1,

	SENSOR_CONTROL = 2,

	ENHANCED_FOCUS = 4,

	FAST_MODE = 8,

	AUTO_ZOOM = 16,

	SMART_TORCH = 32,

	ALL = 63
}

declare const enum EnumFocusMode {

	FM_LOCKED = 1,

	FM_CONTINUOUS_AUTO = 2
}

declare const enum EnumFrameQuality {

	RAME_QUALITY_HIGH = 0,

	RAME_QUALITY_LOW = 1,

	RAME_QUALITY_UNKNOWN = 2
}

declare const enum EnumResolution {

	ESOLUTION_AUTO = 0,

	ESOLUTION_480P = 1,

	ESOLUTION_720P = 2,

	ESOLUTION_1080P = 3,

	ESOLUTION_4K = 4,

	ESOLUTION_HIGH = 6,

	ESOLUTION_MID = 7,

	ESOLUTION_LOW = 8
}
