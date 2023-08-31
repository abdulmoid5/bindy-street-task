# Bindy Street Task

## contents

- [Setup](#setup)
- [Useful Links](#useful-links)
- [Workflow](#workflow)
- [Code guidelines](#code-guidelines)
- [Directory layout](#Directory-layout)
- [State management](#state-management)
- [Environments](#environments)
- [E2E testing](#e2e-testing)
- [CI / CD](#ci-/-cd)
- [Theme & style composition](#theme-&-style-composition)
- [Adding native code](#adding-native-code)
- [Useful Commands](#useful-commands)

## setup

### environment

````

 ### MacOS

 Install the [latest version of XCode](https://developer.apple.com/xcode/).

### Linux

1. Install system dependencies:

   ```shell
   sudo apt install libsecret-tools watchman
````

2. Follow the [React Native environment setup
   instructions](https://reactnative.dev/docs/environment-setup) carefully,
   which will involve installing Android Studio, the Android SDK, the emulator,
   etc. and making them available in your `$PATH`.

3. Ensure at least one [AVD
   image](https://developer.android.com/studio/run/managing-avds) is available
   for the emulator (unless using a physical device).

## developing

If you are new to React Native, this is a helpful introduction:
https://facebook.github.io/react-native/docs/getting-started.html

### MacOS

_Note: Darwin versions of the application can only be developed/built on Darwin
platforms with XCode._

1. Start a React Native webserver with:

```shell
 npm start
```

2. Install ios dependency

```shell
 cd ios/
 pod install
```

3. Open `ProjectX/ios/bindy_street_task.xcworkspace` in XCode.

4. Run the project by clicking the play button.

### Linux

_Note: Linux development environments cannot develop or build Darwin versions of the
project._

1. Start a React Native webserver with:

```shell
 npm start
```

2. Build/install/start the debug version of the app in an emulator with:

```shell
  npm run android
```

## how to run

- `npm install` - install modules
- `react-native start` - run Dev Server
- `react-native run-ios --simulator="iPhone 14 Pro"` - run on Simulator

## code guidelines

The general idea is that: code is written once, but read & changed many more times. This is why we want to ensure that it will be read and understood easily, in the most efficient way possible.

#### kiss (Keep it super simple)

Always start with the easiest / most stright-forward approach, and ramp up complexity from there if needed. Don't hesitate to comment code if complexity arises.

#### explicit vs smart

Be Explicit & Verbose rather than too smart (unecessarily complex) & too concise (unecessarily short) Don't hesitate to comment code where things might need any clarification.

#### naming

Take the time needed to think carefully to name any component, function or variable. Do not hesitate to be explicit and verbose if needed. Names should make sense and be easily recognizable.
Follow the naming convention of what is currently on the codebase. There is no clear written convention yet, but the codebase should be consistent enough to provide this (for now).

A few examples:

- Component and types are in PascalCase
- variables and functions are in camelCase
- constants are in UPPER_SNAKE_CASE
- string literal props are in kebab-case

## Directory layout

```bash

├── .husky                 # rules regaring pre commit hooks such as linting
├── App.js                # The root component of the app. Contains all global providers
├── README.md
├── android/               # The android project folder
├── app.config.js          # The dynamic expo configuration based on the current environment
├── app.json               # The base expo configuration
├── assets/                # Folder containing all static assets
├── babel.config.js        # Config file for the babel javascript compiler
├──
├── detox.config.js        # e2e detox's configuration file
├── e2e/
├── icons/
├── index.js               # The entry point of the app
├── ios/                   # The ios project folder
├── lint-staged.config.js  # linting configuration for pre-commit hooks
├── metro.config.js        # Configuration for metro bundler
├── package.json           # Contains all scripts & dependencies
├── patches/               # Contains all dependency patches via patch-package
├── scripts/               # misc script files, not used in the app itself
├── src/
│   ├── components/        # Contains all re-usable react components,
│   │   └── ...
│   ├── navigation/        # Contains all navigator files, which contains screens
│   ├── screens/           # Contains all screen files but also smaller navigators
│   ├── services/          # Every service handling external data
│   ├── theme/
│   └── types/
└──
```

## state management

To be completed

## internal state

To be completed

## api state

### status codes

| Status Code | Description             |
| ----------- | ----------------------- |
| 200         | `ok`                    |
| 201         | `created`               |
| 400         | `BAD REQUEST`           |
| 404         | `NOT FOUND`             |
| 500         | `INTERNAL SERVER ERROR` |

## environents

To be completed

## unit testing

## e2e testing

### how to test

Testing the app is done using Detox.

1. Make sure Detox cli is installed on your device.
   npm i -g detox

2. You'll need applesimutils installed on your machine to run iOS tests.

3. Make sure you have ANDROID_HOME and JAVA_HOME set in your PATH env variable.

4. The .e2e.env contains the following env variables, with example values provided:

ANDROID_AVD_NAME="Pixel_3_API_R"
IPHONE_MODEL="iPhone 11"

5. Run the test command

Detox will need to run build a specific version of your app in order to run tests on it.
/!\ You cannot run e2e tests on the app without first having built a specific version (so it will not work if you just launched the app with yarn ios or yarn android)

There are multiple test commands that are available, and that depends on which environment you decide to run tests on.
Please refer to the following commands in package.json. To build test versions of the app, you can run any of these build commands:

## deployment

### ios

### creating a build to deploy to TestFlight

### prerequisites

1. Make sure you have the app running and working properly on simulator without any errors before creating a build.

2. Set the code signing under Signing & Capabilities> Signing set to Automatically manage signing or import your provisioning profile set the development team.

3. You can also login in to the development team from Xcode>Preferences>Accounts to make it simpler.

4. Add the bundle Identifier for example popupclass.com.au

5. Make sure you carry out these steps for all targets present in the list of Targets on the left hand side on your Xcode.

6. Also make sure the bundle identifier is different for each one to not cause any conflicts.

7. Increment the build or version under General

8. From the top under Product clean the build folder once again.

9. Set the device to generic iOS device

### archiving the build

1. Click Archive and wait for Xcode to process the files. If you are using automatic signing Xcode will ask for Keychain access throughout the process.

2. You can either set to Allow each time or enter the keychain password every time asked.

3. Once the app is successfully archived a new window will open allowing the user either to validate the app or to Distribute the app.

4. Clicking Distribute the app will go through a few steps to connect your Xcode to App Store connect make sure you are using correct Bundle identifier and Code Signing is done properly.

### distributing the build

1. Once these processes are complete a window will pop open showing the app name the version/ build and a few other details you can click finish or upload to finish the process.

2. Your app will appear under the the testflight on appstore connect.

3. Remember the app will appear only under the specific app you used the bundle identifier of.

4. It will take a certain time to process and you can distribute the app accordingly.

5. If you get an email stating compliance issues. You need to accept terms and conditions under test flight on that build in order to finish the process.

### android

### prerequisites

1. Make sure you have the app running and working properly on emulator without any errors before creating a build.

2. Make sure you have access to the playstore console.

3. Make sure all Kotlin packages are updated with the latest version of android studio.

4. Add the app bundle for example projectx.com.au.

5. Make sure you carry out these steps for all targets present in the list of Targets on the left hand side on your Xcode.

6. Also make sure the app bundle is different for each one to not cause any conflicts.

7. Increment the build or version under app version on console.

8. From the top under Project clean the project folder once again.

9. Make sure all current processes are stopped before beginning a new task.

### generating the build

1. Click project>generate signed bundle apk and wait for android studio to start gradle and run the app.

2. Add the existing keystore path or add a new keystore path for a new app and add details (path, organisation, passwords).

3. Set on the popup window you either need a signed apk or an app bundle if looking to deploy it for alpha or beta testing then select app bundle.

4. Once the the gradle build is finished running and is successful.

5. Locate the generated the app bundle/ APK under you android/build/app folder, using the instruction popping up on the right corner.

### distributing the build

1. Create a new app on play console.

2. Drag and drop your created app bundle/ APK.

3. Add release notes to the build.

4. Make sure you have internal testing group present.

5. Click release process and it push the build to internal testing.

## ci/cd

tbc

## adding native code

tbc

## Useful Commands

- `npm install`
- `react-native run-ios --simulator="iPhone 12 Pro"`
- `react-native run-ios --device`
- `react-native run-android`
- `cd android; fastlane android playstore` : Send Build to Google Play Store Internal track
- `cd ios; fastlane beta` : Send Build to App Store

---
