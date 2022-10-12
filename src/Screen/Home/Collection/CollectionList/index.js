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
import ProfileIcon from "./../../../../asstes/icon/profile.jpeg";
import PhoneIcon from "./../../../../asstes/icon/phone.png";
import BankIcon from "./../../../../asstes/icon/bank.png";
import locationIcon from "./../../../../asstes/icon/location.png";
import rupeeIcon from "./../../../../asstes/icon/rupee.png";
import DateIcon from "./../../../../asstes/icon/date.png";
// import leftBackIcon from "./../../../../asstes/icon/left.png";
import userProfile from "./../../../../asstes/image/profilepic.jpg";

import LargeTextInput from "./../../../../component/TextInput/LargeTextInput";

import { ColorsConstant } from "./../../../../constants/Colors.constant";
import { c, StyleConstants } from "./../../../../constants/Style.constant";
import { get_CollectionList } from "../../../../services/Collection";
import {
    screenWidth,
    screenHeight,
} from "./../../../../constants/Sizes.constant";

function CollectionList(props) {
    // const { navigation } = props;
    const [search, setSearch] = useState("");
    const [applicationArr, setApplicationArr] = useState([]);
    const [load, setLoad] = useState(false);
    const [modalVisiable, setModalVisiable] = useState(false);

    useEffect(() => {
        get_collection();
    }, []);

    const get_collection = async () => {
        let empId = await AsyncStorage.getItem("empId");
        let data = {
            LoginUserId: "2",
        };
        setLoad(true);
        let result = await get_CollectionList(data);
        //  console.log("response Data1 === ", result);
        if (result.length > 0) {
            setLoad(false);
        }
        setApplicationArr(result);
    };

    const goTo_CollectionDetails_method = async () => {
        props.navigation.navigate("CollectionDetails");
    };

    const _renderItem = (data) => {
        return data.map((item, index) => {
            return (
                <TouchableOpacity
                    onPress={() => {
                        goTo_CollectionDetails_method();
                    }}
                    key={index}
                >
                    <View style={styles.collectionBoxContainer} >
                        <View style={styles.collectionBoxOuterContainer}>
                            <View style={styles.collectionBoxImageContainer}>
                               <TouchableOpacity onPress={()=>{setModalVisiable(true)}}>
                               {/* <Image 
                                    source={
                                        item.Customer_ProfilePic  
                                         == null ?
                                        require('./../../../../asstes/icon/profile.jpeg')
                                        :
                                        {uri:"http://demo.finnaux.com/uploadDoc/wwwroot/Document/Customer/"+item.CustomerId+"/"+item.Customer_ProfilePic}
                                    }
                                    style={styles.userProfile}
                                /> */}
                                </TouchableOpacity>
                                {/* <Text style={{color:"red"}}>{item.Customer_ProfilePic}</Text> */}
                            </View>
                            <View style={styles.collectionBoxUpperDetails}>
                                <View style={styles.userNameCon}>
                                    <Text style={styles.userNameText}>
                                        {item.CustomerName}
                                    </Text>
                                </View>
                                <View style={styles.userOtherDetailsContainer}>
                                    <Image
                                        source={locationIcon}
                                        style={styles.userOtherDetailsIcon}
                                    />
                                    <Text style={styles.userOtherDetailsText}>
                                        {item.Branch_Name}
                                    </Text>
                                </View>
                            </View>
                        </View>

                        <View>
                            <View style={styles.collectionMiddleboxOuter}>
                                <View
                                    style={styles.collectionBoxMiddleContainer}
                                >
                                    <View
                                        style={styles.userOtherDetailsContainer}
                                    >
                                        <Image
                                            source={BankIcon}
                                            style={styles.userOtherDetailsIcon}
                                        />
                                        <Text
                                            style={styles.userOtherDetailsText}
                                        >
                                            {item.LoanAcNo}
                                        </Text>
                                    </View>
                                    <View
                                        style={styles.userOtherDetailsContainer}
                                    >
                                        <Image
                                            source={DateIcon}
                                            style={styles.userOtherDetailsIcon}
                                        />
                                        <Text
                                            style={styles.userOtherDetailsText}
                                        >
                                            DPD-{item.DPD_Days}
                                        </Text>
                                    </View>
                                    <View
                                        style={styles.userOtherDetailsContainer}
                                    >
                                        <Image
                                            source={DateIcon}
                                            style={styles.userOtherDetailsIcon}
                                        />
                                        <Text
                                            style={styles.userOtherDetailsText}
                                        >
                                            LRD- {item.Last_Recv_Date}
                                        </Text>
                                    </View>
                                </View>
                                <View>
                                    <View
                                        style={styles.userOtherDetailsContainer}
                                    >
                                        <Image
                                            source={PhoneIcon}
                                            style={styles.userOtherDetailsIcon}
                                        />
                                        <Text
                                            style={styles.userOtherDetailsText}
                                        >
                                            {item.Customer_PhoneNo}
                                        </Text>
                                    </View>
                                    <View
                                        style={styles.userOtherDetailsContainer}
                                    >
                                        <Image
                                            source={rupeeIcon}
                                            style={styles.userOtherDetailsIcon}
                                        />
                                        <Text
                                            style={styles.userOtherDetailsText}
                                        >
                                            OD-{item.Total_OverDUE_EMI__Amount}
                                        </Text>
                                    </View>
                                    <View
                                        style={styles.userOtherDetailsContainer}
                                    >
                                        <Image
                                            source={DateIcon}
                                            style={styles.userOtherDetailsIcon}
                                        />
                                        <Text style={styles.followUpText}>
                                            PTP-{item.FollowupDate}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View
                            style={{
                                fontSize: 5,
                                borderTopWidth: 1,
                                borderColor: "#ddd",
                            }}
                        >
                            <Text style={styles.userOtherDetailsText}>
                                Product- {item.Product_Name}
                            </Text>
                        </View>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisiable}
                            onRequestClose={() => {
                                setModalVisiable(false);
                            }}
                        >
                            <View style={styles.modelContainer}>
                                <TouchableOpacity
                                    onPress={() => {
                                        setModalVisiable(false);
                                    }}
                                    style={StyleConstants.modalLayer}
                                ></TouchableOpacity>
                                <View
                                    style={[
                                        StyleConstants.modalView,
                                        {
                                            backgroundColor:
                                                ColorsConstant.Thame,
                                            height: 200,
                                        },
                                    ]}
                                >
                                    <Image
                                        style={styles.modalImage}
                                        resizeMode={"contain"}
                                        source={userProfile}
                                    />
                                </View>
                            </View>
                        </Modal>
                    </View>
                </TouchableOpacity>
            );
        });
    };
    return (
        <View style={styles.collectionView}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>My Collection</Text>
            </View>
            <View style={styles.searchOuterContainer}>
                <View style={styles.searchContainer}>
                    <LargeTextInput
                        placeholder="Search."
                        value={search}
                        onChangeText={(e) => {
                            setSearch(e);
                        }}
                    />
                </View>
            </View>
            <ScrollView>{_renderItem(applicationArr || [])}</ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    collectionView: {
        width: screenWidth,
        height: screenHeight,
    },
    headerContainer: {
        backgroundColor: ColorsConstant.White,
        // marginBottom: 5,
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
    // searchOuterContainer: { backgroundColor: "red" },
    // searchOuterContainer: { marginVertical: 1 },
    searchContainer: {
        // borderColor: ColorsConstant.themeColor,
        // borderWidth: 1,
        // borderRadius: 50,
        marginHorizontal: 10,
        // padding: 0,
    },
    // searchText: {
    //     color: ColorsConstant.themeColor,
    //     fontSize: 20,
    //     paddingVertical: 10,
    //     alignSelf: "center",
    // },
    collectionBoxContainer: {
        marginHorizontal: 10,
        marginVertical: 7,
        borderRadius: 7,
        borderWidth: 1,
        borderColor: ColorsConstant.themeColor,
        backgroundColor: "#C0EEE2", //for light background.
        padding: 10,
        shadowColor: ColorsConstant.Black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4.84,
        elevation: 8,
    },
    collectionBoxOuterContainer: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderColor: "#ddd", //for light border
        paddingBottom: 3,
    },
    collectionBoxImageContainer: {
        paddingRight: 10,
    },
    userProfile: { width: 50, height: 50 },
    collectionBoxUpperDetails: {
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    userDetailsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        flex: 1,
        paddingHorizontal: 10,
    },
    userNameContainer: {},
    userNameText: {
        color: ColorsConstant.Black,
        fontSize: 15,
        fontWeight: "bold",
        letterSpacing: 1,
    },
    collectionMiddleboxOuter: {
        flexDirection: "row",
    },
    collectionBoxMiddleContainer: {
        width: screenWidth / 2,
    },
    userOtherDetailsContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    userOtherDetailsIcon: {
        width: 15,
        height: 15,
        tintColor: ColorsConstant.themeColor,
    },
    userOtherDetailsText: {
        color: ColorsConstant.Black,
        fontSize: 14,
        fontWeight: "bold",
        paddingLeft: 3,
    },
    followUpText: {
        color: ColorsConstant.Black,
        fontSize: 14,
        padding: 3,
        fontWeight: "bold",
    },
    loanText: {
        color: ColorsConstant.themeColor,
        fontSize: 15,
        fontWeight: "bold",
    },
    loanIcon: {
        alignSelf: "center",
        justifyContent: "center",
        height: 2,
        width: 2,
    },
    modalInnerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
    },
});
export default CollectionList;
