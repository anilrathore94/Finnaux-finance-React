import React, { useEffect, useRef, useState } from "react";
import {
    View,
    Text,
    KeyboardAvoidingView,
    StyleSheet,
    ScrollView,
    Image,Modal,
    TouchableOpacity,
} from "react-native";
// import SmailInput from "../../component/TextInput/SmailInput"; 
// import PinInput from "./../../component/TextInput/PinInput";

import LargeOutLineBtn from "../../component/Button/LargeOutLineBtn";

import LargefillBtn from "../../component/Button/LargefillBtn";
import SmailFillBtn from "../../component/Button/SmailFillBtn";

import LargeTextInput from "../../component/TextInput/LargeTextInput";
import PasswordTextInput from "../../component/TextInput/PasswordTextInput";

// // import { Strings } from "../../component/TextStrings/Strings";
import { ColorsConstant } from "../../constants/Colors.constant";
// import { fontFamily } from "../../constants/font";
import { c, StyleConstants } from "../../constants/Style.constant";
import { screenHeight, screenWidth } from "../../constants/Sizes.constant";
import Toast from 'react-native-toast-message';
import { login_user,logout_other_device } from "../../services/User";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loading from "../../component/loading";

function Login(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [load, setLoad] = useState(false)
    const [modalVisiable, setModalVisiable] = useState(false)


    const login_method = async () => {
        let deviceId = new Date().getDate();
        let data = {
            "UserLoginID": email,
            "UserPassword": password,
            "MobileDeviceId": deviceId.toString()
        }
        setLoad(true)
        console.log("request data", data);
        let result = await login_user(data)
        console.log('response Data===', result)

        if (result[0].CODE > 0) {
            setLoad(false)
            Toast.show({ type: 'success', text1: result[0].MSG })
              AsyncStorage.setItem("deviceId",deviceId.toString());
              AsyncStorage.setItem("empId",(result[0].CODE).toString());
              props.navigation.navigate("newPin");
        } else {
            setLoad(false)
            setModalVisiable(true)
            Toast.show({ type: 'error', text1: result[0].MSG })
           // props.navigation.navigate("newPin");
        }
    }
    const logout_other_device_method = async () => {
        let deviceId = new Date().getDate();
        let data = {
            "UserLoginID": email,
            "UserPassword": password,
            "MobileDeviceId": deviceId.toString()
        }
        setLoad(true)
        let result = await logout_other_device(data)
        console.log('response Data===', result)

        if (result[0].CODE > 0) {
            setLoad(false)
            Toast.show({ type: 'success', text1: result[0].MSG })
            AsyncStorage.setItem("deviceId",deviceId.toString());
            AsyncStorage.setItem("empId",(result[0].CODE).toString());
            props.navigation.navigate("newPin");
        } else {
            setLoad(false)
            setModalVisiable(true)
            Toast.show({ type: 'error', text1: result[0].MSG })
           // props.navigation.navigate("newPin");
        }
    }
    

    return (
        <View style={[StyleConstants.container]}>
            <View style={{ flex: 9, width: '100%' }}>
                <Image
                    style={{ width: 200, height: 100, margin: 80 }}
                    resizeMode={'contain'}
                    source={require("./../../asstes/image/logo.jpg")}
                />
                <LargeTextInput
                    placeholder="Enter Email"
                    value={email}
                    keyboardType="email-address"
                    onChangeText={(e) => { setEmail(e) }}
                    returnKeyType="next"
                />
                <PasswordTextInput
                    placeholder="Enter Password"
                    value={password}
                    onChangeText={(e) => { setPassword(e) }}
                    returnKeyType="next"
                />

                <Text style={[StyleConstants.textStyle, { alignSelf: 'flex-end' }]}>Forgot Password</Text>
                {load && <Loading />}
                <LargefillBtn label={"Login"} onPress={() => { login_method() }} />


            </View>

            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
                    <Text style={[StyleConstants.textStyle, {}]}>Powered By.</Text>
                    <Image style={{ marginLeft: 10, width: 20, height: 20 }} source={require("./../../asstes/image/ic_icon.jpg")} />
                </View>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisiable}
                onRequestClose={() => { setModalVisiable(false)}}
                >
                <View  style={{   flex: 1, alignItems: "center",  justifyContent: "center", zIndex: 99}}>
                    <TouchableOpacity  onPress={() => {setModalVisiable(false)}}  style={StyleConstants.modalLayer}   ></TouchableOpacity>
                        <View style={[StyleConstants.modalView, { backgroundColor: ColorsConstant.Thame,height:200 }]}> 
                        <Image  
                            style={{ width: 200, height: 50,alignSelf:'center'}}
                            resizeMode={'contain'}
                            source={require("./../../asstes/image/logo.jpg")}
                        />
                         <Text style={{fontSize:20,color:ColorsConstant.Black,alignSelf:'center',marginTop:30}}>Logout Other Devices?</Text>
                         <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
                         <SmailFillBtn  label={"Yes"} onPress={() => { logout_other_device_method() }} bgcolor={'green'} />
                         <SmailFillBtn  label={"No"} onPress={() => { setModalVisiable(false) }}  bgcolor={'red'} />
                         </View>
                        
                        </View>
                    </View>
            </Modal>

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        // display:flex;
        flex: 1,
        alignItems: "center",
        // justifyContent: "center",
    },
    // takestep: {
    //     color: ColorsConstant.orangedark,
    //     textAlign: 'center',
    //     fontFamily: fontFamily.medium,
    //     fontSize: 18,
    // },
    // textTop: {
    //     fontSize: 12,
    //     textAlign: 'center',
    //     color: ColorsConstant.orangedark,
    //     fontFamily: fontFamily.semiBold
    // },
    // forgattext: {
    //     color: ColorsConstant.orangedark,
    //     marginBottom: 12,
    //     fontFamily: fontFamily.medium,
    //     fontSize: 12,
    //     width: screenWidth - 80,
    //     textAlign: 'right'
    // },
    // Ortext: {
    //     color: ColorsConstant.orangedark,
    //     // marginTop: 15,
    //     textAlign: 'center',
    //     fontFamily: fontFamily.Regular,
    //     fontSize: 26,
    // }
});
export default Login;
