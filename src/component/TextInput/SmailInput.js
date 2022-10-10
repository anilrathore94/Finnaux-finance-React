import React, { useRef } from "react";
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { ColorsConstant } from "../../constants/Colors.constant";
import { fontFamily } from "../../constants/font";
import { screenWidth } from "../../constants/Sizes.constant";

function SmailInput(props) {
    const { placeholder, onChangeText, onBlur, value, keyboardType, returnKeyType, onSubmitEditing, ref, setRef, showError = true, error } = props
    return (
        <>
            <View style={styles.Textinput}>
                <TextInput style={{height:40, fontFamily:fontFamily.medium,fontSize:10}}
                    placeholder={placeholder}
                    color={ColorsConstant.Black}
                    keyboardType={keyboardType}
                    placeholderTextColor={ColorsConstant.gary}
                    onChangeText={(e) => onChangeText(e)}
                    onSubmitEditing={() => onSubmitEditing()}
                    returnKeyType={returnKeyType}
                    value={value}
                    onBlur={onBlur}
                    ref={ref}
                    autoCapitalize="none"
                />
            </View>
            {/* {showError == true ? (
                <Text style={StyleConstants.errText}>{error}</Text>
            ) : null} */}
        </>
    );
}
const styles = StyleSheet.create({
    Textinput:{
        borderWidth: 1,
        width:screenWidth /2 -32,
        height:30,
        justifyContent:'center',
        borderRadius:7,
        paddingHorizontal:6,
        borderStyle: 'dotted',
        marginBottom:8
        // borderStyle enum('solid', 'dotted', 'dashed')
    }
})
export default SmailInput;