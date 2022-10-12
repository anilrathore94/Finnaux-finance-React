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
import ProfileIcon from "./../../../../asstes/icon/user.png";
import GroupIcon from "./../../../../asstes/icon/group.png";
import BankIcon from "./../../../../asstes/icon/bank.png";
import LoanIcon from "./../../../../asstes/icon/loan.png";
import rupeeIcon from "./../../../../asstes/icon/rupee.png";
import DateIcon from "./../../../../asstes/icon/date.png";
// import leftBackIcon from "./../../../../asstes/icon/left.png";
import userProfile from "./../../../../asstes/image/profilepic.jpg";

import { ColorsConstant } from "./../../../../constants/Colors.constant";
import { c, StyleConstants } from "./../../../../constants/Style.constant";
import {} from "../../../../services/Collection";
import {
    screenWidth,
    screenHeight,
} from "./../../../../constants/Sizes.constant";
import Customer from "./Customer";
import EmiDetails from "./EmiDetails";
import FollowUp from "./FollowUp";
import Collection from "./Collection";

const CollectionDetails = () => {
    const [activeTab, setActiveTab] = useState("Customer");
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Collection Details</Text>
            </View>
            <ScrollView>
                <View style={styles.detailsMainContainer}>
                    {/* first container start */}
                    <View style={styles.detailsOuterContainer}>
                        <View style={styles.detailsContainer}>
                            <View style={styles.detailsLabelContainer}>
                                <Text style={styles.detailsLabel}>
                                    Customer Name :
                                </Text>
                            </View>
                            <View style={styles.detailsDataContainer}>
                                <Image
                                    source={ProfileIcon}
                                    style={styles.detailsIcon}
                                />
                                <Text style={styles.detailsData}>
                                    Neha Panchal
                                </Text>
                            </View>
                        </View>
                        <View style={styles.detailsContainer}>
                            <View style={styles.detailsLabelContainer}>
                                <Text style={styles.detailsLabel}>
                                    Loan Ac. No :
                                </Text>
                            </View>
                            <View style={styles.detailsDataContainer}>
                                <Image
                                    source={LoanIcon}
                                    style={styles.detailsIcon}
                                />
                                <Text style={styles.detailsData}>
                                    Gl 0000002
                                </Text>
                            </View>
                        </View>
                    </View>
                    {/* first container end */}
                    <View style={styles.detailsOuterContainer}>
                        <View style={styles.detailsContainer}>
                            <View style={styles.detailsLabelContainer}>
                                <Text style={styles.detailsLabel}>
                                    Branch :
                                </Text>
                            </View>
                            <View style={styles.detailsDataContainer}>
                                <Image
                                    source={BankIcon}
                                    style={styles.detailsIcon}
                                />
                                <Text style={styles.detailsData}>Jaipur</Text>
                            </View>
                        </View>
                        <View style={styles.detailsContainer}>
                            <View style={styles.detailsLabelContainer}>
                                <Text style={styles.detailsLabel}>
                                    Loan Product :
                                </Text>
                            </View>
                            <View style={styles.detailsDataContainer}>
                                <Image
                                    source={GroupIcon}
                                    style={styles.detailsIcon}
                                />
                                <Text style={styles.detailsData}>
                                    Group Loan
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.detailsOuterContainer}>
                        <View style={styles.detailsContainer}>
                            <View style={styles.detailsLabelContainer}>
                                <Text style={styles.detailsLabel}>
                                    Last Due Date :
                                </Text>
                            </View>
                            <View style={styles.detailsDataContainer}>
                                <Image
                                    source={DateIcon}
                                    style={styles.detailsIcon}
                                />
                                <Text style={styles.detailsData}>
                                    10-02-2023
                                </Text>
                            </View>
                        </View>
                        <View style={styles.detailsContainer}>
                            <View style={styles.detailsLabelContainer}>
                                <Text style={styles.detailsLabel}>
                                    Last Due Amount :
                                </Text>
                            </View>
                            <View style={styles.detailsDataContainer}>
                                <Image
                                    source={rupeeIcon}
                                    style={styles.detailsIcon}
                                />
                                <Text style={styles.detailsData}>0.00</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.detailsOuterContainer}>
                        <View style={styles.detailsContainer}>
                            <View style={styles.detailsLabelContainer}>
                                <Text style={styles.detailsLabel}>
                                    Last Received Date :
                                </Text>
                            </View>
                            <View style={styles.detailsDataContainer}>
                                <Image
                                    source={DateIcon}
                                    style={styles.detailsIcon}
                                />
                                <Text style={styles.detailsData}>
                                    10-02-2023
                                </Text>
                            </View>
                        </View>
                        <View style={styles.detailsContainer}>
                            <View style={styles.detailsLabelContainer}>
                                <Text style={styles.detailsLabel}>
                                    Last Received Amount :
                                </Text>
                            </View>
                            <View style={styles.detailsDataContainer}>
                                <Image
                                    source={rupeeIcon}
                                    style={styles.detailsIcon}
                                />
                                <Text style={styles.detailsData}>0.00</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.detailsOuterContainer}>
                        <View style={styles.detailsContainer}>
                            <View style={styles.detailsLabelContainer}>
                                <Text style={styles.detailsLabel}>
                                    DPD Days :
                                </Text>
                            </View>
                            <View style={styles.detailsDataContainer}>
                                <Image
                                    source={DateIcon}
                                    style={styles.detailsIcon}
                                />
                                <Text style={styles.detailsData}>0</Text>
                            </View>
                        </View>
                        <View style={styles.detailsContainer}>
                            <View style={styles.detailsLabelContainer}>
                                <Text style={styles.detailsLabel}>
                                    Over Due Amount :
                                </Text>
                            </View>
                            <View style={styles.detailsDataContainer}>
                                <Image
                                    source={rupeeIcon}
                                    style={styles.detailsIcon}
                                />
                                <Text style={styles.detailsData}>0.00</Text>
                            </View>
                        </View>
                    </View>
                </View>
                {/* Tab section */}
                <View style={styles.tabOuterContainer}>
                    <View style={styles.tabContainer}>
                        <TouchableOpacity
                            onPress={() => {
                                setActiveTab("Customer");
                            }}
                            style={
                                activeTab == "Customer"
                                    ? styles.tabActive
                                    : styles.tab
                            }
                        >
                            <Text
                                style={
                                    activeTab == "Customer"
                                        ? styles.tabTextActive
                                        : styles.tabText
                                }
                            >
                                Customer
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                setActiveTab("EmiDetails");
                            }}
                            style={
                                activeTab == "EmiDetails"
                                    ? styles.tabActive
                                    : styles.tab
                            }
                        >
                            <Text
                                style={
                                    activeTab == "EmiDetails"
                                        ? styles.tabTextActive
                                        : styles.tabText
                                }
                            >
                                EMI Details
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                setActiveTab("FollowUp");
                            }}
                            style={
                                activeTab == "FollowUp"
                                    ? styles.tabActive
                                    : styles.tab
                            }
                        >
                            <Text
                                style={
                                    activeTab == "FollowUp"
                                        ? styles.tabTextActive
                                        : styles.tabText
                                }
                            >
                                Follow Up
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                setActiveTab("Collection");
                            }}
                            style={
                                activeTab == "Collection"
                                    ? styles.tabActive
                                    : styles.tab
                            }
                        >
                            <Text
                                style={
                                    activeTab == "Collection"
                                        ? styles.tabTextActive
                                        : styles.tabText
                                }
                            >
                                Collection
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{}}>
                        {activeTab == "Customer" && <Customer />}
                        {activeTab == "EmiDetails" && <EmiDetails />}
                        {activeTab == "FollowUp" && <FollowUp />}
                        {activeTab == "Collection" && <Collection />}
                        {/* {activeTab==""} */}
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default CollectionDetails;

