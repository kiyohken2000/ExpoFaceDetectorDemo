# Expo Face Detector Demo

## Require

- Expo account
- expo-cli
- eas-cli
- yarn

## Install

```
yarn install
```

## Usage

1. Login your Expo account
1. EAS build
1. Install APK or IPA on your real device

## Run

```
yarn start
```

### Commands

```
// build: develop
eas build --profile development --platform ios
eas build --profile development --platform android

// build: internal
eas build --profile preview --platform ios
eas build --profile preview --platform android

// build: production
eas build --profile production --platform ios
eas build --profile production --platform android

// OTA update
expo publish --release-channel internal
expo publish --release-channel production

// iOS: Setting up ad hoc provisioning
eas device:create
// list all registered devices for your account
eas device:list
```