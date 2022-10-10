// import AsyncStorage from "@react-native-async-storage/async-storage"
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import { ColorsConstant } from "../../constants/Colors.constant";
// import { screenHeight, screenWidth } from "../../constants/Sizes.constant";
import { c, StyleConstants } from "../../constants/Style.constant";
import { screenHeight, screenWidth } from "../../constants/Sizes.constant";
function Splash(props) {
 useEffect(() => {
    const checkLogin = async()=>{
        setTimeout(async() => { 
            let empId= await AsyncStorage.getItem("empId");
            let token= await AsyncStorage.getItem("token");

            // console.log(empId)
            if(empId == null || empId == "" && token == ""){
                props.navigation.navigate('IsExist', { backScreen: 'Splash'} ) 
            }else if(token != "" || token != null){
               props.navigation.navigate('ConfirmPin', { backScreen: 'Splash'} ) 
            }else{
                props.navigation.navigate('newPin', { backScreen: 'Splash'} ) 
            }
      }, 2500);
    } 
    checkLogin();
  }, []);
     
    return ( 
           <View style={ls.flexView} >
               <View style={{flex: 1,alignItems: 'center',  justifyContent: 'center'}}>
                  <Image resizeMode="stretch" source={require('./../../asstes/image/login_logo.png')} style={ls.logo}/>
                </View>
                {/* <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
                    <Text style={[StyleConstants.textStyle, {}]}>Powered By.</Text>
                    <Image style={{ marginLeft: 10, width: 20, height: 20 }} source={require("./../../asstes/image/ic_icon.jpg")} />
                </View>
            </View> */}
            </View> 
    )
}
const ls = StyleSheet.create({
    flexView: {
        flex: 1 , 
        backgroundColor: ColorsConstant.White,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo:{
       height:160,
       width: 200, 

    }

})
export default Splash;