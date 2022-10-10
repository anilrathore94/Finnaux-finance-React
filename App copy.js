import React, { Component } from 'react';
import { View, Text,LogBox,YellowBox } from 'react-native';
import Routes from './src/navigation/Routes';
import Toast from 'react-native-toast-message';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
YellowBox.ignoreWarnings(['ViewPagerAndroid']);
console.disableYellowBox=true;
console.reportErrorsAsExceptions = false;
function App() {
  // Ignore log notification by message
LogBox.ignoreLogs(['Warning: ...','new NativeEventEmitter']);
 
// //Ignore all log notifications 
LogBox.ignoreAllLogs();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
     <Routes />
      <Toast  />  
    </GestureHandlerRootView>
  );
}

export default App;
