
interface DBRIntermediateResultDelegate extends NSObjectProtocol {

	intermediateResultCallbackResultsUserData(frameId: number, results: NSArray<iIntermediateResult> | iIntermediateResult[], userData: NSObject): void;
}
declare var DBRIntermediateResultDelegate: {

	prototype: DBRIntermediateResultDelegate;
};

interface DBRIntermediateResultListener extends NSObjectProtocol {

	intermediateResultCallbackImageDataResults(frameId: number, imageData: iImageData, results: NSArray<iIntermediateResult> | iIntermediateResult[]): void;
}
declare var DBRIntermediateResultListener: {

	prototype: DBRIntermediateResultListener;
};

interface DBRLicenseVerificationListener extends NSObjectProtocol {

	DBRLicenseVerificationCallbackError(isSuccess: boolean, error: NSError): void;
}
declare var DBRLicenseVerificationListener: {

	prototype: DBRLicenseVerificationListener;
};

interface DBRServerLicenseVerificationDelegate extends NSObjectProtocol {

	licenseVerificationCallbackError(isSuccess: boolean, error: NSError): void;
}
declare var DBRServerLicenseVerificationDelegate: {

	prototype: DBRServerLicenseVerificationDelegate;
};

interface DBRTextResultDelegate extends NSObjectProtocol {

	textResultCallbackResultsUserData(frameId: number, results: NSArray<iTextResult> | iTextResult[], userData: NSObject): void;
}
declare var DBRTextResultDelegate: {

	prototype: DBRTextResultDelegate;
};

interface DBRTextResultListener extends NSObjectProtocol {

	textResultCallbackImageDataResults(frameId: number, imageData: iImageData, results: NSArray<iTextResult> | iTextResult[]): void;
}
declare var DBRTextResultListener: {

	prototype: DBRTextResultListener;
};

declare const enum DLSErrorCode {

	CommonError = -20000
}

interface DMDLSLicenseVerificationDelegate extends NSObjectProtocol {

	DLSLicenseVerificationCallbackError(isSuccess: boolean, error: NSError): void;
}
declare var DMDLSLicenseVerificationDelegate: {

	prototype: DMDLSLicenseVerificationDelegate;
};

declare class DynamsoftBarcodeReader extends NSObject {

	static alloc(): DynamsoftBarcodeReader; // inherited from NSObject

	static getVersion(): string;

	static initLicenseVerificationDelegate(license: string, listener: DBRLicenseVerificationListener): void;

	static new(): DynamsoftBarcodeReader; // inherited from NSObject

	static setDeviceFriendlyNameError(name: string): boolean;

	duplicateForgetTime: number;

	enableDuplicateFilter: boolean;

	enableResultVerification: boolean;

	minImageReadingInterval: number;

	constructor(o: { licenseFromDLS: iDMDLSConnectionParameters; verificationDelegate: any; });

	constructor(o: { license: string; });

	constructor(o: { licenseFromServer: string; licenseKey: string; verificationDelegate: any; });

	allParameterTemplateNames(): NSArray<string>;

	appendTplFileToRuntimeSettingsConflictModeError(fileName: string, conflictMode: EnumConflictMode): boolean;

	appendTplStringToRuntimeSettingsConflictModeError(content: string, conflictMode: EnumConflictMode): boolean;

	createIntermediateResultError(type: EnumIntermediateResultType): iIntermediateResult;

	decodeBase64Error(base64: string): NSArray<iTextResult>;

	decodeBase64WithTemplateError(base64: string, templateName: string): NSArray<iTextResult>;

	decodeBufferError(imageData: iImageData): NSArray<iTextResult>;

	decodeBufferWithWidthHeightStrideFormatError(buffer: NSData, width: number, height: number, stride: number, format: EnumImagePixelFormat): NSArray<iTextResult>;

	decodeBufferWithWidthHeightStrideFormatTemplateNameError(buffer: NSData, width: number, height: number, stride: number, format: EnumImagePixelFormat, templateName: string): NSArray<iTextResult>;

	decodeFileInMemoryError(buffer: NSData): NSArray<iTextResult>;

	decodeFileWithNameError(path: string): NSArray<iTextResult>;

	decodeFileWithNameTemplateNameError(path: string, templateName: string): NSArray<iTextResult>;

