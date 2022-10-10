import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { screenWidth, screenHeight } from "./../../../constants/Sizes.constant";

const index = () => {
    return (
        <View
            style={{
                width: screenWidth,
                height: screenHeight,
            }}
        >
            <Text
                style={{
                    color: "black",
                    alignSelf: "center",
                    marginTop: 50,
                }}
            >
                Collection
            </Text>
        </View>
    );
};

export default index;

const styles = StyleSheet.create({});
