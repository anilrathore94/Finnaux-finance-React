import React, { useState } from "react";
import { View, Text, Image, StyleSheet, ActivityIndicator } from "react-native";
import { ColorsConstant } from "../constants/Colors.constant";
import { StyleConstants } from "../constants/Style.constant";
import FastImage from 'react-native-fast-image';
function Loading(props) {
    return (
       
                <ActivityIndicator color={ColorsConstant.themeColor}/>
                     
            
    )
}
const s = StyleConstants, ls = StyleSheet.create({

    activityIndicator: {
        backgroundColor: ColorsConstant.DarkLight,
        alignItems: 'center',
        justifyContent: "center",
        position: 'absolute',
        zIndex: 9999,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
})
export default Loading;