	decodeImageError(image: UIImage): NSArray<iTextResult>;

	decodeImageWithTemplateError(image: UIImage, templateName: string): NSArray<iTextResult>;

	decodeIntermediateResultsError(array: NSArray<iIntermediateResult> | iIntermediateResult[]): NSArray<iTextResult>;

	decodeIntermediateResultsWithTemplateError(array: NSArray<iIntermediateResult> | iIntermediateResult[], templateName: string): NSArray<iTextResult>;

	getIntermediateResult(): NSArray<iIntermediateResult>;

	getModeArgumentIndexArgumentNameError(modeName: string, index: number, argumentName: string): string;

	getRuntimeSettings(): iPublicRuntimeSettings;

	initLicenseFromDLSVerificationDelegate(dlsConnectionParameters: iDMDLSConnectionParameters, connectionDelegate: any): this;

	initRuntimeSettingsWithFileConflictModeError(fileName: string, conflictMode: EnumConflictMode): boolean;

	initRuntimeSettingsWithStringConflictModeError(content: string, conflictMode: EnumConflictMode): boolean;

	initWithLicense(license: string): this;

	initWithLicenseFromServerLicenseKeyVerificationDelegate(licenseServer: string, licenseKey: string, connectionDelegate: any): this;

	outputLicenseToString(): string;

	outputSettingsToFileSettingsNameError(filePath: string, settingsName: string): boolean;

	outputSettingsToStringError(settingsName: string): string;

	resetRuntimeSettings(): boolean;

	setCameraEnhancer(cameraInstance: DynamsoftCameraEnhancer): void;

	setDBRIntermediateResultDelegateUserData(intermediateResultDelegate: any, userData: NSObject): void;

	setDBRIntermediateResultListener(intermediateResultDelegate: DBRIntermediateResultListener): void;

	setDBRTextResultDelegateUserData(textResultDelegate: any, userData: NSObject): void;

	setDBRTextResultListener(textResultDelegate: DBRTextResultListener): void;

	setImageSource(source: ImageSource): void;

	setLogConfigModeError(logDir: string, mode: number): boolean;

	setModeArgumentIndexArgumentNameArgumentValueError(modeName: string, index: number, argumentName: string, argumentValue: string): boolean;

	startScanning(): void;

	stopScanning(): void;

	updateRuntimeSettings(tpl: EnumPresetTemplate): void;

	updateRuntimeSettingsError(settings: iPublicRuntimeSettings): boolean;
}

declare const enum EnumAccompanyingTextRecognitionMode {

	General = 1,

	Skip = 0,

	Rev = -2147483648
}

declare const enum EnumBarcodeColourMode {

	DarkOnLight = 1,

	LightOnDark = 2,

	DarkOnDark = 4,

	LightOnLight = 8,

	DarkLightMixed = 16,

	DarkOnLightDarkSurrounding = 32,

	Skip = 0,

	Rev = -2147483648
}

declare const enum EnumBarcodeComplementMode {

	Auto = 1,

	General = 2,

	Skip = 0,

	Rev = -2147483648
}

declare const enum EnumBarcodeFormat {

	NULL = 0,

	CODE39 = 1,

	CODE128 = 2,

	CODE93 = 4,

	CODABAR = 8,

	ITF = 16,

	EAN13 = 32,

	EAN8 = 64,

	UPCA = 128,

	UPCE = 256,

	INDUSTRIAL = 512,

	CODE39EXTENDED = 1024,

	MSICODE = 1048576,

	GS1DATABAROMNIDIRECTIONAL = 2048,

	GS1DATABARTRUNCATED = 4096,

	GS1DATABARSTACKED = 8192,

	GS1DATABARSTACKEDOMNIDIRECTIONAL = 16384,

	GS1DATABAREXPANDED = 32768,

	GS1DATABAREXPANDEDSTACKED = 65536,

	GS1DATABARLIMITED = 131072,

	PATCHCODE = 262144,

	CODE_11 = 2097152,

	PDF417 = 33554432,

	QRCODE = 67108864,

	DATAMATRIX = 134217728,

	AZTEC = 268435456,

	MAXICODE = 536870912,

	MICROQR = 1073741824,

	MICROPDF417 = 524288,

	GS1COMPOSITE = -2147483648,

	ONED = 3147775,

	GS1DATABAR = 260096,

	ALL = -29360129
}

