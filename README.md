# App

### Description

This is the repository for the App

### Emulators

- [Android](https://developer.android.com/studio)
- [iOS](https://apps.apple.com/us/app/xcode/id497799835)

### How to run locally

### Android

1. Run the emulator following this [instructions](https://developer.android.com/studio/run/emulator#avd)
2. Run in the terminal `npm install`
3. Run in the terminal `npm run android`

### iOS

1. Run the emulator following this [instructions](https://docs.expo.dev/workflow/ios-simulator/)
2. Run in the terminal `npm install`
3. Run in the terminal `npm run ios`

### Debug

#### Reactotron

1. Download **Reactotron** from [here](https://github.com/infinitered/reactotron/blob/master/docs/installing.md)
2. Install it and open it
3. Run the app in the emulator or restart the emulator if it was already running
4. You will see the messages created with `console.tron.log`

#### DevTool

1. Go to the emulator and press `ctrl + m`
2. Select `Debug Remote JS`

### Build

1. We are using the CLI of Expo Application Services - **EAS**
2. Run in the terminal `npm install -g eas-cli`
3. Create an account in [Expo](https://expo.dev/)
4. Run in the terminal `eas login` and follow the instructions
5. To verify that you are logged in run in the terminal `eas whoami`
6. Configure the app running in the terminal `eas configure` and follow the instructions
7. Run in the terminal:

- Android: `npm run build:android`
- iOS: `npm run build:ios`

8. You will see the link to download the app in the terminal or you can go to [Expo](https://expo.dev/) and download it from there
