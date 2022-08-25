import React from "react";
import { Button, View, Text, Image, StyleSheet } from "react-native";



export default function homeScreen({navigation}) {
  return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button title="Go to about " onPress={() => navigation.navigate('About')} />
            <Button title="Go to contact" onPress={() => navigation.navigate('Contact')}/>
        </View>
    )
}