declare const enum EnumBarcodeFormat2 {

	NULL = 0,

	NONSTANDARDBARCODE = 1,

	PHARMACODE_ONE_TRACK = 4,

	PHARMACODE_TWO_TRACK = 8,

	PHARMACODE = 12,

	DOTCODE = 2,

	POSTALCODE = 32505856,

	USPSINTELLIGENTMAIL = 1048576,

	POSTNET = 2097152,

	PLANET = 4194304,

	AUSTRALIANPOST = 8388608,

	RM4SCC = 16777216,

	ALL = 4294967295
}

declare const enum EnumBinarizationMode {

	Auto = 1,

	LocalBlock = 2,

	Threshold = 4,

	Skip = 0,

	Rev = -2147483648
}

declare const enum EnumColourClusteringMode {

	Auto = 1,

	GeneralHSV = 2,

	Skip = 0,

	Rev = -2147483648
}

declare const enum EnumColourConversionMode {

	General = 1,

	Skip = 0,

	Rev = -2147483648
}

declare const enum EnumConflictMode {

	Ignore = 1,

	Overwrite = 2
}

declare const enum EnumDMChargeWay {

	Auto = 0,

	DeviceCount = 1,

	ScanCount = 2,

	ConcurrentDeviceCount = 3,

	AppDomainCount = 6,

	ActiveDeviceCount = 8,

	InstanceCount = 9,

	ConcurrentInstanceCount = 10
}

declare const enum EnumDMLicenseModule {

	ONED = 1,

	QRCODE = 2,

	PDF417 = 3,

	DATAMATRIX = 4,

	AZTEC = 5,

	MAXICODE = 6,

	PatchCode = 7,

	GS1DATABAR = 8,

	GS1COMPOSITE = 9,

	POSTALCODE = 10,

	DOTCODE = 11,

	INTERMEDIATERESULT = 12,

	DPM = 13,

	NONSTANDARDBARCODE = 16
}

declare const enum EnumDMUUIDGenerationMethod {

	Random = 1,

	Hardware = 2
}

declare const enum EnumDPMCodeReadingMode {

	Auto = 1,

	General = 2,

	Skip = 0,

	Rev = -2147483648
}

declare const enum EnumDeblurMode {

	DirectBinarization = 1,

	ThresholdBinarization = 2,

	GrayEqualization = 4,

	Smoothing = 8,

	Morphing = 16,

	DeepAnalysis = 32,

	Sharpening = 64,

	BasedOnLocBin = 128,

	SharpeningSmoothing = 256,

	Rev = -2147483648,

	Skip = 0
}

declare const enum EnumDeformationResistingMode {

	Auto = 1,

	General = 2,

	BroadWrap = 4,

	LocalReference = 8,

	Dewrinkle = 16,

	Skip = 0,

	Rev = -2147483648
}

