import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer  } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from 'react-native-ionicons';

import homeScreen from "./components/homeScreen";
import aboutScreen from "./components/aboutScreen";
import contactScreen from "./components/contactScreen";


export default function App() {
  return(
    <NavigationContainer>
      <AppNavigator.Navigator useLegacyImplementation InitialRouteName="Home">
        <AppNavigator.Screen name='Home' component={homeScreen} options= {{drawerIcon: ({ focused, size }) => (
    <Image
      source={require('./assets/botao-home.ico')}
      style={[focused ? '#7cc' : '#ccc', { height: size, width: size }]}/>)}}/>
        <AppNavigator.Screen name='About' component={aboutScreen}options= {{drawerIcon: ({ focused, size }) => (
    <Image
      source={require('./assets/information.ico')}
      style={[focused ? '#7cc' : '#ccc', { height: size, width: size }]}/>)}}/>
        <AppNavigator.Screen name='Contact' component={contactScreen}options= {{drawerIcon: ({ focused, size }) => (
    <Image
      source={require('./assets/support.ico')}
      style={[focused ? '#7cc' : '#ccc', { height: size, width: size }]}/>)}}/>
      </AppNavigator.Navigator>
    </NavigationContainer>
  )
}

const AppNavigator = createDrawerNavigator();


