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
import Toast from 'react-native-toast-message'; 
import {get_url} from './../../services/AppSetting';
import LargeOutLineBtn from "../../component/Button/LargeOutLineBtn";

import LargefillBtn from "../../component/Button/LargefillBtn";
import MediumFillBtn from "../../component/Button/MiddumFillBtn";

import LargeTextInput from "../../component/TextInput/LargeTextInput";  
import { c, StyleConstants } from "../../constants/Style.constant"; 
  import AsyncStorage from "@react-native-async-storage/async-storage";
import Loading from "../../component/loading";

function IsExist(props) {

   const [url,setUrl] = useState('demo.finnaux.com'); 
   const [load,setLoad] = useState(false)
 

  const getUrlFun  = async () => {
      let data={
        "BaseUrl": url
      }
      
    setLoad(true)
    let result = await get_url(data)
    console.log('response Data===', result)
    
    if (result.CODE === 1) {
        setLoad(false)
        Toast.show({ type: 'success',text1:"true" }) 
        AsyncStorage.setItem("base_url","http://"+url+"/api/api/");
        props.navigation.navigate("Login", { backScreen: 'Splash'} );
    }else{
        setLoad(false)
        Toast.show({ type: 'error', text1:"Url Is not vaild" })
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
                <Text>Enter Url</Text>
                <LargeTextInput 
                placeholder="Enter Url" 
                value={url}   
                onChangeText={(e) => { setUrl(e) }}
                returnKeyType="next"
                /> 
                {load && <Loading/>}
                <LargefillBtn label={"Submit"}  onPress={()=>{getUrlFun()}}/>
               
                 
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
export default IsExist;
