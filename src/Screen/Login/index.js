import React, { useEffect, useRef, useState } from "react";
import {
    View,
    Text,
    KeyboardAvoidingView,
    StyleSheet,
    ScrollView,
    Image,
    Modal,
    TouchableOpacity,
} from "react-native";
// import SmailInput from "../../component/TextInput/SmailInput";
// import PinInput from "./../../component/TextInput/PinInput";

import LargeOutLineBtn from "../../component/Button/LargeOutLineBtn";

import LargefillBtn from "../../component/Button/LargefillBtn";
import SmailFillBtn from "../../component/Button/SmailFillBtn";

import LargeTextInput from "../../component/TextInput/LargeTextInput";
import PasswordTextInput from "../../component/TextInput/PasswordTextInput";

// // import { Strings } from "../../component/TextStrings/Strings";
import { ColorsConstant } from "../../constants/Colors.constant";
// import { fontFamily } from "../../constants/font";
import { c, StyleConstants } from "../../constants/Style.constant";
import { screenHeight, screenWidth } from "../../constants/Sizes.constant";
import Toast from "react-native-toast-message";
import { login_user, logout_other_device } from "../../services/User";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loading from "../../component/loading";

function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [load, setLoad] = useState(false);
    const [modalVisiable, setModalVisiable] = useState(false);

    const login_method = async () => {
        let deviceId = new Date().getDate();
        let data = {
            UserLoginID: email,
            UserPassword: password,
            MobileDeviceId: deviceId.toString(),
        };
        setLoad(true);
        console.log("request data", data);
        let result = await login_user(data);
        console.log("response Data===", result);
        if (result[0].CODE > 0) {
            setLoad(false);
            Toast.show({ type: "success", text1: result[0].MSG });
            AsyncStorage.setItem("deviceId", deviceId.toString());
            AsyncStorage.setItem("empId", result[0].CODE.toString());
            props.navigation.navigate("newPin");
        } else {
            setLoad(false);
            setModalVisiable(true);
            Toast.show({ type: "error", text1: result[0].MSG });
            // props.navigation.navigate("newPin");
        }
    };
    const logout_other_device_method = async () => {
        let deviceId = new Date().getDate();
        let data = {
            UserLoginID: email,
            UserPassword: password,
            MobileDeviceId: deviceId.toString(),
        };
        setLoad(true);
        let result = await logout_other_device(data);
        console.log("response Data===", result);

        if (result[0].CODE > 0) {
            setLoad(false);
            Toast.show({ type: "success", text1: result[0].MSG });
            AsyncStorage.setItem("deviceId", deviceId.toString());
            AsyncStorage.setItem("empId", result[0].CODE.toString());
            props.navigation.navigate("newPin");
        } else {
            setLoad(false);
            setModalVisiable(true);
            Toast.show({ type: "error", text1: result[0].MSG });
            // props.navigation.navigate("newPin");
        }
    };
    return (
        <View style={[StyleConstants.container]}>
            <View style={styles.outerContainer}>
                <Image
                    style={styles.logo}
                    resizeMode={"contain"}
                    source={require("./../../asstes/image/logo.jpg")}
                />
                <LargeTextInput
                    placeholder="Enter Email"
                    value={email}
                    keyboardType="email-address"
                    onChangeText={(e) => {
                        setEmail(e);
                    }}
                    returnKeyType="next"
                />
                <PasswordTextInput
                    placeholder="Enter Password"
                    value={password}
                    onChangeText={(e) => {
                        setPassword(e);
                    }}
                    returnKeyType="next"
                />
                <Text
                    style={[
                        StyleConstants.textStyle,
                        { alignSelf: "flex-end" },
                    ]}
                >
                    Forgot Password
                </Text>
                {load && <Loading />}
                <LargefillBtn
                    label={"Login"}
                    onPress={() => {
                        login_method();
                    }}
                />
            </View>
            <View style={styles.poweredByOuter}>
                <View style={styles.poweredByContainer}>
                    <Text style={[StyleConstants.textStyle]}>Powered By.</Text>
                    <Image
                        style={styles.poweredByLogo}
                        source={require("./../../asstes/image/ic_icon.jpg")}
                    />
                </View>
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
                                backgroundColor: ColorsConstant.Thame,
                                height: 200,
                            },
                        ]}
                    >
                        <Image
                            style={styles.modalImage}
                            resizeMode={"contain"}
                            source={require("./../../asstes/image/logo.jpg")}
                        />
                        <Text style={styles.modalText}>
                            Logout Other Devices?
                        </Text>
                        <View style={styles.modalInnerContainer}>
                            <SmailFillBtn
                                label={"Yes"}
                                onPress={() => {
                                    logout_other_device_method();
                                }}
                                bgcolor={"green"}
                            />
                            <SmailFillBtn
                                label={"No"}
                                onPress={() => {
                                    setModalVisiable(false);
                                }}
                                bgcolor={"red"}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    outerContainer: { flex: 9, width: "100%" },
    logo: { width: 200, height: 100, margin: 80 },
    poweredByOuter: { flex: 1 },
    poweredByContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 20,
    },
    poweredByLogo: { marginLeft: 10, width: 20, height: 20 },
    modelContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        zIndex: 99,
    },
    modalImage: {
        width: 200,
        height: 50,
        alignSelf: "center",
    },
    modalText: {
        fontSize: 20,
        color: ColorsConstant.Black,
        alignSelf: "center",
        marginTop: 30,
    },
    modalInnerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
    },
});
export default Login;
