module.exports = {
  message: 'NativeScript Plugins ~ made with โค๏ธ  Choose a command to start...',
  pageSize: 32,
  scripts: {
    default: 'nps-i',
    nx: {
      script: 'nx',
      description: 'Execute any command with the @nrwl/cli',
    },
    format: {
      script: 'nx format:write',
      description: 'Format source code of the entire workspace (auto-run on precommit hook)',
    },
    '๐ง': {
      script: `npx cowsay "NativeScript plugin demos make developers ๐"`,
      description: '_____________  Apps to demo plugins with  _____________',
    },
    // demos
    apps: {
      '...Vanilla...': {
        script: `npx cowsay "Nothing wrong with vanilla ๐ฆ"`,
        description: ` ๐ป Vanilla`,
      },
      demo: {
        clean: {
          script: 'nx run demo:clean',
          description: 'โ  Clean  ๐งน',
        },
        ios: {
          script: 'nx run demo:ios',
          description: 'โ  Run iOS  ๏ฃฟ',
        },
        android: {
          script: 'nx run demo:android',
          description: 'โ  Run Android  ๐ค',
        },
      },
      '...Angular...': {
        script: `npx cowsay "Test all the Angles!"`,
        description: ` ๐ป Angular`,
      },
      'demo-angular': {
        clean: {
          script: 'nx run demo-angular:clean',
          description: 'โ  Clean  ๐งน',
        },
        ios: {
          script: 'nx run demo-angular:ios',
          description: 'โ  Run iOS  ๏ฃฟ',
        },
        android: {
          script: 'nx run demo-angular:android',
          description: 'โ  Run Android  ๐ค',
        },
      },
    },
    'โ๏ธ': {
      script: `npx cowsay "@xulihang/* packages will keep your โ๏ธ cranking"`,
      description: '_____________  @xulihang/*  _____________',
    },
    // packages
    // build output is always in dist/packages
    '@xulihang': {
      // nativescript-dynamsoft-camera-enhancer
			'nativescript-dynamsoft-camera-enhancer': {
				build: {
					script: 'nx run nativescript-dynamsoft-camera-enhancer:build.all',
					description: 'nativescript-dynamsoft-camera-enhancer: Build',
				},
			},
			// nativescript-dynamsoft-barcode-reader
			'nativescript-dynamsoft-barcode-reader': {
				build: {
					script: 'nx run nativescript-dynamsoft-barcode-reader:build.all',
					description: 'nativescript-dynamsoft-barcode-reader: Build',
				},
			},
			'build-all': {
        script: 'nx run-many --target=build.all --all',
        description: 'Build all packages',
      },
    },
    'โก': {
      script: `npx cowsay "Focus only on source you care about for efficiency โก"`,
      description: '_____________  Focus (VS Code supported)  _____________',
    },
    focus: {
      'nativescript-dynamsoft-camera-enhancer': {
				script: 'nx run nativescript-dynamsoft-camera-enhancer:focus',
				description: 'Focus on nativescript-dynamsoft-camera-enhancer',
			},
			'nativescript-dynamsoft-barcode-reader': {
				script: 'nx run nativescript-dynamsoft-barcode-reader:focus',
				description: 'Focus on nativescript-dynamsoft-barcode-reader',
			},
			reset: {
        script: 'nx g @xulihang/plugin-tools:focus-packages',
        description: 'Reset Focus',
      },
    },
    '.....................': {
      script: `npx cowsay "That's all for now folks ~"`,
      description: '.....................',
    },
  },
};
