import { StyleSheet, Text, View } from "react-native";
import React from "react";

const EmiDetails = () => {
    return (
        <View style={styles.customerContainer}>
            <Text
                style={{
                    color: "red",
                    alignSelf: "center",
                    height: 300,
                }}
            >
                EmiDetails
            </Text>
        </View>
    );
};

export default EmiDetails;

const styles = StyleSheet.create({
    customerContainer: {
        // backgroundColor: "#4DC3A3",
        backgroundColor: "#fff",
        paddingVertical: 15,
        marginBottom: 40,
    },
});