declare const enum EnumErrorCode {

	Code_OK = 0,

	Code_Unknown = -10000,

	Code_No_Memory = -10001,

	Code_Null_Pointer = -10002,

	Code_License_Invalid = -10003,

	Code_License_Expired = -10004,

	Code_File_Not_Found = -10005,

	Code_Filetype_Not_Supported = -10006,

	Code_BPP_Not_Supported = -10007,

	Code_Index_Invalid = -10008,

	Code_Barcode_Format_Invalid = -10009,

	Code_Custom_Region_Invalid = -10010,

	Code_Max_Barcode_Number_Invalid = -10011,

	Code_Image_Read_Failed = -10012,

	Code_TIFF_Read_Failed = -10013,

	Code_QR_License_Invalid = -10016,

	Code_1D_License_Invalid = -10017,

	Code_PDF417_License_Invalid = -10019,

	Code_Datamatrix_License_Invalid = -10020,

	Code_PDF_Read_Failed = -10021,

	Code_PDF_DLL_Missing = -10022,

	Code_Page_Number_Invalid = -10023,

	Code_Custom_Size_Invalid = -10024,

	Code_Custom_Modulesize_Invalid = -10025,

	Code_Recognition_Timeout = -10026,

	Code_Json_Parse_Failed = -10030,

	Code_Json_Type_Invalid = -10031,

	Code_Json_Key_Invalid = -10032,

	Code_Json_Value_Invalid = -10033,

	Code_Json_Name_Key_Missing = -10034,

	Code_Json_Name_Value_Duplicated = -10035,

	Code_Template_Name_Invalid = -10036,

	Code_Json_Name_Reference_Invalid = -10037,

	Code_Parameter_Value_Invalid = -10038,

	Code_Domain_Not_Matched = -10039,

	Code_ReservedInfo_Not_Matched = -10040,

	Code_AZTEC_License_Invalid = -10041,

	Code_License_Dll_Missing = -10042,

	Code_Licensekey_Not_Matched = -10043,

	Code_Requested_Failed = -10044,

	Code_License_Init_Failed = -10045,

	Code_Patchcode_License_Invalid = -10046,

	Code_Postalcode_License_Invalid = -10047,

	Code_DPM_License_Invalid = -10048,

	Code_Frame_Decoding_Thread_Exists = -10049,

	Code_Stop_Decoding_Thread_Failed = -10050,

	Code_Set_Mode_Argument_Error = -10051,

	Code_License_Content_Invalid = -10052,

	Code_License_Key_Invalid = -10053,

	Code_License_Device_Runs_Out = -10054,

	Code_GET_MODE_ARGUMENT_ERROR = -10055,

	Code_IRT_LICENSE_INVALID = -10056,

	Code_MAXICODE_LICENSE_INVALID = -10057,

	Code_GS1_DATABAR_LICENSE_INVALID = -10058,

	Code_GS1_COMPOSITE_LICENSE_INVALID = -10059,

	Code_PANORAMA_LICENSE_INVALID = -10060,

	Code_DOTCODE_LICENSE_INVALID = -10061,

	Code_PHARMACODE_LICENSE_INVALID = -10062,

	Code_IMAGE_ORIENTATION_INVALID = -10063,

	Code_DIRECTORY_INVALID = -10064,

	Code_NO_LICENSE = -20000,

	Code_HANDSHAKE_CODE_INVALID = -20001,

	Code_LICENSE_BUFFER_FAILED = -20002,

	Code_LICENSE_SYNC_FAILED = -20003,

	Code_DEVICE_NOT_MATCH = -20004,

	Code_BIND_DEVICE_FAILED = -20005,

	Code_LICENSE_INTERFACE_CONFLICT = -20006,

	Code_LICENSE_CLIENT_DLL_MISSING = -20007,

	Code_INSTANCE_COUNT_OVER_LIMITED = -20008,

	Code_LICENSE_INIT_SEQUENCE_FAILED = -20009,

	Code_TRIAL_LICENSE = -20010,

	Code_FAILED_TO_REACH_DLS = -20200
}

declare const enum EnumGrayscaleTransformationMode {

	Inverted = 1,

	Original = 2,

	Skip = 0,

	Rev = -2147483648
}

declare const enum EnumIMResultDataType {

	Image = 1,

	Contour = 2,

	LineSegment = 4,

	LocalizationResult = 8,

	RegionOfInterest = 16,

	Quadrilateral = 32,

	Reference = 64
}

declare const enum EnumImagePixelFormat {

	Binary = 0,

	BinaryInverted = 1,

	GrayScaled = 2,

	NV21 = 3,

	RGB_565 = 4,

	RGB_555 = 5,

	RGB_888 = 6,

	ARGB_8888 = 7,

	RGB_161616 = 8,

	ARGB_16161616 = 9,

	ABGR_8888 = 10,

	ABGR_16161616 = 11,

	BGR_888 = 12
}

declare const enum EnumImagePreprocessingMode {

	Auto = 1,

	General = 2,

	GrayEqualize = 4,

	GraySmooth = 8,

	SharpenSmooth = 16,

	Morphology = 32,

	Skip = 0,

	Rev = -2147483648
}

declare const enum EnumIntermediateResultSavingMode {

	Memory = 1,

	FileSystem = 2,

	Both = 4,

	ReferenceMemory = 8
}

declare const enum EnumIntermediateResultType {

	NoResult = 0,

	OriginalImage = 1,

	ColourClusteredImage = 2,

	ColourConvertedGrayScaleImage = 4,

	TransformedGrayScaleImage = 8,

	PredetectedRegion = 16,

	PreprocessedImage = 32,

	BinarizedImage = 64,

	TextZone = 128,

	Contour = 256,

	LineSegment = 512,

	Form = 1024,

	SegmentationBlock = 2048,

	TypedBarcodeZone = 4096,

	PredetectedQuadrilateral = 8192
}