const styles = StyleSheet.create({
    container: {
        width: screenWidth,
        height: screenHeight,
        marginBottom: 20,
    },
    headerContainer: {
        backgroundColor: ColorsConstant.White,
        marginBottom: 10,
        borderBottomWidth: 2,
        borderColor: ColorsConstant.themeColor,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15,
    },
    headerBackIcon: {
        width: 20,
        height: 20,
        tintColor: ColorsConstant.themeColor,
    },
    headerText: {
        // color: "red",
        color: ColorsConstant.themeColor,
        alignSelf: "center",
        fontSize: 20,
        padding: 15,
        fontWeight: "bold",
        alignItems: "center",
    },
    detailsMainContainer: { backgroundColor: "#fff" },
    detailsOuterContainer: {
        // backgroundColor: "orange",
        borderBottomWidth: 1,
        borderBottomColor: ColorsConstant.themeColor,
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 10,
    },
    detailsContainer: {
        width: screenWidth / 2,
    },
    detailsLabel: {
        color: ColorsConstant.themeColor,
        fontWeight: "bold",
        paddingBottom: 2,
    },
    detailsDataContainer: { flexDirection: "row", alignItems: "center" },
    detailsIcon: {
        width: 15,
        height: 15,
        marginRight: 5,
        tintColor: ColorsConstant.themeColor,
    },
    detailsData: {
        color: "#000",
        fontWeight: "bold",
        textTransform: "uppercase",
    },
    tabOuterContainer: {
        backgroundColor: "#4DC3A3",
        marginTop: 15,
        // flex: 1,
    },
    tabContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        // marginHorizontal: 10,
    },
    tabText: {
        color: "#fff",
        borderRightWidth: 1,
        borderColor: "#fff",
        // borderBottomColor: ColorsConstant.themeColor,
        // borderBottomWidth: 2,
        padding: 7,
        fontSize: 16,
        // fontWeight: "bold",
    },
    tabTextActive: {
        color: "#4DC3A3",
        backgroundColor: "#fff",
        fontWeight: "bold",

        // backgroundColor: ColorsConstant.themeColor,
        // borderBottomColor: ColorsConstant.themeColor,
        // borderBottomWidth: 2,
        padding: 8,
        fontSize: 15,
    },
    tabActive: {
        backgroundColor: ColorsConstant.themeColor,
    },
});
