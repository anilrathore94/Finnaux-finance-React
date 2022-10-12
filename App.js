import React, { Component } from 'react';
import { View, Text,LogBox,YellowBox } from 'react-native';
import Routes from './src/navigation/Routes';
import Toast from 'react-native-toast-message';
 
// YellowBox.ignoreWarnings(['ViewPagerAndroid']);
// console.disableYellowBox=true;
// console.reportErrorsAsExceptions = false;
function App() {
  // Ignore log notification by message
// LogBox.ignoreLogs(['Warning: ...','new NativeEventEmitter']);
 
// //Ignore all log notifications 
// LogBox.ignoreAllLogs();
  return (
    <View style={{ flex: 1 }}>
     <Routes />
      <Toast  />    
    </View>
  );
}

export default App;