declare const enum EnumLocalizationMode {

	Auto = 1,

	ConnectedBlocks = 2,

	Statistics = 4,

	Lines = 8,

	ScanDirectly = 16,

	StatisticsMarks = 32,

	StatisticsPostalCode = 64,

	Centre = 128,

	OneDFastScan = 256,

	Skip = 0,

	Rev = -2147483648
}

declare const enum EnumLogMode {

	OFF = 0,

	IMAGE = 1,

	TEXT = 2
}

declare const enum EnumPDFReadingMode {

	Auto = 1,

	Vector = 2,

	Raster = 4,

	Rev = -2147483648
}

declare const enum EnumPresetTemplate {

	Default = 0,

	VideoSingleBarcode = 1,

	VideoSpeedFirst = 2,

	VideoReadRateFirst = 3,

	ImageSpeedFirst = 4,

	ImageReadRateFirst = 5,

	ImageDefault = 6
}

declare const enum EnumProduct {

	DBR = 1,

	DLR = 2,

	DWT = 4,

	DCE = 8,

	DPS = 16,

	ALL = 65535
}

declare const enum EnumQRCodeErrorCorrectionLevel {

	ErrorCorrectionH = 0,

	ErrorCorrectionL = 1,

	ErrorCorrectionM = 2,

	ErrorCorrectionQ = 3
}

declare const enum EnumRegionPredetectionMode {

	Auto = 1,

	General = 2,

	GeneralRGBContrast = 4,

	GeneralGrayContrast = 8,

	GeneralHSVContrast = 16,

	Skip = 0,

	Rev = -2147483648
}

declare const enum EnumResultCoordinateType {

	Pixel = 1,

	Percentage = 2
}

declare const enum EnumResultType {

	StandardText = 0,

	RawText = 1,

	CandidateText = 2,

	PartialText = 3
}

declare const enum EnumScaleUpMode {

	Auto = 1,

	LinearInterpolation = 2,

	NearestNeighbourInterpolation = 4,

	Skip = 0,

	Rev = -2147483648
}

declare const enum EnumTerminatePhase {

	Predetected = 1,

	Preprocecessed = 2,

	Binarized = 4,

	Localized = 8,

	Determined = 16,

	Recognized = 32
}

declare const enum EnumTextAssistedCorrectionMode {

	Auto = 1,

	Verifying = 2,

	VerifyingPatching = 4,

	Skip = 0,

	Rev = -2147483648
}

declare const enum EnumTextFilterMode {

	Auto = 1,

	GeneralContour = 2,

	Skip = 0,

	Rev = -2147483648
}

declare const enum EnumTextResultOrderMode {

	Confidence = 1,

	Position = 2,

	Format = 4,

	Skip = 0,

	Rev = -2147483648
}

declare const enum EnumTextureDetectionMode {

	Auto = 1,

	GeneralWidthConcentration = 2,

	Skip = 0,

	Rev = -2147483648
}

interface ImageSource extends NSObjectProtocol {

	getImage(): iImageData;
}
declare var ImageSource: {

	prototype: ImageSource;
};

declare class iAztecDetails extends NSObject {

	static alloc(): iAztecDetails; // inherited from NSObject

	static new(): iAztecDetails; // inherited from NSObject

	columns: number;

	layerNumber: number;

	moduleSize: number;

	rows: number;
}

declare class iContour extends NSObject {

	static alloc(): iContour; // inherited from NSObject

	static new(): iContour; // inherited from NSObject

	points: NSArray<any>;

	pointsCount: number;
}

declare class iDMDLSConnectionParameters extends NSObject {

	static alloc(): iDMDLSConnectionParameters; // inherited from NSObject

	static new(): iDMDLSConnectionParameters; // inherited from NSObject

	UUIDGenerationMethod: EnumDMUUIDGenerationMethod;

	chargeWay: EnumDMChargeWay;

	handshakeCode: string;

	limitedLicenseModules: NSArray<any>;

	mainServerURL: string;

	maxBufferDays: number;

	organizationID: string;

	products: EnumProduct;

	sessionPassword: string;

	standbyServerURL: string;
}

declare class iDataMatrixDetails extends NSObject {

