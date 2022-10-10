import React, { useRef } from "react";
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { ColorsConstant } from "../../constants/Colors.constant";
import { StyleConstants } from "../../constants/Style.constant";


function TextinputComman(props) {
    // const inputE2 = useRef(null);
    const { placeholder, onChangeText, maxLength, value, keyboardType, returnKeyType, onSubmitEditing, ref, setRef, showError = true, error } = props
    return (
        <>
            <View style={[StyleConstants.Textinput, {}]}>
                <TextInput style={{ flex: 1 }}
                    placeholder={placeholder}
                    color={ColorsConstant.themeColor}
                    keyboardType={keyboardType}
                    placeholderTextColor={ColorsConstant.gary}
                    onChangeText={(e) => onChangeText(e)}
                    returnKeyType={returnKeyType}
                    value={value}
                    autoCapitalize="none"
                    maxLength={maxLength}
                />
            </View>
            {/* {showError == true ? (
                <Text style={StyleConstants.errText}>{error}</Text>
            ) : <></>} */}
            {
                error != "" && 
                <Text style={StyleConstants.errText}>{error}</Text>
            }
        </>
    );
}
const styles = StyleSheet.create({

})
export default TextinputComman;