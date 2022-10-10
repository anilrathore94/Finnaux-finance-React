import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity, Image } from 'react-native';
import { ColorsConstant } from "../../constants/Colors.constant";
import IMAGE from "../../constants/image";
import { StyleConstants } from "../../constants/Style.constant";


function PasswordTextInput(props) {
    const { placeholder, onChangeText, value, keyboardType, returnKeyType,
        onSubmitEditing, onBlur, onPressIn, showError = true, error } = props
    const [toggle, setToggle] = useState(false)
    const [secure, setSecure] = useState(true)
    const onclick = () => {
        setSecure(!secure)
        setToggle(!toggle)
    }
    return (
        <>
            <View style={[StyleConstants.Textinput, { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 0, }]}>
                <TextInput style={{ flex: 1 }}
                    placeholder={placeholder}
                    color={ColorsConstant.themeColor}
                    keyboardType={keyboardType}
                    placeholderTextColor={ColorsConstant.gary}
                    onChangeText={(e) => onChangeText(e)}
                    onSubmitEditing={() => onSubmitEditing}
                    returnKeyType={returnKeyType}
                    secureTextEntry={secure}
                    value={value}
                    maxLength={16}
                    onBlur={onBlur}
                    onPressIn={onPressIn}
                />
                <TouchableOpacity onPress={() => onclick()}>
                    <Image source={toggle ? IMAGE.eyeon : IMAGE.eyeoff} resizeMode='contain' style={{ height: 20, width: 20, tintColor: ColorsConstant.themeColor }} />
                </TouchableOpacity>
            </View>
             {
                error != "" && 
                <Text style={StyleConstants.errText}>{error}</Text>
            }
        </>
    );
}
export default PasswordTextInput;