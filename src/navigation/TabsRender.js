import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import color, { ColorsConstant } from '../constants/Colors.constant';
// import HomeScreen from '../screen/HomeScreen';
export default function TabsRender({ state, descriptors, navigation }) {
  return (
    <View style={ls.tabsBox}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key],
          label =
            options.tabBarLabel == false
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name ,
              
          isFocused = state.index === index,
          onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          },
          onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
        return (
          <TouchableOpacity
            key={label}
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={ls.activeTab}>
            <View style={isFocused ? ls.activeTabButton : ls.tabButton}>
              {  label == 'Home'  ? 
                  <Image source={require('../asstes/Image/home.png')} style={isFocused ? ls.activeTabIcon : ls.deactiveTabIcon}/>:
                  label == 'Prepare' ?
                    <Image source={require('../asstes/Image/book.png')} style={isFocused ? ls.activeTabIcon : ls.deactiveTabIcon} /> :
                    label == 'Liveclassess' ?
                      <Image source={require('../asstes/Image/smarttv.png')} style={isFocused ? ls.activeTabIcon : ls.deactiveTabIcon} /> :
                   
                        label == 'Myprofile' ?
                          <Image source={require('../asstes/Image/userpr.png')} style={isFocused ? ls.activeTabIcon : ls.deactiveTabIcon} /> : <></>
              }
              <Text style={isFocused ? ls.activeTabText : ls.tabText}> {label} </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
const ls = StyleSheet.create({
  tab: {
    height: 60,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: ColorsConstant.cards,
    flexDirection: 'row',
    alignItems: 'center'
  },
  activeTab: {
    height: 60,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center'
  },
  tabButton: {
    height: 40,
    alignItems: 'center',
    borderRadius: 20
  },
  activeTabButton: {
    borderRadius: 10,
    height: 50,
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    color: ColorsConstant.White,
    color: ColorsConstant.lightWhite,
    fontSize: 10
  },
  activeTabText: {
    color: ColorsConstant.orangedark,
    textTransform: 'capitalize',
    fontSize: 10,
  },
  tabIcon: {
    width: 20,
    height: 20,
    alignSelf: 'center',
    marginTop: 8
  },
  deactiveTabIcon: {
    opacity: 1,
    width: 30,
    height: 30,
    tintColor: ColorsConstant.Black
  },
  activeTabIcon: {
    alignSelf: 'center',
    width: 30,
    height: 30,
    marginTop: -5,
    tintColor: ColorsConstant.orangedark,
  },
  tabsBox: {
    flexDirection: 'row',
    borderTopColor: ColorsConstant.White,
    // borderTopWidth: 1,
    // overflow: 'hidden',
    backgroundColor: ColorsConstant.colortheme
  },
  activeTabhome: {
    alignSelf: 'center',
    width: 50,
    height: 50,
    // marginTop: -10,
    // tintColor: ColorsConstant.White,
    // backgroundColor:ColorsConstant.cards,
    // borderRadius:10,
    // padding:10
   
  },
})