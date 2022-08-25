import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer  } from "react-navigation";
import { createStackNavigator  } from "react-navigation-stack";

import homeScreen from "./components/homeScreen";
import aboutScreen from "./components/aboutScreen";


export default function App() {
  return <AppContainer />
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: homeScreen
  },
  About: {
    screen: aboutScreen
  }
},{
  initialRouteName: 'Home'
})

const AppContainer = createAppContainer(AppNavigator)