	static alloc(): iDataMatrixDetails; // inherited from NSObject

	static new(): iDataMatrixDetails; // inherited from NSObject

	columns: number;

	dataRegionColumns: number;

	dataRegionNumber: number;

	dataRegionRows: number;

	moduleSize: number;

	rows: number;
}

declare class iExtendedResult extends NSObject {

	static alloc(): iExtendedResult; // inherited from NSObject

	static new(): iExtendedResult; // inherited from NSObject

	accompanyingTextBytes: NSData;

	barcodeFormat: EnumBarcodeFormat;

	barcodeFormatString: string;

	barcodeFormatString_2: string;

	barcodeFormat_2: EnumBarcodeFormat2;

	bytes: NSData;

	clarity: number;

	confidence: number;

	deformation: number;

	detailedResult: NSObject;

	resultType: EnumResultType;

	samplingImage: iSamplingImageData;
}

declare class iFurtherModes extends NSObject {

	static alloc(): iFurtherModes; // inherited from NSObject

	static new(): iFurtherModes; // inherited from NSObject

	accompanyingTextRecognitionModes: NSArray<any>;

	barcodeColourModes: NSArray<any>;

	barcodeComplementModes: NSArray<any>;

	colourClusteringModes: NSArray<any>;

	colourConversionModes: NSArray<any>;

	deformationResistingModes: NSArray<any>;

	dpmCodeReadingModes: NSArray<any>;

	grayscaleTransformationModes: NSArray<any>;

	imagePreprocessingModes: NSArray<any>;

	regionPredetectionModes: NSArray<any>;

	textAssistedCorrectionMode: EnumTextAssistedCorrectionMode;

	textFilterModes: NSArray<any>;

	textureDetectionModes: NSArray<any>;
}

declare class iImageData extends NSObject {

	static alloc(): iImageData; // inherited from NSObject

	static new(): iImageData; // inherited from NSObject

	bytes: NSData;

	format: EnumImagePixelFormat;

	height: number;

	orientation: number;

	stride: number;

	width: number;

	toUIImage(): UIImage;
}

declare class iIntermediateResult extends NSObject {

	static alloc(): iIntermediateResult; // inherited from NSObject

	static new(): iIntermediateResult; // inherited from NSObject

	barcodeComplementMode: EnumBarcodeComplementMode;

	bcmIndex: number;

	binarizationMode: EnumBinarizationMode;

	bmIndex: number;

	ccmIndex: number;

	cicmIndex: number;

	colourClusteringMode: EnumColourClusteringMode;

	colourConversionMode: EnumColourConversionMode;

	dataType: EnumIMResultDataType;

	deformationResistingMode: EnumDeformationResistingMode;

	dpmCodeReadingMode: EnumDPMCodeReadingMode;

	dpmcrmIndex: number;

	drmIndex: number;

	frameId: number;

	grayscaleTransformationMode: EnumGrayscaleTransformationMode;

	gtmIndex: number;

	imagePreprocessingMode: EnumImagePreprocessingMode;

	ipmIndex: number;

	lmIndex: number;

	localizationMode: EnumLocalizationMode;

	regionPredetectionMode: EnumRegionPredetectionMode;

	resultType: EnumIntermediateResultType;

	results: NSObject;

	resultsCount: number;

	roiId: number;

	rpmColourArgumentIndex: number;

	rpmIndex: number;

	scaleDownRatio: number;

	textFilterMode: EnumTextFilterMode;

	tfmIndex: number;

	transformationMatrix: NSArray<any>;
}

declare class iLineSegment extends NSObject {

	static alloc(): iLineSegment; // inherited from NSObject

	static new(): iLineSegment; // inherited from NSObject

	endPoint: CGPoint;

	linesConfidenceCoefficients: NSData;

	startPoint: CGPoint;
}

declare class iLocalizationResult extends NSObject {

	static alloc(): iLocalizationResult; // inherited from NSObject

	static new(): iLocalizationResult; // inherited from NSObject

	accompanyingTextBytes: NSData;

	angle: number;

	barcodeFormat: EnumBarcodeFormat;

	barcodeFormatString: string;

	barcodeFormatString_2: string;

	barcodeFormat_2: EnumBarcodeFormat2;

	confidence: number;

	documentName: string;

	moduleSize: number;

	pageNumber: number;

