import { NativeScriptConfig } from '@nativescript/core';
//org.nativescript.plugindemo
//com.xulihang.nativescript
export default {
	id: 'org.nativescript.plugindemo',
	appResourcesPath: '../../tools/assets/App_Resources',
	android: {
		v8Flags: '--expose_gc',
		markingMode: 'none',
	},
	appPath: 'src',
  cli: {
    packageManager: 'npm'
  }
} as NativeScriptConfig;
