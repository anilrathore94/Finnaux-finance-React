
import * as React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import Splash from '../Screen/Splash';
import Login from '../Screen/Login'; 
import newPin from '../Screen/Pin/newPin'; 
import ConfirmPin from '../Screen/Pin/confirmPin';
import IsExist from '../Screen/IsExist';   
import Home from "../Screen/Home";
const  Stack = createNativeStackNavigator(),
    PromoStack = props => {
        let initialRoute = 'SplashScreen'
        return <Stack.Navigator screenOptions={{
            headerShown: false
        }} presentation="card" initialRouteName={initialRoute} {...props}>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Login" component={Login} />  
            <Stack.Screen name="IsExist" component={IsExist} />  
            <Stack.Screen name="newPin" component={newPin} />  
            <Stack.Screen name="ConfirmPin" component={ConfirmPin} />  
            <Stack.Screen name="Home" component={Home} />
             
            </Stack.Navigator>
    }
    
     

export default function Router() {
    let ref = React.useRef(null),
        linking = {
            prefixes: ['google.com', 'google.com'],
            config: {
                screens: {
                    Home: 'feed/:sort'
                }
            }
        }
    let initialScreen = 'Promo'
    return <NavigationContainer ref={ref} linking={linking} fallback={<Text>Loading...</Text>}>
        <Stack.Navigator screenOptions={{
            headerShown: false
        }} initialRouteName={initialScreen}>
            {/* <Stack.Screen name="Drawers" component={Drawers} options={{ headerShown: false }} /> */}
            <Stack.Screen name="Promo" component={PromoStack} options={{ headerShown: false }} />
        </Stack.Navigator>
    </NavigationContainer>
}

