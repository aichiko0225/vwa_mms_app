# VWA MMS App

VWA MMS App is a mobile management system application built with React Native. It provides a comprehensive solution for managing tasks, messages, and user profiles in a mobile environment.

## Features

- **Authentication**: Secure login functionality.
- **Dashboard**: Overview of key metrics and activities.
- **Task Management**: View and manage tasks efficiently.
- **Messaging**: Integrated messaging system for communication.
- **User Profile**: Manage user settings and information.
- **Webview Integration**: Seamless integration of web content.

## Tech Stack

- **Core**: [React Native](https://reactnative.dev/) (v0.82.1)
- **Navigation**: [React Navigation](https://reactnavigation.org/) (v7)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **UI Components**: [React Native Paper](https://callstack.github.io/react-native-paper/)
- **Networking**: [Axios](https://axios-http.com/)
- **Forms**: [React Hook Form](https://react-hook-form.com/)
- **Icons**: [Material Design Icons](https://materialdesignicons.com/)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: >= 20
- **Package Manager**: npm or yarn
- **Development Environment**:
    - **Android**: Android Studio with JDK 17+
    - **iOS**: Xcode (macOS only) and CocoaPods

## Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd vwa_mms_app
   ```

2. **Install dependencies:**

   ```bash
   # Using npm
   npm install

   # OR using Yarn
   yarn install
   ```

3. **Install iOS dependencies (macOS only):**

   ```bash
   cd ios
   bundle install
   bundle exec pod install
   cd ..
   ```

## Running the App

### Start the Metro Server

First, start the Metro JavaScript bundler:

```bash
npm start
# OR
yarn start
```

### Run on Android

```bash
npm run android
# OR
yarn android
```

### Run on iOS (macOS only)

```bash
npm run ios
# OR
yarn ios
```

## Project Structure

The project follows a structured organization within the `src` directory:

- `src/pages`: Application screens (Home, Login, Tasks, Messages, etc.).
- `src/navigation`: Navigation configuration (RootNavigator, etc.).
- `src/components`: Reusable UI components.
- `src/services`: API services and business logic (Auth, User, System).
- `src/stores`: Global state management stores (Zustand).
- `src/hooks`: Custom React hooks.
- `src/assets`: Static assets like images and fonts.
- `src/common`: Common utilities and constants.
- `src/types`: TypeScript type definitions.

## Scripts

- `npm start`: Starts the Metro bundler.
- `npm run android`: Builds and runs the app on Android.
- `npm run ios`: Builds and runs the app on iOS.
- `npm run lint`: Runs ESLint to check for code quality issues.
- `npm test`: Runs Jest tests.
