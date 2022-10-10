import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { fontFamily } from "../../constants/font";
import { StyleConstants } from "../../constants/Style.constant";


function LargefillBtn(props) {
    const { label, onPress,textAlign } = props
    return (
        <View style={{alignSelf:'center',marginTop:20}}>
            <TouchableOpacity style={StyleConstants.bottunth} onPress={()=> onPress()}>
                <Text style={[StyleConstants.textsigup,{fontFamily:fontFamily.semiBold,textAlign:"center"}]}>{label}</Text>
            </TouchableOpacity>
        </View>
    )
}
export default LargefillBtn;