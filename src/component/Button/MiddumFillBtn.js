import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { fontFamily } from "../../constants/font";
import { screenWidth } from "../../constants/Sizes.constant";
import { StyleConstants } from "../../constants/Style.constant";


function MiddumFillBtn(props) {
    const { label, onPress } = props
    return (
        <View>
            <TouchableOpacity style={[StyleConstants.bottunth,{width:screenWidth/2}]} onPress={()=> onPress()}>
                <Text style={[StyleConstants.textsigup,{fontFamily:fontFamily.semiBold}]}>{label}</Text>
            </TouchableOpacity>
        </View>
    )
}
export default MiddumFillBtn;