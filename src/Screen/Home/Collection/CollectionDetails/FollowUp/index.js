import React, { useEffect, useRef, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    Modal,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// importing icon
import userIcon from "./../../../../../asstes/icon/user.png";
import phoneIcon from "./../../../../../asstes/icon/phone.png";
import locationIcon from "./../../../../../asstes/icon/location.png";

import GroupIcon from "./../../../../../asstes/icon/group.png";
import BankIcon from "./../../../../../asstes/icon/bank.png";
import LoanIcon from "./../../../../../asstes/icon/loan.png";
import rupeeIcon from "./../../../../../asstes/icon/rupee.png";
import DateIcon from "./../../../../../asstes/icon/date.png";

import LargeTextInput from "./../../../../../component/TextInput/LargeTextInput";

import { ColorsConstant } from "./../../../../../constants/Colors.constant";
import { c, StyleConstants } from "./../../../../../constants/Style.constant";
import {} from "../../../../../services/Collection";
import {
    screenWidth,
    screenHeight,
} from "./../../../../../constants/Sizes.constant";

const Customer = () => {
    return (
        <View style={styles.customerContainer}>
            <View style={styles.borrowerDetails}>
                {/* <Text style={styles.heading}>Borrower Details</Text> */}
                <View style={styles.borrowerDetailsContainer}>
                    {/* <Image source={userIcon} style={styles.icon} /> */}
                    <Text style={styles.name}>Name</Text>
                    <LargeTextInput placeholder="Tittle of Follow up.." />
                </View>
                <View style={styles.borrowerDetailsContainer}>
                    {/* <Image source={phoneIcon} style={styles.icon} /> */}
                    <Text style={styles.name}>Remark</Text>
                </View>
                <View style={styles.borrowerDetailsContainer}>
                    {/* <Image source={locationIcon} style={styles.icon} /> */}
                    <Text style={styles.name}>Date</Text>
                </View>
            </View>
        </View>
    );
};

export default Customer;

const styles = StyleSheet.create({
    customerContainer: {
        // backgroundColor: "#4DC3A3",
        backgroundColor: "#fff",
        // paddingVertical: 15,
        // marginBottom: 40,
    },
    borrowerDetails: {
        color: "#4DC3A3",
        // height: 100,
        padding: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#4DC3A3",
        backgroundColor: "#fff",
        marginHorizontal: 20,
        marginBottom: 10,
    },
    heading: {
        fontWeight: "bold",
        color: "#4DC3A3",
        alignSelf: "center",
    },
    BorrowerName: {},
    name: {
        // fontWeight: "bold",
        color: "#4DC3A3",
    },
    borrowerDetailsContainer: {
        // flexDirection: "row",
        // alignItems: "center",
        // paddingVertical: 2,
    },
    icon: {
        width: 15,
        height: 15,
        marginRight: 20,
        tintColor: ColorsConstant.themeColor,
    },
    name: {
        color: "#fff",
        fontWeight: "bold",
        textTransform: "uppercase",
    },
});
