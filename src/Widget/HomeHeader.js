import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity, Modal, ActivityIndicator, StyleSheet } from "react-native";
import { ColorsConstant } from "../constants/Colors.constant";
import { StyleConstants } from "../constants/Style.constant";
import Toast from 'react-native-toast-message';
import { fontFamily } from "../constants/font";
import Icon from 'react-native-vector-icons/Ionicons';
import FastImage from 'react-native-fast-image';


function HomeHeader(props) {
    const { search, onclick, openDrawer, title, animating, setAnimating } = props


    return (
        <>
            <View style={{ backgroundColor: ColorsConstant.White, elevation: 5,borderBottomWidth:2 }}>
                <View style={styles.maneView}>
                    {/* <TouchableOpacity onPress={openDrawer}
                        style={{ marginRight: 20 }} >
                       
                     <Image source={require('../asstes/Image/menu.png')} style={{ height: 25, width: 30, }} />   
                    </TouchableOpacity> */}
                    <TouchableOpacity onPress={onclick}>
                        <Text style={{ color: ColorsConstant.orangedark, fontFamily: fontFamily.semiBold }}>{title}</Text>
                    </TouchableOpacity>

                </View>
            </View>
            {animating &&
                <View style={styles.activityIndicator} >
                   <FastImage
                        style={{ width: 100, height: 100 }}
                        source={require('../asstes/Image/loadingI.gif')}
                        resizeMode={FastImage.resizeMode.contain}
                    />
                    <Text style={{ fontSize: 20, color: ColorsConstant.Black }}>Loading....</Text>
                </View>
            }
        </>
    )
}
const styles = StyleSheet.create({
    maneView: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',
        height: 50,
        paddingHorizontal: 10
    },
    MenuView: {
        flexDirection: 'row',
        alignItems: 'center',
        // width: '30%',
        justifyContent: 'space-between',
    },
    activityIndicator: {
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
export default HomeHeader;



