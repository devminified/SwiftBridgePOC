# SwiftBridgePOC

This project demonstrates integrating a SwiftUI view into a React Native application using a bridging mechanism. The bridge allows custom Swift views to be rendered seamlessly within the React Native framework.

# Features

SwiftUI Integration: Displays a SwiftUI view (SwiftView) within a React Native application.
React Native Bridge: Uses a custom ViewManager for communication between React Native and SwiftUI.

# Prerequisites

Ensure the following tools are installed on your system before proceeding:
- Xcode: Version 14 or later
- React Native: Version 0.76.3 or later recommended
- Node.js and yarn
- CocoaPods: Version 1.16.2 or later (install via sudo gem install cocoapods)

Verify the installation versions using:

- node --version
- yarn --version
- pod --version

# Installation

Follow these steps to set up and run the project:

- cd SwiftBridgePOC

Install JavaScript dependencies:
- yarn install

Install iOS dependencies:
- cd ios pod install

Run the application on iOS:
- npx react-native run-ios

# Project Structure

SwiftView.swift: A custom SwiftUI view displayed in the React Native app.
SwiftViewManager.swift: Manages the SwiftUI view and bridges it to React Native using UIHostingController.
SwiftViewManager.m: Exposes the Swift view to React Native through the RCT_EXTERN_MODULE.
Usage
Once the application is set up and running, the SwiftView will be rendered, showing:

- Text: "Swift View Bridge POC" with a blue background and white text.
You can modify the SwiftView.swift file to customize the content displayed by the SwiftUI view.

# Troubleshooting

CocoaPods Issues:
If you encounter issues with CocoaPods, ensure you have the correct version installed and update it if needed:

- sudo gem install cocoapods  
- pod install repo update  

React Native Build Issues:
If you face errors while running the React Native app, reset your environment:



- cd ios pod install --repo-update cd ..
- yarn start --reset-cache
- npx react-native run-ios


<img width="489" alt="Screenshot 2024-12-04 at 5 16 17 PM" src="https://github.com/user-attachments/assets/8a857913-7984-4c65-8dd9-861ca4c1e7b5">

