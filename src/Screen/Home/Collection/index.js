import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { screenWidth, screenHeight } from "./../../../constants/Sizes.constant";
// import rightIcon from "./../../../asstes/icon/next.png";

function Collection(props) {
    const { navigation } = props;
    return (
        <View style={styles.collectionView}>
            <View style={styles.collectionBoxOuterContainer}>
                <TouchableOpacity
                    style={styles.collectionBoxContainer}
                    onPress={() => {
                        navigation("CollectionList", {
                            backScreen: "Collection",
                        });
                    }}
                >
                    {/* <Image
                        source={rightIcon}
                        style={{
                            color: "#fff",
                            backgroundColor: "#4DC3A3",
                            paddingHorizontal: 20,
                            paddingVertical: 20,
                            borderBottomLeftRadius: 10,
                            borderTopLeftRadius: 10,
                            // fontSize: 20,
                            paddingHorizontal: 40,
                            // alignItems: "center",
                            // justifyContent: "center",
                            // fontSize: 10,
                            // margin: 10,
                        }}
                    /> */}
                    <Text style={{ color: "#4DC3A3", fontSize: 20 }}>
                        Images
                    </Text>
                    <Text style={styles.collectionBoxMiddle}>
                        My Collection
                    </Text>
                    <Text style={{ color: "#4DC3A3", fontSize: 20 }}>5</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    collectionView: {
        width: screenWidth,
        height: screenHeight,
    },
    collectionBoxOuterContainer: { marginHorizontal: 15 },
    collectionBoxContainer: {
        flexDirection: "row",
        backgroundColor: "#fff",
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#4DC3A3",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
        paddingRight: 15,
        height: 100,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4.84,
        elevation: 8,
    },
    collectionBoxLeft: {},
    collectionBoxMiddle: { fontSize: 20, color: "#4DC3A3" },
    collectionBoxRight: {},
});
export default Collection;
