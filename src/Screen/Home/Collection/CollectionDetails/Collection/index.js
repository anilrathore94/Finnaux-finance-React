import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { screenWidth } from "../../../../../constants/Sizes.constant";
import LargefillBtn from "../../../../../component/Button/LargefillBtn";
import SmailFillBtn from "../../../../../component/Button/SmailFillBtn";

const Collection = () => {
    return (
        <View style={styles.CollectionContainer}>
            {/* <Text style={styles.CollectionContainerText}>Collection</Text> */}
            <View style={styles.CollectionUpperDetails}>
                <Text style={styles.text}>Rec No. : jpr_00019</Text>
                <Text style={{ borderWidth: 1 }}></Text>
                <Text style={styles.text}>Date : 07-10-2022</Text>
            </View>
            <View style={styles.CollectionMiddleContainer}>
                <View style={styles.CollectionMiddleDetails}>
                    <Text style={styles.CollectionMiddleDetailsText}>
                        Installment
                    </Text>
                    <Text style={styles.CollectionMiddleDetailsText}>0</Text>
                    <Text style={styles.CollectionMiddleDetailsText}>53</Text>
                </View>
                <View style={styles.CollectionMiddleDetails}>
                    <Text style={styles.CollectionMiddleDetailsText}>
                        Overdue Int.
                    </Text>
                    <Text style={styles.CollectionMiddleDetailsText}>0</Text>
                    <Text style={styles.CollectionMiddleDetailsText}>
                        123.00
                    </Text>
                </View>
                <View style={styles.CollectionMiddleDetails}>
                    <Text style={styles.CollectionMiddleDetailsText}>
                        Other
                    </Text>
                    <Text style={styles.CollectionMiddleDetailsText}>0</Text>
                    <Text style={styles.CollectionMiddleDetailsText}>123</Text>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        alignContent: "center",
                        backgroundColor: "#C0EEE2",
                    }}
                >
                    <Text
                        style={{
                            color: "#000",
                            fontWeight: "bold",
                            borderWidth: 1,
                            borderColor: "#4DC3A3",
                            paddingVertical: 10,
                            paddingHorizontal: 10,
                            justifyContent: "center",
                            flex: 1,
                            color: "#4DC3A3",
                        }}
                    >
                        Total
                    </Text>
                    <Text
                        style={{
                            color: "#000",
                            fontWeight: "bold",
                            borderWidth: 1,
                            borderColor: "#4DC3A3",
                            paddingVertical: 10,
                            paddingHorizontal: 10,
                            justifyContent: "center",
                            flex: 1,
                            color: "#4DC3A3",
                        }}
                    >
                        0
                    </Text>
                    <Text
                        style={{
                            color: "#000",
                            fontWeight: "bold",
                            borderWidth: 1,
                            borderColor: "#4DC3A3",
                            paddingVertical: 10,
                            paddingHorizontal: 10,
                            justifyContent: "center",
                            flex: 1,
                            color: "#4DC3A3",
                        }}
                    >
                        123
                    </Text>
                </View>
                <View
                    style={{
                        backgroundColor: "#4DC3A3",
                        marginVertical: 5,
                        borderRadius: 3,
                    }}
                >
                    <Text
                        style={{
                            paddingVertical: 10,
                            alignSelf: "center",
                            color: "#fff",
                        }}
                    >
                        Add
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default Collection;

const styles = StyleSheet.create({
    CollectionContainer: {
        backgroundColor: "#fff",
        paddingVertical: 15,
        color: "#4DC3A3",
    },
    CollectionUpperDetails: {
        flexDirection: "row",
        // alignSelf: "center",
        justifyContent: "space-between",
        // borderWidth: 1,
        borderColor: "#4DC3A3",
        backgroundColor: "#C0EEE2",
        padding: 5,
        marginHorizontal: 20,
    },
    text: {
        color: "#4DC3A3",
        fontSize: 15,
        // backgroundColor: "red",
        backgroundColor: "#C0EEE2",
        flexWrap: "wrap",
        // width: screenWidth / 2,

        // borderLeftWidth: 1,
    },
    CollectionMiddleContainer: { marginHorizontal: 20 },
    CollectionMiddleDetails: {
        flexDirection: "row",
        alignContent: "center",
    },
    CollectionMiddleDetailsText: {
        // color: "#4DC3A3",
        color: "#000",
        fontWeight: "bold",

        // width: screenWidth / 4,
        borderWidth: 1,
        borderColor: "#4DC3A3",
        // borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 10,
        // alignSelf: "center",
        justifyContent: "center",
        flex: 1,
        // width: 110,
        // alignItems: "center",
    },

    CollectionBottomDetails: {
        flexDirection: "row",
        // alignSelf: "center",
        justifyContent: "space-between",
        // borderWidth: 1,
        borderColor: "#4DC3A3",
        backgroundColor: "#C0EEE2",
        padding: 5,
        marginHorizontal: 20,
    },
    // CollectionContainerText: { color: "red" },
});
