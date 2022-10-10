import React, { useEffect, useRef, useState } from "react";
import {
    View,
    Text,
    KeyboardAvoidingView,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
} from "react-native";

import { icon } from "../../constants/image";
import { c, StyleConstants } from "../../constants/Style.constant";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { screenWidth, screenHeight } from "../../constants/Sizes.constant";
import logo from "./../../asstes/image/logo.jpg";
import profileIcon from "./../../asstes/icon/user.png";
import Quickloan from "./../Home/QuickLoan";
import Sales from "./../Home/Sales";
import Collection from "./../Home/Collection";
import Lms from "./../Home/Lms";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Home(props) {
    const [activeTab, setActiveTab] = useState("quickLoan");
    const [userImage,setUserImage] = useState("")
    const [userEmail,setUserEmail] = useState("") 
    const [userName,setUserName] = useState("")

      useEffect(()=>{
        const getProfile=async()=>{
         setUserEmail(await AsyncStorage.getItem("email"))
         setUserImage(await AsyncStorage.getItem("ProfilePic"))
         setUserName(await AsyncStorage.getItem("name"))

        }
        getProfile();
        // props.navigation.navigate("Collection");
    },[]);

    return (
        <View>
            <View style={styles.header}>
                <View style={styles.upperHeaderContainer}>
                    <View style={styles.iconsContainer}>
                        <Image source={userImage != null ? {uri:userImage} : profileIcon} style={styles.icons} />
                    </View>
                    <View style={styles.userInfoContainer}>
                        <Text style={styles.userInfoNameText}>
                           {userName}
                        </Text>
                        <Text style={styles.userInfoEmailText}>
                        {userEmail}
                        </Text> 
                    </View>
                </View>
            </View>

            <View
                style={{
                    // height: screenHeight / 6,
                    width: screenWidth - 40,
                    backgroundColor: "#fff",
                    marginTop: -60,
                    alignSelf: "center",
                    borderRadius: 20,
                    borderWidth: 2,
                    borderColor: "#4DC3A3",
                    padding: 20,
                }}
            >
                <Image
                    source={logo}
                    style={{
                        alignSelf: "center",
                    }}
                />
                <Text
                    style={{
                        color: "#4DC3A3",
                        alignSelf: "center",
                        fontSize: 20,
                    }}
                >
                    Finnaux Finance
                </Text>
            </View>

            <View
                style={{
                    backgroundColor: "#D9D9D9",
                    padding: 20,
                    marginTop: 10,
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            >
                <TouchableOpacity
                    onPress={() => {
                        setActiveTab("quickLoan");
                    }}
                    style={
                        activeTab == "quickLoan"
                            ? styles.tabContainerActive
                            : styles.tabContainer
                    }
                >
                    <Text
                        style={
                            activeTab == "quickLoan"
                                ? styles.tabTextActive
                                : styles.tabText
                        }
                    >
                        Quick Loan
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        setActiveTab("sales");
                    }}
                    style={
                        activeTab == "sales"
                            ? styles.tabContainerActive
                            : styles.tabContainer
                    }
                >
                    <Text
                        style={
                            activeTab == "sales"
                                ? styles.tabTextActive
                                : styles.tabText
                        }
                    >
                        Sales
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        setActiveTab("collection");
                    }}
                    style={
                        activeTab == "collection"
                            ? styles.tabContainerActive
                            : styles.tabContainer
                    }
                >
                    <Text
                        style={
                            activeTab == "collection"
                                ? styles.tabTextActive
                                : styles.tabText
                        }
                    >
                        Collection
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        setActiveTab("lms");
                    }}
                    style={
                        activeTab == "lms"
                            ? styles.tabContainerActive
                            : styles.tabContainer
                    }
                >
                    <Text
                        style={
                            activeTab == "lms"
                                ? styles.tabTextActive
                                : styles.tabText
                        }
                    >
                        LMS
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.container}>
                {activeTab == "quickLoan" &&    <Quickloan />    }
                {activeTab == "sales" &&  <Sales /> }
                {activeTab == "collection" && <Collection />}
                {activeTab == "lms" && <Lms />}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#4DC3A3",
        borderBottomWidth: 2,
        borderBottomColor: "#4DC3A3",
    },
    upperHeaderContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        height: 130,
    },
    userInfoContainer: {},
    userInfoNameText: {
        color: "#fff",
        fontSize: 17,
        fontWeight: "bold",
        letterSpacing: 1,
    },
    tabContainer: {
        borderWidth: 1,
        borderColor: "#4DC3A3",
        borderRadius: 100,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    tabText: {
        color: "#4DC3A3",
    },
    tabContainerActive: {
        borderWidth: 1,
        borderColor: "#4DC3A3",
        backgroundColor: "#4DC3A3",
        borderRadius: 100,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    tabTextActive: {
        color: "#fff",
    },
    iconsContainer: {
        padding: 10,
        backgroundColor: "#4DC3A3",
        borderRadius: 50,
    },
    icons: {
        height: 30,
        width: 30,
        tintColor: "white",
        // backgroundColor: "#4DC3A3",
        // padding: 10,
    },
    image: {
        width: "100%",
        height: "80%",
    },
});

export default Home;
