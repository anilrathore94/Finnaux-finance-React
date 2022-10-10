import React from "react";
import { TouchableOpacity, View, Text ,StyleSheet} from "react-native";
import { ColorsConstant } from "../../constants/Colors.constant";
import { fontFamily } from "../../constants/font";
// import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';

function SmailFillBtn(props) {
    const { label, onPress,bgcolor } = props
    return (
        <View>
            <TouchableOpacity style={[styles.btnstyle ,{ backgroundColor:bgcolor,}]}  onPress={()=> onPress()}>
                <Text style={styles.textbtn}>{label}</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles=StyleSheet.create({
    btnstyle:{
       
        width:150,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderBottomWidth:2.5,
        borderColor:'#9c9aa1',
        borderRadius:5,
        shadowColor: ColorsConstant.White,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 5,
        
    },
    textbtn:{
        color:ColorsConstant.White,
        fontFamily:fontFamily.semiBold
    }
})
export default SmailFillBtn;