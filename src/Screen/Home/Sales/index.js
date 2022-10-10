import { ImageBackground, StyleSheet, Text, View,FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { screenWidth, screenHeight } from "./../../../constants/Sizes.constant";
import { get_sales_menu } from "../../../services/Sales";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loading from "./../../../component/loading"; 
const index = () => {
    const [menu, setMenu] = useState([]);
    const [load, setLoad] = useState(false)
    useEffect(() => {
        get_menu();
    }, []);
    const get_menu = async () => {
        let empId= await AsyncStorage.getItem("empId");
        let data = {
            LoginUserId: empId
        };
        setLoad(true);
        let result = await get_sales_menu(data);
        console.log("response Data === ", result);
        if(result.length > 0){
            setLoad(false);
        }
        // 
       setMenu(result);
    };

    const _render_menu_Item= ({ item, index }) => {
        return (   
        <ImageBackground
                source={require("./../../../asstes/image/cardBg.jpeg")}
                style={styles.boxContainer}
                key={index}
            >
                <Text
                    style={styles.textNumberStyle}
                    onPress={() => {
                        goToCollection_method();
                    }}
                >
                    {item.ItemCount}
                </Text>
                <Text style={styles.textTitleStyle}>
                    {item.EmpProcessName}
                </Text>
            </ImageBackground>
        ) 
    }
    return (
        <View
            style={[ 
                {
                    width: screenWidth,
                    height: screenHeight,
                    paddingBottom:screenHeight/3 + 80
                },
            ]}
        >
           {load && <Loading />}
           <FlatList
                    data={menu}
                    renderItem={_render_menu_Item}
                    numColumns={3}
                    keyExtractor={(item, index) => index} 
                />
              
        </View>
        
    );
};

export default index;

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    boxContainer: {
        width: screenWidth / 3 - 18,
        height: 100,
        borderRadius: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        margin: 9,
        borderWidth: 1,
        borderColor: "#D9D9D9",
        backgroundColor: "#4DC3A3",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4.84,

        elevation: 8,
    },
    textNumberStyle: {
        color: "#4DC3A3",
        fontSize: 18,
        fontWeight: "bold",
        alignSelf: "flex-end",
    },
    textTitleStyle: { color: "#fff", textAlign: "center", marginTop: 25 },
});
