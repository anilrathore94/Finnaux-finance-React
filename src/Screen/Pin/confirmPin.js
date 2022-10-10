import React, { useEffect, useRef, useState } from "react";
import {
    View,
    Text,
    KeyboardAvoidingView,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
} from "react-native";
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from "react-native-confirmation-code-field";

// import SmailInput from "../../component/TextInput/SmailInput";
// import PinInput from "./../../component/TextInput/PinInput";
import LargeOutLineBtn from "../../component/Button/LargeOutLineBtn";

import LargefillBtn from "../../component/Button/LargefillBtn";
import MediumFillBtn from "../../component/Button/MiddumFillBtn";

import LargeTextInput from "../../component/TextInput/LargeTextInput";
import PasswordTextInput from "../../component/TextInput/PasswordTextInput";

// // import { Strings } from "../../component/TextStrings/Strings";
import { ColorsConstant } from "../../constants/Colors.constant";
// import { fontFamily } from "../../constants/font";

import { c, StyleConstants } from "../../constants/Style.constant";
import { screenHeight, screenWidth } from "../../constants/Sizes.constant";

import Toast from "react-native-toast-message";
import { get_new_pin } from "../../services/User";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loading from "../../component/loading";

function ConfirmPin(props) {
    const [value, setValue] = useState("");
    const [load, setLoad] = useState(false)
    
    
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [cell, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue
    });
    const CELL_COUNT = 4;
    let requestData = null;

  useEffect(()=>{
   // setEmail('anil')
  }),[];

  const otpFill = (e) => {
    setValue(e) 
   }

   const new_pin_method = async () => {
    let empId =await AsyncStorage.getItem("empId");
    let deviceId =await AsyncStorage.getItem("deviceId");

    let data = {
        "EmpId": empId,
        "Pin": value,
        "MobileDeviceId": deviceId,
        "Status": "OLD"
      
    }
    console.log("request data" , data)
    setLoad(true)
    let result = await get_new_pin(data)
    console.log('response Data===', result)

    if (result.CODE === 1) {
        setLoad(false) 
          AsyncStorage.setItem("token",result.Token); 
          AsyncStorage.setItem("name",result.FirstName); 
          AsyncStorage.setItem("ProfilePic",result.ProfilePic); 
          AsyncStorage.setItem("email",result.Email); 
          props.navigation.navigate("Home");

    } else {
        setLoad(false)
        Toast.show({ type: 'error', text1: result.MSG }) 
    }
}

   
    return (
        <View style={[StyleConstants.container]}>
            <View style={{flex:9,width:'100%'}}>
                <Image
                    style={{ width: 200, height: 100,margin:80 }} 
                    resizeMode={'contain'}
                    source={require("./../../asstes/image/logo.jpg")}
                />
                <Text
                    style={[
                        StyleConstants.TextBold,
                        {
                            alignSelf: "center",
                            letterSpacing: 1,
                            padding: 10,
                        },
                    ]}
                >
                    Enter Confirm Pin...!
                </Text>
                <CodeField
                                        ref={ref}
                                        {...cell}
                                        value={value}
                                        onChangeText={(e) => otpFill(e)}
                                        cellCount={CELL_COUNT}
                                        rootStyle={StyleConstants.codeFieldRoot}
                                        keyboardType="number-pad"
                                        textContentType="oneTimeCode"
                                        autoFocus={true}
                                        renderCell={({ index, symbol, isFocused }) => (
                                            <Text
                                                key={index}
                                                style={[StyleConstants.cell, isFocused && StyleConstants.focusCell]}
                                                onLayout={getCellOnLayoutHandler(index)}>
                                                {symbol || (isFocused ? <Cursor /> : null)}
                                            </Text>
                                        )}
                                    />

                <LargefillBtn label={"Submit"} onPress={()=>new_pin_method()}/> 
            </View>

            <View style={{flex:1}}>
            <View style={{flexDirection:'row',justifyContent:'center',marginTop:20}}>
                <Text style={[StyleConstants.textStyle,{}]}>Powered By.</Text>
                <Image style={{ marginLeft: 10, width: 20, height: 20 }}  source={require("./../../asstes/image/ic_icon.jpg")}  />
            </View>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // display:flex;
        flex: 1,
        alignItems: "center",
        // justifyContent: "center",
    }
    
});

export default ConfirmPin;