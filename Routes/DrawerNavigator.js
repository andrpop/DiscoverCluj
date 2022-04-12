import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";
import DiscoverScreen from "../Views/DiscoverScreen";

import { createDrawerNavigator } from "@react-navigation/drawer";
import HotelsListScreen from "../Views/HotelsListScreen";
import { Component } from "react";


const Drawer = createDrawerNavigator();


let color = "#fff";

export default class DrawerNavigator extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavigationContainer>

        <Drawer.Navigator initialRouteName="Discover">
          <Drawer.Screen name="Discover" component={DiscoverScreen} options={{ headerShown: false }} />
          <Drawer.Screen name="Hotels" component={HotelsListScreen} options={{ headerShown: false }}/>
        </Drawer.Navigator>
        {/*<Navigator />*/}

      </NavigationContainer>
    );
  }

}

