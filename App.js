import { ViewPropTypes } from "deprecated-react-native-prop-types";
import React from "react";
import Navigator from "./Routes/HomeStack";
import { enableScreens } from "react-native-screens";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import DiscoverScreen from "./Views/DiscoverScreen";
import HotelsListScreen from "./Views/HotelsListScreen";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./Views/HomeScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, StatusBar, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';


const Stack = createNativeStackNavigator();
enableScreens();

console.disableYellowBox = true; //disable yellow bottom box of Warnings

const Drawer = createDrawerNavigator();


export default function App() {

  return (
    <NavigationContainer>

      <Drawer.Navigator initialRouteName="Discover" >
        <Drawer.Screen name="Discover" component={DiscoverScreen} options={{headerShown: false}} />
        <Drawer.Screen name="Hotels" component={HotelsListScreen} options={{headerShown: false}} />
      </Drawer.Navigator>

    </NavigationContainer>
  );

}
