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
import MapIcon from "./../../../../../asstes/icon/map.png";

import GroupIcon from "./../../../../../asstes/icon/group.png";
import BankIcon from "./../../../../../asstes/icon/bank.png";
import LoanIcon from "./../../../../../asstes/icon/loan.png";
import rupeeIcon from "./../../../../../asstes/icon/rupee.png";
import DateIcon from "./../../../../../asstes/icon/date.png";

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
                <Text style={styles.heading}>Borrower</Text>
                <View style={styles.borrowerDetailsContainer}>
                    <Image source={userIcon} style={styles.icon} />
                    <Text style={styles.name}>Neha Panchal</Text>
                </View>
                <View style={styles.borrowerDetailsContainer}>
                    <Image source={phoneIcon} style={styles.icon} />
                    <Text style={styles.name}>9387453789</Text>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            paddingVertical: 4,
                        }}
                    >
                        <Image source={locationIcon} style={styles.icon} />
                        <Text style={styles.name}>
                            Vidhyadhar Nagar, Jaipur
                        </Text>
                    </View>
                    <View>
                        <Image source={MapIcon} style={styles.icon} />
                    </View>
                </View>
            </View>
            <View style={styles.borrowerDetails}>
                <Text style={styles.heading}>Co-Borrower</Text>
                <View style={styles.borrowerDetailsContainer}>
                    <Image source={userIcon} style={styles.icon} />
                    <Text style={styles.name}>Shelendra Panchal</Text>
                </View>
                <View style={styles.borrowerDetailsContainer}>
                    <Image source={phoneIcon} style={styles.icon} />
                    <Text style={styles.name}>7398453789</Text>
                </View>
                <View style={styles.borrowerDetailsContainer}>
                    <Image source={locationIcon} style={styles.icon} />
                    <Text style={styles.name}>Vaishali Nagar, Jaipur</Text>
                </View>
            </View>
            <View style={styles.borrowerDetails}>
                <Text style={styles.heading}>Co-Borrower</Text>
                <View style={styles.borrowerDetailsContainer}>
                    <Image source={userIcon} style={styles.icon} />
                    <Text style={styles.name}>Shelendra Panchal</Text>
                </View>
                <View style={styles.borrowerDetailsContainer}>
                    <Image source={phoneIcon} style={styles.icon} />
                    <Text style={styles.name}>7398453789</Text>
                </View>
                <View style={styles.borrowerDetailsContainer}>
                    <Image source={locationIcon} style={styles.icon} />
                    <Text style={styles.name}>Vaishali Nagar, Jaipur</Text>
                </View>
            </View>
            <View style={styles.borrowerDetails}>
                <Text style={styles.heading}>Co-Borrower</Text>
                <View style={styles.borrowerDetailsContainer}>
                    <Image source={userIcon} style={styles.icon} />
                    <Text style={styles.name}>Shelendra Panchal</Text>
                </View>
                <View style={styles.borrowerDetailsContainer}>
                    <Image source={phoneIcon} style={styles.icon} />
                    <Text style={styles.name}>7398453789</Text>
                </View>
                <View style={styles.borrowerDetailsContainer}>
                    <Image source={locationIcon} style={styles.icon} />
                    <Text style={styles.name}>Vaishali Nagar, Jaipur</Text>
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
        paddingVertical: 15,
        marginBottom: 40,
    },
    borrowerDetails: {
        color: "#4DC3A3",
        // height: 100,
        padding: 5,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#4DC3A3",
        backgroundColor: "#C0EEE2",
        // backgroundColor: "#fff",
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
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 4,
    },
    icon: {
        width: 15,
        height: 15,
        marginRight: 20,
        tintColor: ColorsConstant.themeColor,
    },
    name: {
        color: "#000",
        fontWeight: "bold",
        textTransform: "uppercase",
    },
});
