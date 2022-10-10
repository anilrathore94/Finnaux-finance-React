import { StyleSheet, } from 'react-native'
import { ColorsConstant } from './Colors.constant'
import { fontFamily } from './font'
import { screenHeight, screenWidth } from './Sizes.constant'
export const c = ColorsConstant, StyleConstants = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ColorsConstant.White,
        flex: 1,
        alignItems: "center", 
        width:screenWidth,
        paddingHorizontal:20  
    },
    modalLayer: {
        backgroundColor: c.DarkLight,
        opacity: 0.7,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    Textinput: {
        width: '100%' ,
        // flex:1,
        height: 40,
        marginTop:10,
        borderRadius: 8,
        paddingHorizontal: 10,
        borderColor: ColorsConstant.themeColor,
        // borderBottomWidth:0.5
        borderWidth:1
    },
    btnoutline: {
        borderWidth: 1,
        width:screenWidth-32,
        // flex: 1,
        height: 50,
        borderRadius: 8,
        paddingHorizontal: 15,
        borderColor: ColorsConstant.White,
        // marginTop: 16
        marginBottom:16
    },
    RowView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    icon: {
        height: 20,
        width: 20,
    },
    textsigup: {
        color: ColorsConstant.White,
        paddingHorizontal: 15,
        fontSize: 16,
        fontFamily: fontFamily.medium,
    },
    bottunth: {
        backgroundColor: ColorsConstant.themeColor,
        borderRadius: 8,
        height: 46,
        justifyContent: 'center',
        width: screenWidth /2
        // flex:1
    },
    errText: {
        color: ColorsConstant.Error,
        fontSize: 12,
        fontFamily: fontFamily.Regular,
        marginTop:-10,
        marginLeft:50,
        width:screenWidth-32
    },
    ImageI: {
        width: 15,
        height: 15
    },
    cardViewkyc: {
        marginTop: 25,
        backgroundColor: c.cardligth,
        paddingVertical: 20,
        paddingHorizontal: 5,
        borderRadius: 10,
        elevation: 5
    },
    TextBold: {
        color: ColorsConstant.Black,
        fontSize: 18,
        fontFamily: fontFamily.semiBold,
    },
    modalManView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "flex-end"
    },
    modalLhare: {
        backgroundColor: c.DarkLight,
        opacity: 0.7,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    modalView: {
        backgroundColor: c.White,
        borderRadius: 1,
        padding: 10,
        width: screenWidth-20,
        
        // borderRadius:10
    },
    textStylemodal: {
        color: c.Black,
        padding: 10,
        fontFamily:fontFamily.medium
    },
    textitem:{
        color: c.themeColor,
        fontSize:12,
        fontFamily:fontFamily.medium
    },
    textStyle:{
        color:c.Black
    },
    codeFieldRoot: {
        marginTop: 40,
        width:screenWidth-100,
        alignSelf:'center'
    },
    cell: {
        bottom:10,
        width: 40,
        borderRadius:10,
        height: 40,
        lineHeight: 38,
        fontSize: 24,
        borderWidth: 2,
        borderWidth: 2,
        borderColor:ColorsConstant.themeColor, 
        textAlign: 'center',
        color:ColorsConstant.themeColor
    },
    focusCell: {
        borderColor:ColorsConstant.themeColor, 
    },
    securityCheck: {
        width: 35,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },

})