	regionName: string;

	resultCoordinateType: EnumResultCoordinateType;

	resultPoints: NSArray<any>;

	terminatePhase: EnumTerminatePhase;

	transformationMatrix: CGAffineTransform;
}

declare class iOneDCodeDetails extends NSObject {

	static alloc(): iOneDCodeDetails; // inherited from NSObject

	static new(): iOneDCodeDetails; // inherited from NSObject

	checkDigitBytes: NSData;

	endPatternRange: NSArray<any>;

	middlePatternRange: NSArray<any>;

	moduleSize: number;

	startCharsBytes: NSData;

	startPatternRange: NSArray<any>;

	stopCharsBytes: NSData;
}

declare class iPDF417Details extends NSObject {

	static alloc(): iPDF417Details; // inherited from NSObject

	static new(): iPDF417Details; // inherited from NSObject

	columns: number;

	errorCorrectionLevel: number;

	hasLeftRowIndicator: number;

	hasRightRowIndicator: number;

	moduleSize: number;

	rows: number;
}

declare class iPublicRuntimeSettings extends NSObject {

	static alloc(): iPublicRuntimeSettings; // inherited from NSObject

	static new(): iPublicRuntimeSettings; // inherited from NSObject

	barcodeFormatIds: number;

	barcodeFormatIds_2: number;

	barcodeZoneMinDistanceToImageBorders: number;

	binarizationModes: NSArray<any>;

	deblurLevel: number;

	deblurModes: NSArray<any>;

	expectedBarcodesCount: number;

	furtherModes: iFurtherModes;

	intermediateResultSavingMode: EnumIntermediateResultSavingMode;

	intermediateResultTypes: number;

	localizationModes: NSArray<any>;

	maxAlgorithmThreadCount: number;

	minBarcodeTextLength: number;

	minResultConfidence: number;

	pdfRasterDPI: number;

	pdfReadingMode: EnumPDFReadingMode;

	region: iRegionDefinition;

	resultCoordinateType: EnumResultCoordinateType;

	returnBarcodeZoneClarity: number;

	scaleDownThreshold: number;

	scaleUpModes: NSArray<any>;

	terminatePhase: EnumTerminatePhase;

	textResultOrderModes: NSArray<any>;

	timeout: number;
}

declare class iQRCodeDetails extends NSObject {

	static alloc(): iQRCodeDetails; // inherited from NSObject

	static new(): iQRCodeDetails; // inherited from NSObject

	columns: number;

	errorCorrectionLevel: EnumQRCodeErrorCorrectionLevel;

	mode: number;

	model: number;

	moduleSize: number;

	page: number;

	parityData: number;

	rows: number;

	totalPage: number;

	version: number;
}

declare class iQuadrilateral extends NSObject {

	static alloc(): iQuadrilateral; // inherited from NSObject

	static new(): iQuadrilateral; // inherited from NSObject

	points: NSArray<any>;
}

declare class iRegionDefinition extends NSObject {

	static alloc(): iRegionDefinition; // inherited from NSObject

	static new(): iRegionDefinition; // inherited from NSObject

	regionBottom: number;

	regionLeft: number;

	regionMeasuredByPercentage: number;

	regionRight: number;

	regionTop: number;
}

declare class iRegionOfInterest extends NSObject {

	static alloc(): iRegionOfInterest; // inherited from NSObject

	static new(): iRegionOfInterest; // inherited from NSObject

	height: number;

	point: CGPoint;

	roiId: number;

	width: number;
}

declare class iSamplingImageData extends NSObject {

	static alloc(): iSamplingImageData; // inherited from NSObject

	static new(): iSamplingImageData; // inherited from NSObject

	bytes: NSData;

	height: number;

	width: number;
}

declare class iTextResult extends NSObject {

	static alloc(): iTextResult; // inherited from NSObject

	static new(): iTextResult; // inherited from NSObject

	barcodeBytes: NSData;

	barcodeFormat: EnumBarcodeFormat;

	barcodeFormatString: string;

	barcodeFormatString_2: string;

	barcodeFormat_2: EnumBarcodeFormat2;

	barcodeText: string;

	detailedResult: NSObject;

	exception: string;

	extendedResults: NSArray<iExtendedResult>;

	isDPM: number;

	isMirrored: number;

	localizationResult: iLocalizationResult;
}
