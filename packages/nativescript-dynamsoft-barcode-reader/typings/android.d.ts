/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module dynamsoft {
		export module dbr {
			export class AztecDetails {
				public static class: java.lang.Class<com.dynamsoft.dbr.AztecDetails>;
				public moduleSize: number;
				public rows: number;
				public columns: number;
				public layerNumber: number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dbr {
			export class BarcodeLicenseNeedRefresh {
				public static class: java.lang.Class<com.dynamsoft.dbr.BarcodeLicenseNeedRefresh>;
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dbr {
			export class BarcodeLicenseUtil {
				public static class: java.lang.Class<com.dynamsoft.dbr.BarcodeLicenseUtil>;
				public LTSUploadSend(param0: string, param1: string): string;
				public getLTSAuthSend(param0: string): string;
				public getDLSAuthSend(param0: string): string;
				public DLSUploadSend(param0: string, param1: string): string;
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dbr {
			export class BarcodeReader {
				public static class: java.lang.Class<com.dynamsoft.dbr.BarcodeReader>;
				public startScanning(): void;
				public getEnabledDuplicateFilterStatus(): boolean;
				public getRuntimeSettings(): com.dynamsoft.dbr.PublicRuntimeSettings;
				public decodeBase64String(param0: string): androidNative.Array<com.dynamsoft.dbr.TextResult>;
				/** @deprecated */
				public decodeIntermediateResults(param0: androidNative.Array<com.dynamsoft.dbr.IntermediateResult>, param1: string): androidNative.Array<com.dynamsoft.dbr.TextResult>;
				public decodeBase64(param0: string, param1: string): androidNative.Array<com.dynamsoft.dbr.TextResult>;
				public setTextResultListener(param0: com.dynamsoft.dbr.TextResultListener): void;
				public setIntermediateResultListener(param0: com.dynamsoft.dbr.IntermediateResultListener): void;
				public constructor();
				public getIntermediateResults(): androidNative.Array<com.dynamsoft.dbr.IntermediateResult>;
				/** @deprecated */
				public decodeBase64String(param0: string, param1: string): androidNative.Array<com.dynamsoft.dbr.TextResult>;
				public initIntermediateResults(param0: number): com.dynamsoft.dbr.IntermediateResult;
				public decodeFileInMemory(param0: java.io.InputStream): androidNative.Array<com.dynamsoft.dbr.TextResult>;
				/** @deprecated */
				public initLicenseFromDLS(param0: com.dynamsoft.dbr.DMDLSConnectionParameters, param1: com.dynamsoft.dbr.DBRDLSLicenseVerificationListener): void;
				public resetRuntimeSettings(): void;
				public decodeFile(param0: string): androidNative.Array<com.dynamsoft.dbr.TextResult>;
				public appendTplStringToRuntimeSettings(param0: string, param1: number): void;
				public outputSettingsToFile(param0: string, param1: string): void;
				public getEnabledResultVerificationStatus(): boolean;
				public decodeImage(param0: java.io.InputStream, param1: string): androidNative.Array<com.dynamsoft.dbr.TextResult>;
				public getMinImageReadingInterval(): number;
				public setDuplicateForgetTime(param0: number): void;
				public decodeBufferedImage(param0: globalAndroid.graphics.Bitmap): androidNative.Array<com.dynamsoft.dbr.TextResult>;
				public getAllParameterTemplateNames(): androidNative.Array<string>;
				public updateRuntimeSettings(param0: com.dynamsoft.dbr.EnumPresetTemplate): void;
				public enableDuplicateFilter(param0: boolean): void;
				/** @deprecated */
				public outputLicenseToString(): string;
				public initRuntimeSettingsWithFile(param0: string, param1: number): void;
				public setCameraEnhancer(param0: com.dynamsoft.dce.CameraEnhancer): void;
				public static getVersion(): string;
				/** @deprecated */
				public initLicense(param0: string): void;
				public outputSettingsToString(param0: string): string;
				public getDuplicateForgetTime(): number;
				public static setDeviceFriendlyName(param0: string): void;
				public setModeArgument(param0: string, param1: number, param2: string, param3: string): void;
				public appendTplFileToRuntimeSettings(param0: string, param1: number): void;
				public decodeFileInMemory(param0: androidNative.Array<number>): androidNative.Array<com.dynamsoft.dbr.TextResult>;
				public decodeImage(param0: androidNative.Array<number>, param1: string): androidNative.Array<com.dynamsoft.dbr.TextResult>;
				public finalize(): void;
				public decodeRawImage(param0: androidNative.Array<number>, param1: number, param2: number, param3: number, param4: number, param5: number, param6: string): androidNative.Array<com.dynamsoft.dbr.TextResult>;
				/** @deprecated */
				public constructor(param0: string);
				/** @deprecated */
				public decodeBufferedImage(param0: globalAndroid.graphics.Bitmap, param1: string): androidNative.Array<com.dynamsoft.dbr.TextResult>;
				public decodeBuffer(param0: androidNative.Array<number>, param1: number, param2: number, param3: number, param4: number): androidNative.Array<com.dynamsoft.dbr.TextResult>;
				public stopScanning(): void;
				/** @deprecated */
				public decodeFile(param0: string, param1: string): androidNative.Array<com.dynamsoft.dbr.TextResult>;
				public decodeBuffer(param0: com.dynamsoft.dbr.ImageData): androidNative.Array<com.dynamsoft.dbr.TextResult>;
				/** @deprecated */
				public decodeFileInMemory(param0: java.io.InputStream, param1: string): androidNative.Array<com.dynamsoft.dbr.TextResult>;
				/** @deprecated */
				public setIntermediateResultCallback(param0: com.dynamsoft.dbr.IntermediateResultCallback, param1: any): void;
				public decodeImage(param0: globalAndroid.graphics.Bitmap, param1: string): androidNative.Array<com.dynamsoft.dbr.TextResult>;
				public setLogConfig(param0: string, param1: number): void;
				public static initLicense(param0: string, param1: com.dynamsoft.dbr.DBRLicenseVerificationListener): void;
				public enableResultVerification(param0: boolean): void;
				public updateRuntimeSettings(param0: com.dynamsoft.dbr.PublicRuntimeSettings): void;
				public decodeIntermediateResults(param0: androidNative.Array<com.dynamsoft.dbr.IntermediateResult>): androidNative.Array<com.dynamsoft.dbr.TextResult>;
				public setMinImageReadingInterval(param0: number): void;
				public getModeArgument(param0: string, param1: number, param2: string): string;
				public initRuntimeSettingsWithString(param0: string, param1: number): void;
				/** @deprecated */
				public initLicenseFromServer(param0: string, param1: string, param2: com.dynamsoft.dbr.DBRServerLicenseVerificationListener): void;
				/** @deprecated */
				public decodeBuffer(param0: androidNative.Array<number>, param1: number, param2: number, param3: number, param4: number, param5: string): androidNative.Array<com.dynamsoft.dbr.TextResult>;
				/** @deprecated */
				public decodeFileInMemory(param0: androidNative.Array<number>, param1: string): androidNative.Array<com.dynamsoft.dbr.TextResult>;
				/** @deprecated */
				public setTextResultCallback(param0: com.dynamsoft.dbr.TextResultCallback, param1: any): void;
				public decodeImage(param0: string, param1: string): androidNative.Array<com.dynamsoft.dbr.TextResult>;
				public setImageSource(param0: com.dynamsoft.dbr.ImageSource): void;
			}
			export module BarcodeReader {
				export class BarcodeGetLicenseTask extends globalAndroid.os.AsyncTask<java.lang.Void,java.lang.Integer,org.json.JSONObject> {
					public static class: java.lang.Class<com.dynamsoft.dbr.BarcodeReader.BarcodeGetLicenseTask>;
					public onPostExecute(param0: org.json.JSONObject): void;
					public doInBackground(param0: androidNative.Array<java.lang.Void>): org.json.JSONObject;
				}
				export class BarcodeGetLicenseTaskEx extends globalAndroid.os.AsyncTask<java.lang.Void,java.lang.Integer,string> {
					public static class: java.lang.Class<com.dynamsoft.dbr.BarcodeReader.BarcodeGetLicenseTaskEx>;
					public doInBackground(param0: androidNative.Array<java.lang.Void>): string;
				}
				export class CameraEnhancerDecodeRunnable {
					public static class: java.lang.Class<com.dynamsoft.dbr.BarcodeReader.CameraEnhancerDecodeRunnable>;
					public run(): void;
				}
				export class DecodeRecord {
					public static class: java.lang.Class<com.dynamsoft.dbr.BarcodeReader.DecodeRecord>;
				}
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dbr {
			export class BarcodeReaderException {
				public static class: java.lang.Class<com.dynamsoft.dbr.BarcodeReaderException>;
				public getErrorCode(): number;
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dbr {
			export class BuildConfig {
				public static class: java.lang.Class<com.dynamsoft.dbr.BuildConfig>;
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
		export module dbr {
			export class CameraInnerListener {
				public static class: java.lang.Class<com.dynamsoft.dbr.CameraInnerListener>;
				/**
				 * Constructs a new instance of the com.dynamsoft.dbr.CameraInnerListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					process(param0: number, param1: number): void;
				});
				public constructor();
				public process(param0: number, param1: number): void;
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dbr {
			export class Contour {
				public static class: java.lang.Class<com.dynamsoft.dbr.Contour>;
				public points: androidNative.Array<com.dynamsoft.dbr.Point>;
				public constructor();
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dbr {
			export class DBRDLSLicenseVerificationListener {
				public static class: java.lang.Class<com.dynamsoft.dbr.DBRDLSLicenseVerificationListener>;
				/**
				 * Constructs a new instance of the com.dynamsoft.dbr.DBRDLSLicenseVerificationListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					DLSLicenseVerificationCallback(param0: boolean, param1: java.lang.Exception): void;
				});
				public constructor();
				public DLSLicenseVerificationCallback(param0: boolean, param1: java.lang.Exception): void;
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dbr {
			export class DBRLicenseVerificationListener {
				public static class: java.lang.Class<com.dynamsoft.dbr.DBRLicenseVerificationListener>;
				/**
				 * Constructs a new instance of the com.dynamsoft.dbr.DBRLicenseVerificationListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					DBRLicenseVerificationCallback(param0: boolean, param1: java.lang.Exception): void;
				});
				public constructor();
				public DBRLicenseVerificationCallback(param0: boolean, param1: java.lang.Exception): void;
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dbr {
			export class DBRServerLicenseVerificationListener {
				public static class: java.lang.Class<com.dynamsoft.dbr.DBRServerLicenseVerificationListener>;
				/**
				 * Constructs a new instance of the com.dynamsoft.dbr.DBRServerLicenseVerificationListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					licenseVerificationCallback(param0: boolean, param1: java.lang.Exception): void;
				});
				public constructor();
				public licenseVerificationCallback(param0: boolean, param1: java.lang.Exception): void;
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dbr {
			export class DBRUUID {
				public static class: java.lang.Class<com.dynamsoft.dbr.DBRUUID>;
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dbr {
			export class DMDLSConnectionParameters {
				public static class: java.lang.Class<com.dynamsoft.dbr.DMDLSConnectionParameters>;
				public mainServerURL: string;
				public standbyServerURL: string;
				public organizationID: string;
				public handshakeCode: string;
				public sessionPassword: string;
				public uuidGenerationMethod: number;
				public maxBufferDays: number;
				public limitedLicenseModules: java.util.List<java.lang.Integer>;
				public chargeWay: number;
				public products: number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dbr {
			export class DataMatrixDetails {
				public static class: java.lang.Class<com.dynamsoft.dbr.DataMatrixDetails>;
				public moduleSize: number;
				public rows: number;
				public columns: number;
				public dataRegionRows: number;
				public dataRegionColumns: number;
				public dataRegionNumber: number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dbr {
			export class EnumAccompanyingTextRecognitionMode {
				public static class: java.lang.Class<com.dynamsoft.dbr.EnumAccompanyingTextRecognitionMode>;
				public static ATRM_GENERAL: number;
				public static ATRM_SKIP: number;
				public static ATRM_REV: number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dbr {
			export class EnumBarcodeColourMode {
				public static class: java.lang.Class<com.dynamsoft.dbr.EnumBarcodeColourMode>;
				public static BICM_DARK_ON_LIGHT: number;
				public static BICM_LIGHT_ON_DARK: number;
				public static BICM_DARK_ON_DARK: number;
				public static BICM_LIGHT_ON_LIGHT: number;
				public static BICM_DARK_LIGHT_MIXED: number;
				public static BICM_DARK_ON_LIGHT_DARK_SURROUNDING: number;
				public static BICM_SKIP: number;
				public static BICM_REV: number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dbr {
			export class EnumBarcodeComplementMode {
				public static class: java.lang.Class<com.dynamsoft.dbr.EnumBarcodeComplementMode>;
				public static BCM_AUTO: number;
				public static BCM_GENERAL: number;
				public static BCM_SKIP: number;
				public static BCM_REV: number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dbr {
			export class EnumBarcodeFormat {
				public static class: java.lang.Class<com.dynamsoft.dbr.EnumBarcodeFormat>;
				public static BF_ALL: number;
				public static BF_ONED: number;
				public static BF_GS1_DATABAR: number;
				public static BF_NULL: number;
				public static BF_CODE_39: number;
				public static BF_CODE_128: number;
				public static BF_CODE_93: number;
				public static BF_CODABAR: number;
				public static BF_ITF: number;
				public static BF_EAN_13: number;
				public static BF_EAN_8: number;
				public static BF_UPC_A: number;
				public static BF_UPC_E: number;
				public static BF_INDUSTRIAL_25: number;
				public static BF_CODE_39_EXTENDED: number;
				public static BF_GS1_DATABAR_OMNIDIRECTIONAL: number;
				public static BF_GS1_DATABAR_TRUNCATED: number;
				public static BF_GS1_DATABAR_STACKED: number;
				public static BF_GS1_DATABAR_STACKED_OMNIDIRECTIONAL: number;
				public static BF_GS1_DATABAR_EXPANDED: number;
				public static BF_GS1_DATABAR_EXPANDED_STACKED: number;
				public static BF_GS1_DATABAR_LIMITED: number;
				public static BF_PATCHCODE: number;
				public static BF_PDF417: number;
				public static BF_QR_CODE: number;
				public static BF_DATAMATRIX: number;
				public static BF_AZTEC: number;
				public static BF_MAXICODE: number;
				public static BF_MICRO_QR: number;
				public static BF_MICRO_PDF417: number;
				public static BF_GS1_COMPOSITE: number;
				public static BF_MSI_CODE: number;
				public static BF_CODE_11: number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dbr {
			export class EnumBarcodeFormat_2 {
				public static class: java.lang.Class<com.dynamsoft.dbr.EnumBarcodeFormat_2>;
				public static BF2_NULL: number;
				public static BF2_ALL: number;
				public static BF2_NONSTANDARD_BARCODE: number;
				public static BF2_DOTCODE: number;
				public static BF2_PHARMACODE: number;
				public static BF2_PHARMACODE_ONE_TRACK: number;
				public static BF2_PHARMACODE_TWO_TRACK: number;
				public static BF2_POSTALCODE: number;
				public static BF2_USPSINTELLIGENTMAIL: number;
				public static BF2_POSTNET: number;
				public static BF2_PLANET: number;
				public static BF2_AUSTRALIANPOST: number;
				public static BF2_RM4SCC: number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dbr {
			export class EnumBinarizationMode {
				public static class: java.lang.Class<com.dynamsoft.dbr.EnumBinarizationMode>;
				public static BM_AUTO: number;
				public static BM_LOCAL_BLOCK: number;
				public static BM_THRESHOLD: number;
				public static BM_SKIP: number;
				public static BM_REV: number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dbr {
			export class EnumColourClusteringMode {
				public static class: java.lang.Class<com.dynamsoft.dbr.EnumColourClusteringMode>;
				public static CCM_AUTO: number;
				public static CCM_GENERAL_HSV: number;
				public static CCM_SKIP: number;
				public static CCM_REV: number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dbr {
			export class EnumColourConversionMode {
				public static class: java.lang.Class<com.dynamsoft.dbr.EnumColourConversionMode>;
				public static CICM_GENERAL: number;
				public static CICM_SKIP: number;
				public static CICM_REV: number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dbr {
			export class EnumConflictMode {
				public static class: java.lang.Class<com.dynamsoft.dbr.EnumConflictMode>;
				public static CM_IGNORE: number;
				public static CM_OVERWRITE: number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dbr {
			export class EnumDMChargeWay {
				public static class: java.lang.Class<com.dynamsoft.dbr.EnumDMChargeWay>;
				public static DM_CW_AUTO: number;
				public static DM_CW_DEVICE_COUNT: number;
				public static DM_CW_SCAN_COUNT: number;
				public static DM_CW_CONCURRENT_DEVICE_COUNT: number;
				public static DM_CW_APP_DOMAIN_COUNT: number;
				public static DM_CW_ACTIVE_DEVICE_COUNT: number;
				public static DM_CW_INSTANCE_COUNT: number;
				public static DM_CW_CONCURRENT_INSTANCE_COUNT: number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dbr {
			export class EnumDMLicenseModule {
				public static class: java.lang.Class<com.dynamsoft.dbr.EnumDMLicenseModule>;
				public static DM_LM_ONED: number;
				public static DM_LM_QR_CODE: number;
				public static DM_LM_PDF417: number;
				public static DM_LM_DATAMATRIX: number;
				public static DM_LM_AZTEC: number;
				public static DM_LM_MAXICODE: number;
				public static DM_LM_PATHCODE: number;
				public static DM_LM_GS1_DATABAR: number;
				public static DM_LM_GS1_COMPOSITE: number;
				public static DM_LM_POSTAL_CODE: number;
				public static DM_LM_DOTCODE: number;
				public static DM_LM_INTERMEDIATE_RESULT: number;
				public static DM_LM_DPM: number;
				public static DM_LM_NONSTANDARD_BARCODE: number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dbr {
			export class EnumDMUUIDGenerationMethod {
				public static class: java.lang.Class<com.dynamsoft.dbr.EnumDMUUIDGenerationMethod>;
				public static DM_UUIDGM_RANDOM: number;
				public static DM_UUIDGM_HARDWARE: number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dbr {
			export class EnumDPMCodeReadingMode {
				public static class: java.lang.Class<com.dynamsoft.dbr.EnumDPMCodeReadingMode>;
				public static DPMCRM_AUTO: number;
				public static DPMCRM_GENERAL: number;
				public static DPMCRM_SKIP: number;
				public static DPMCRM_REV: number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dbr {
			export class EnumDeblurMode {
				public static class: java.lang.Class<com.dynamsoft.dbr.EnumDeblurMode>;
				public static DM_SKIP: number;
				public static DM_DIRECT_BINARIZATION: number;
				public static DM_THRESHOLD_BINARIZATION: number;
				public static DM_GRAYE_EQULIZATION: number;
				public static DM_SMOOTHING: number;
				public static DM_MORPHING: number;
				public static DM_DEEP_ANALYSIS: number;
				public static DM_SHARPENING: number;
				public static DM_BASED_ON_LOC_BIN: number;
				public static DM_SHARPENING_SMOOTHING: number;
				public static DM_REV: number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dbr {
			export class EnumDeformationResistingMode {
				public static class: java.lang.Class<com.dynamsoft.dbr.EnumDeformationResistingMode>;
				public static DRM_AUTO: number;
				public static DRM_GENERAL: number;
				public static DRM_BROAD_WARP: number;
				public static DRM_LOCAL_REFERENCE: number;
				public static DRM_DEWRINKLE: number;
				public static DRM_SKIP: number;
				public static DRM_REV: number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dbr {
			export class EnumErrorCode {
				public static class: java.lang.Class<com.dynamsoft.dbr.EnumErrorCode>;
				public static DBR_SYSTEM_EXCEPTION: number;
				public static DBR_SUCCESS: number;
				public static DBR_UNKNOWN: number;
				public static DBR_NO_MEMORY: number;
				public static DBR_NULL_REFERENCE: number;
				public static DBR_LICENSE_INVALID: number;
				public static DBR_LICENSE_EXPIRED: number;
				public static DBR_FILE_NOT_FOUND: number;
				public static DBR_FILETYPE_NOT_SUPPORTED: number;
				public static DBR_BPP_NOT_SUPPORTED: number;
				public static DBR_INDEX_INVALID: number;
				public static DBR_BARCODE_FORMAT_INVALID: number;
				public static DBR_CUSTOM_REGION_INVALID: number;
				public static DBR_MAX_BARCODE_NUMBER_INVALID: number;
				public static DBR_IMAGE_READ_FAILED: number;
				public static DBR_TIFF_READ_FAILED: number;
				public static DBR_QR_LICENSE_INVALID: number;
				public static DBR_1D_LICENSE_INVALID: number;
				public static DBR_DIB_BUFFER_INVALID: number;
				public static DBR_PDF417_LICENSE_INVALID: number;
				public static DBR_DATAMATRIX_LICENSE_INVALID: number;
				public static DBR_PDF_READ_FAILED: number;
				public static DBR_PDF_DLL_MISSING: number;
				public static DBR_PAGE_NUMBER_INVALID: number;
				public static DBR_CUSTOM_SIZE_INVALID: number;
				public static DBR_CUSTOM_MODULESIZE_INVALID: number;
				public static DBR_RECOGNITION_TIMEOUT: number;
				public static DBR_JSON_PARSE_FAILED: number;
				public static DBR_JSON_TYPE_INVALID: number;
				public static DBR_JSON_KEY_INVALID: number;
				public static DBR_JSON_VALUE_INVALID: number;
				public static DBR_JSON_NAME_KEY_MISSING: number;
				public static DBR_JSON_NAME_VALUE_DUPLICATED: number;
				public static DBR_TEMPLATE_NAME_INVALID: number;
				public static DBR_JSON_NAME_REFERENCE_INVALID: number;
				public static DBR_PARAMETER_VALUE_INVALID: number;
				public static DBR_DOMAIN_NOT_MATCHED: number;
				public static DBR_RESERVEDINFO_MATCHED: number;
				public static DBR_AZTEC_LICENSE_INVALID: number;
				public static DBR_LICENSE_DLL_MISSING: number;
				public static DBR_LICENSEKEY_NOT_MATCHED: number;
				public static DBR_REQUESTED_FAILED: number;
				public static DBR_LICENSE_INIT_FAILED: number;
				public static DBR_PATCHCODE_LICENSE_INVALID: number;
				public static DBR_POSTALCODE_LICENSE_INVALID: number;
				public static DBR_DPM_LICENSE_INVALID: number;
				public static DBR_FRAME_DECODING_THREAD_EXISTS: number;
				public static DBR_STOP_DECODING_THREAD_FAILED: number;
				public static DBR_SET_MODE_ARGUMENT_ERROR: number;
				public static DBR_LICENSE_CONTENT_INVALID: number;
				public static DBR_LICENSE_KEY_INVALID: number;
				public static DBR_LICENSE_DEVICE_RUNS_OUT: number;
				public static DBR_GET_MODE_ARGUMENT_ERROR: number;
				public static DBR_IRT_LICENSE_INVALID: number;
				public static DBR_MAXICODE_LICENSE_INVALID: number;
				public static DBR_GS1_DATABAR_LICENSE_INVALID: number;
				public static DBR_GS1_COMPOSITE_LICENSE_INVALID: number;
				public static DBR_PANORAMA_LICENSE_INVALID: number;
				public static DBR_DOTCODE_LICENSE_INVALID: number;
				public static DBR_PHARMACODE_LICENSE_INVALID: number;
				public static DBRERR_IMAGE_ORIENTATION_INVALID: number;
				public static DBRERR_DIRECTORY_INVALID: number;
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
				public static DM_FAILED_TO_REACH_LTS: number;
				public static DM_FAILED_TO_REACH_DLS: number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dbr {
			export class EnumGrayscaleTransformationMode {
				public static class: java.lang.Class<com.dynamsoft.dbr.EnumGrayscaleTransformationMode>;
				public static GTM_INVERTED: number;
				public static GTM_ORIGINAL: number;
				public static GTM_SKIP: number;
				public static GTM_REV: number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dbr {
			export class EnumIMResultDataType {
				public static class: java.lang.Class<com.dynamsoft.dbr.EnumIMResultDataType>;
				public static IMRDT_IMAGE: number;
				public static IMRDT_CONTOUR: number;
				public static IMRDT_LINESEGMENT: number;
				public static IMRDT_LOCALIZATIONRESULT: number;
				public static IMRDT_REGIONOFINTEREST: number;
				public static IMRDT_QUADRILATERAL: number;
				public static IMRDT_REFERENCE: number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dbr {
			export class EnumImagePixelFormat {
				public static class: java.lang.Class<com.dynamsoft.dbr.EnumImagePixelFormat>;
				public static IPF_BINARY: number;
				public static IPF_BINARYINVERTED: number;
				public static IPF_GRAYSCALED: number;
				public static IPF_NV21: number;
				public static IPF_RGB_565: number;
				public static IPF_RGB_555: number;
				public static IPF_RGB_888: number;
				public static IPF_ARGB_8888: number;
				public static IPF_RGB_161616: number;
				public static IPF_ARGB_16161616: number;
				public static IPF_ABGR_8888: number;
				public static IPF_ABGR_16161616: number;
				public static IPF_BGR_888: number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dbr {
			export class EnumImagePreprocessingMode {
				public static class: java.lang.Class<com.dynamsoft.dbr.EnumImagePreprocessingMode>;
				public static IPM_GENERAL: number;
				public static IPM_AUTO: number;
				public static IPM_GRAY_EQUALIZE: number;
				public static IPM_GRAY_SMOOTH: number;
				public static IPM_SHARPEN_SMOOTH: number;
				public static IPM_MORPHOLOGY: number;
				public static IPM_SKIP: number;
				public static IPM_REV: number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dbr {
			export class EnumIntermediateResultSavingMode {
				public static class: java.lang.Class<com.dynamsoft.dbr.EnumIntermediateResultSavingMode>;
				public static IRSM_MEMORY: number;
				public static IRSM_FILESYSTEM: number;
				public static IRSM_BOTH: number;
				public static IRSM_REFERENCE_MEMORY: number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dbr {
			export class EnumIntermediateResultType {
				public static class: java.lang.Class<com.dynamsoft.dbr.EnumIntermediateResultType>;
				public static IRT_NO_RESULT: number;
				public static IRT_ORIGINAL_IMAGE: number;
				public static IRT_COLOUR_CLUSTERED_IMAGE: number;
				public static IRT_COLOUR_CONVERTED_GRAYSCALE_IMAGE: number;
				public static IRT_TRANSFORMED_GRAYSCALE_IMAGE: number;
				public static IRT_PREDETECTED_REGION: number;
				public static IRT_PREPROCESSED_IMAGE: number;
				public static IRT_BINARIZED_IMAGE: number;
				public static IRT_TEXT_ZONE: number;
				public static IRT_CONTOUR: number;
				public static IRT_LINE_SEGMENT: number;
				public static IRT_FORM: number;
				public static IRT_SEGMENTATION_BLOCK: number;
				public static IRT_TYPED_BARCODE_ZONE: number;
				public static IRT_PREDETECTED_QUADRILATERAL: number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dbr {
			export class EnumLocalizationMode {
				public static class: java.lang.Class<com.dynamsoft.dbr.EnumLocalizationMode>;
				public static LM_AUTO: number;
				public static LM_CONNECTED_BLOCKS: number;
				public static LM_STATISTICS: number;
				public static LM_LINES: number;
				public static LM_SCAN_DIRECTLY: number;
				public static LM_STATISTICS_MARKS: number;
				public static LM_STATISTICS_POSTAL_CODE: number;
				public static LM_CENTRE: number;
				public static LM_ONED_FAST_SCAN: number;
				public static LM_SKIP: number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dbr {
			export class EnumLogMode {
				public static class: java.lang.Class<com.dynamsoft.dbr.EnumLogMode>;
				public static LGM_OFF: number;
				public static LGM_IMAGE: number;
				public static LGM_TEXT: number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dbr {
			export class EnumPDFReadingMode {
				public static class: java.lang.Class<com.dynamsoft.dbr.EnumPDFReadingMode>;
				public static PDFRM_AUTO: number;
				public static PDFRM_VECTOR: number;
				public static PDFRM_RASTER: number;
				public static PDFRM_REV: number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dbr {
			export class EnumPresetTemplate {
				public static class: java.lang.Class<com.dynamsoft.dbr.EnumPresetTemplate>;
				public static DEFAULT: com.dynamsoft.dbr.EnumPresetTemplate;
				public static VIDEO_SINGLE_BARCODE: com.dynamsoft.dbr.EnumPresetTemplate;
				public static VIDEO_SPEED_FIRST: com.dynamsoft.dbr.EnumPresetTemplate;
				public static VIDEO_READ_RATE_FIRST: com.dynamsoft.dbr.EnumPresetTemplate;
				public static IMAGE_SPEED_FIRST: com.dynamsoft.dbr.EnumPresetTemplate;
				public static IMAGE_READ_RATE_FIRST: com.dynamsoft.dbr.EnumPresetTemplate;
				public static IMAGE_DEFAULT: com.dynamsoft.dbr.EnumPresetTemplate;
				public static fromValue(param0: number): com.dynamsoft.dbr.EnumPresetTemplate;
				public static valueOf(param0: string): com.dynamsoft.dbr.EnumPresetTemplate;
				public static values(): androidNative.Array<com.dynamsoft.dbr.EnumPresetTemplate>;
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dbr {
			export class EnumProduct {
				public static class: java.lang.Class<com.dynamsoft.dbr.EnumProduct>;
				public static PROD_DBR: number;
				public static PROD_DLR: number;
				public static PROD_DWT: number;
				public static PROD_DCE: number;
				public static PROD_DPS: number;
				public static PROD_ALL: number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dbr {
			export class EnumQRCodeErrorCorrectionLevel {
				public static class: java.lang.Class<com.dynamsoft.dbr.EnumQRCodeErrorCorrectionLevel>;
				public static QRECL_ERROR_CORRECTION_H: number;
				public static QRECL_ERROR_CORRECTION_L: number;
				public static QRECL_ERROR_CORRECTION_M: number;
				public static QRECL_ERROR_CORRECTION_Q: number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dbr {
			export class EnumRegionPredetectionMode {
				public static class: java.lang.Class<com.dynamsoft.dbr.EnumRegionPredetectionMode>;
				public static RPM_AUTO: number;
				public static RPM_GENERAL: number;
				public static RPM_GENERAL_RGB_CONTRAST: number;
				public static RPM_GENERAL_GRAY_CONTRAST: number;
				public static RPM_GENERAL_HSV_CONTRAST: number;
				public static RPM_SKIP: number;
				public static RPM_REV: number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dbr {
			export class EnumResultCoordinateType {
				public static class: java.lang.Class<com.dynamsoft.dbr.EnumResultCoordinateType>;
				public static RCT_PIXEL: number;
				public static RCT_PERCENTAGE: number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dbr {
			export class EnumResultType {
				public static class: java.lang.Class<com.dynamsoft.dbr.EnumResultType>;
				public static RT_STANDARDTEXT: number;
				public static RT_RAWTEXT: number;
				public static RT_CANDIDATETEXt: number;
				public static RT_PARTIALTEXT: number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dbr {
			export class EnumScaleUpMode {
				public static class: java.lang.Class<com.dynamsoft.dbr.EnumScaleUpMode>;
				public static SUM_AUTO: number;
				public static SUM_LINEAR_INTERPOLATION: number;
				public static SUM_NEAREST_NEIGHBOUR_INTERPOLATION: number;
				public static SUM_SKIP: number;
				public static SUM_REV: number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dbr {
			export class EnumTerminatePhase {
				public static class: java.lang.Class<com.dynamsoft.dbr.EnumTerminatePhase>;
				public static TP_REGION_PREDECTED: number;
				public static TP_IMAGE_PREPROCESSED: number;
				public static TP_IMAGE_BINARIZED: number;
				public static TP_BARCODE_LOCALIZED: number;
				public static TP_BARCODE_TYPE_DETERMINED: number;
				public static TP_BARCODE_RECOGNIZED: number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dbr {
			export class EnumTextAssistedCorrectionMode {
				public static class: java.lang.Class<com.dynamsoft.dbr.EnumTextAssistedCorrectionMode>;
				public static TACM_AUTO: number;
				public static TACM_VERIFYING: number;
				public static TACM_VERIFYING_PATCHING: number;
				public static TACM_SKIP: number;
				public static TACM_REV: number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dbr {
			export class EnumTextFilterMode {
				public static class: java.lang.Class<com.dynamsoft.dbr.EnumTextFilterMode>;
				public static TFM_AUTO: number;
				public static TFM_GENERAL_CONTOUR: number;
				public static TFM_SKIP: number;
				public static TFM_REV: number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dbr {
			export class EnumTextResultOrderMode {
				public static class: java.lang.Class<com.dynamsoft.dbr.EnumTextResultOrderMode>;
				public static TROM_CONFIDENCE: number;
				public static TROM_POSITION: number;
				public static TROM_FORMAT: number;
				public static TROM_SKIP: number;
				public static TROM_REV: number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dbr {
			export class EnumTextureDetectionMode {
				public static class: java.lang.Class<com.dynamsoft.dbr.EnumTextureDetectionMode>;
				public static TDM_AUTO: number;
				public static TDM_GENERAL_WIDTH_CONCENTRATION: number;
				public static TDM_SKIP: number;
				public static TDM_REV: number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dbr {
			export class ExtendedResult {
				public static class: java.lang.Class<com.dynamsoft.dbr.ExtendedResult>;
				public resultType: number;
				public barcodeFormat: number;
				public barcodeFormatString: string;
				public barcodeFormat_2: number;
				public barcodeFormatString_2: string;
				public confidence: number;
				public bytes: androidNative.Array<number>;
				public accompanyingTextBytes: androidNative.Array<number>;
				public deformation: number;
				public detailedResult: any;
				public samplingImage: com.dynamsoft.dbr.SamplingImageData;
				public clarity: number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dbr {
			export class FurtherModes {
				public static class: java.lang.Class<com.dynamsoft.dbr.FurtherModes>;
				public colourClusteringModes: androidNative.Array<number>;
				public colourConversionModes: androidNative.Array<number>;
				public grayscaleTransformationModes: androidNative.Array<number>;
				public regionPredetectionModes: androidNative.Array<number>;
				public imagePreprocessingModes: androidNative.Array<number>;
				public textureDetectionModes: androidNative.Array<number>;
				public textFilterModes: androidNative.Array<number>;
				public textAssistedCorrectionMode: number;
				public dpmCodeReadingModes: androidNative.Array<number>;
				public deformationResistingModes: androidNative.Array<number>;
				public barcodeComplementModes: androidNative.Array<number>;
				public barcodeColourModes: androidNative.Array<number>;
				public accompanyingTextRecognitionModes: androidNative.Array<number>;
				public constructor();
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dbr {
			export class IRTInnerCallback {
				public static class: java.lang.Class<com.dynamsoft.dbr.IRTInnerCallback>;
				/**
				 * Constructs a new instance of the com.dynamsoft.dbr.IRTInnerCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					IRTInnerCallback(param0: number, param1: com.dynamsoft.dbr.IRTInnerResult, param2: any): void;
				});
				public constructor();
				public IRTInnerCallback(param0: number, param1: com.dynamsoft.dbr.IRTInnerResult, param2: any): void;
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dbr {
			export class IRTInnerResult {
				public static class: java.lang.Class<com.dynamsoft.dbr.IRTInnerResult>;
				public irtResults: androidNative.Array<com.dynamsoft.dbr.IntermediateResult>;
				public inner: androidNative.Array<number>;
				public stamp: number;
				public ifNeedSend: boolean;
				public constructor();
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dbr {
			export class ImageData {
				public static class: java.lang.Class<com.dynamsoft.dbr.ImageData>;
				public bytes: androidNative.Array<number>;
				public width: number;
				public height: number;
				public stride: number;
				public format: number;
				public orientation: number;
				public toBitmap(): globalAndroid.graphics.Bitmap;
				public constructor();
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dbr {
			export class ImageSource {
				public static class: java.lang.Class<com.dynamsoft.dbr.ImageSource>;
				/**
				 * Constructs a new instance of the com.dynamsoft.dbr.ImageSource interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getImage(): com.dynamsoft.dbr.ImageData;
				});
				public constructor();
				public getImage(): com.dynamsoft.dbr.ImageData;
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dbr {
			export class ImageUtil {
				public static class: java.lang.Class<com.dynamsoft.dbr.ImageUtil>;
				public static ImgToBitmap(param0: com.dynamsoft.dbr.ImageData): globalAndroid.graphics.Bitmap;
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dbr {
			export class InnerCallback {
				public static class: java.lang.Class<com.dynamsoft.dbr.InnerCallback>;
				/**
				 * Constructs a new instance of the com.dynamsoft.dbr.InnerCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					innerCallback(param0: number, param1: com.dynamsoft.dbr.InnerResult, param2: any): void;
				});
				public constructor();
				public innerCallback(param0: number, param1: com.dynamsoft.dbr.InnerResult, param2: any): void;
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dbr {
			export class InnerResult {
				public static class: java.lang.Class<com.dynamsoft.dbr.InnerResult>;
				public textResults: androidNative.Array<com.dynamsoft.dbr.TextResult>;
				public inner: androidNative.Array<number>;
				public stamp: number;
				public ifNeedSend: boolean;
				public constructor();
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dbr {
			export class IntermediateResult {
				public static class: java.lang.Class<com.dynamsoft.dbr.IntermediateResult>;
				public dataType: number;
				public results: androidNative.Array<any>;
				public resultType: number;
				public barcodeComplementMode: number;
				public bcmIndex: number;
				public deformationResistingMode: number;
				public drmIndex: number;
				public dpmCodeReadingMode: number;
				public dpmcrmIndex: number;
				public rotationMatrix: androidNative.Array<number>;
				public textFilterMode: number;
				public tfmIndex: number;
				public localizationMode: number;
				public lmIndex: number;
				public binarizationMode: number;
				public bmIndex: number;
				public imagePreprocessingMode: number;
				public ipmIndex: number;
				public roiId: number;
				public regionPredetectionMode: number;
				public rpmIndex: number;
				public grayscaleTransformationMode: number;
				public gtmIndex: number;
				public colourConversionMode: number;
				public cicmIndex: number;
				public colourClusteringMode: number;
				public ccmIndex: number;
				public scaleDownRatio: number;
				public frameId: number;
				public rpmColourArgumentIndex: number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dbr {
			export class IntermediateResultCallback {
				public static class: java.lang.Class<com.dynamsoft.dbr.IntermediateResultCallback>;
				/**
				 * Constructs a new instance of the com.dynamsoft.dbr.IntermediateResultCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					intermediateResultCallback(param0: number, param1: androidNative.Array<com.dynamsoft.dbr.IntermediateResult>, param2: any): void;
				});
				public constructor();
				public intermediateResultCallback(param0: number, param1: androidNative.Array<com.dynamsoft.dbr.IntermediateResult>, param2: any): void;
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dbr {
			export class IntermediateResultListener {
				public static class: java.lang.Class<com.dynamsoft.dbr.IntermediateResultListener>;
				/**
				 * Constructs a new instance of the com.dynamsoft.dbr.IntermediateResultListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					intermediateResultCallback(param0: number, param1: com.dynamsoft.dbr.ImageData, param2: androidNative.Array<com.dynamsoft.dbr.IntermediateResult>): void;
				});
				public constructor();
				public intermediateResultCallback(param0: number, param1: com.dynamsoft.dbr.ImageData, param2: androidNative.Array<com.dynamsoft.dbr.IntermediateResult>): void;
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dbr {
			export class LineSegment {
				public static class: java.lang.Class<com.dynamsoft.dbr.LineSegment>;
				public startPoint: com.dynamsoft.dbr.Point;
				public endPoint: com.dynamsoft.dbr.Point;
				public linesConfidenceCoefficients: androidNative.Array<number>;
				public constructor();
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dbr {
			export class LocalizationResult {
				public static class: java.lang.Class<com.dynamsoft.dbr.LocalizationResult>;
				public terminatePhase: number;
				public barcodeFormat: number;
				public barcodeFormatString: string;
				public barcodeFormat_2: number;
				public barcodeFormatString_2: string;
				public resultPoints: androidNative.Array<com.dynamsoft.dbr.Point>;
				public angle: number;
				public moduleSize: number;
				public pageNumber: number;
				public regionName: string;
				public documentName: string;
				public resultCoordinateType: number;
				public accompanyingTextBytes: androidNative.Array<number>;
				public confidence: number;
				public transformationMatrix: globalAndroid.graphics.Matrix;
				public constructor();
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dbr {
			export class OneDCodeDetails {
				public static class: java.lang.Class<com.dynamsoft.dbr.OneDCodeDetails>;
				public moduleSize: number;
				public startCharsBytes: androidNative.Array<number>;
				public stopCharsBytes: androidNative.Array<number>;
				public checkDigitBytes: androidNative.Array<number>;
				public startPatternRange: androidNative.Array<number>;
				public middlePatternRange: androidNative.Array<number>;
				public endPatternRange: androidNative.Array<number>;
				public constructor();
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dbr {
			export class PDF417Details {
				public static class: java.lang.Class<com.dynamsoft.dbr.PDF417Details>;
				public moduleSize: number;
				public rows: number;
				public columns: number;
				public errorCorrectionLevel: number;
				public hasLeftRowIndicator: number;
				public hasRightRowIndicator: number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dbr {
			export class Point {
				public static class: java.lang.Class<com.dynamsoft.dbr.Point>;
				public x: number;
				public y: number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dbr {
			export class PublicRuntimeSettings {
				public static class: java.lang.Class<com.dynamsoft.dbr.PublicRuntimeSettings>;
				public terminatePhase: number;
				public timeout: number;
				public maxAlgorithmThreadCount: number;
				public expectedBarcodesCount: number;
				public barcodeFormatIds: number;
				public barcodeFormatIds_2: number;
				public pdfRasterDPI: number;
				public scaleDownThreshold: number;
				public binarizationModes: androidNative.Array<number>;
				public localizationModes: androidNative.Array<number>;
				public furtherModes: com.dynamsoft.dbr.FurtherModes;
				public deblurLevel: number;
				public intermediateResultSavingMode: number;
				public intermediateResultTypes: number;
				public resultCoordinateType: number;
				public textResultOrderModes: androidNative.Array<number>;
				public region: com.dynamsoft.dbr.RegionDefinition;
				public minBarcodeTextLength: number;
				public minResultConfidence: number;
				public returnBarcodeZoneClarity: number;
				public scaleUpModes: androidNative.Array<number>;
				public pdfReadingMode: number;
				public deblurModes: androidNative.Array<number>;
				public barcodeZoneMinDistanceToImageBorders: number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dbr {
			export class QRCodeDetails {
				public static class: java.lang.Class<com.dynamsoft.dbr.QRCodeDetails>;
				public moduleSize: number;
				public rows: number;
				public columns: number;
				public errorCorrectionLevel: number;
				public version: number;
				public model: number;
				public mode: number;
				public page: number;
				public totalPage: number;
				public parityData: number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dbr {
			export class Quadrilateral {
				public static class: java.lang.Class<com.dynamsoft.dbr.Quadrilateral>;
				public points: androidNative.Array<com.dynamsoft.dbr.Point>;
				public constructor();
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dbr {
			export class RegionDefinition {
				public static class: java.lang.Class<com.dynamsoft.dbr.RegionDefinition>;
				public regionTop: number;
				public regionLeft: number;
				public regionRight: number;
				public regionBottom: number;
				public regionMeasuredByPercentage: number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dbr {
			export class RegionOfInterest {
				public static class: java.lang.Class<com.dynamsoft.dbr.RegionOfInterest>;
				public roiId: number;
				public point: com.dynamsoft.dbr.Point;
				public width: number;
				public height: number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dbr {
			export class SamplingImageData {
				public static class: java.lang.Class<com.dynamsoft.dbr.SamplingImageData>;
				public bytes: androidNative.Array<number>;
				public width: number;
				public height: number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dbr {
			export class TextResult {
				public static class: java.lang.Class<com.dynamsoft.dbr.TextResult>;
				public barcodeFormat: number;
				public barcodeFormatString: string;
				public barcodeText: string;
				public barcodeFormat_2: number;
				public barcodeFormatString_2: string;
				public barcodeBytes: androidNative.Array<number>;
				public localizationResult: com.dynamsoft.dbr.LocalizationResult;
				public detailedResult: any;
				public results: androidNative.Array<com.dynamsoft.dbr.ExtendedResult>;
				public exception: string;
				public isMirrored: number;
				public isDPM: number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dbr {
			export class TextResultCallback {
				public static class: java.lang.Class<com.dynamsoft.dbr.TextResultCallback>;
				/**
				 * Constructs a new instance of the com.dynamsoft.dbr.TextResultCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					textResultCallback(param0: number, param1: androidNative.Array<com.dynamsoft.dbr.TextResult>, param2: any): void;
				});
				public constructor();
				public textResultCallback(param0: number, param1: androidNative.Array<com.dynamsoft.dbr.TextResult>, param2: any): void;
			}
		}
	}
}

declare module com {
	export module dynamsoft {
		export module dbr {
			export class TextResultListener {
				public static class: java.lang.Class<com.dynamsoft.dbr.TextResultListener>;
				/**
				 * Constructs a new instance of the com.dynamsoft.dbr.TextResultListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					textResultCallback(param0: number, param1: com.dynamsoft.dbr.ImageData, param2: androidNative.Array<com.dynamsoft.dbr.TextResult>): void;
				});
				public constructor();
				public textResultCallback(param0: number, param1: com.dynamsoft.dbr.ImageData, param2: androidNative.Array<com.dynamsoft.dbr.TextResult>): void;
			}
		}
	}
}

//Generics information:

