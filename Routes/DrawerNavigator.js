import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DiscoverScreen from "../Views/DiscoverScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HotelsListScreen from "../Views/HotelsListScreen";
import { Component } from "react";
import FavouriteScreen from "../Views/Favourite";
import { DrawerContent } from "./DrawerContent";

const Drawer = createDrawerNavigator();


let color = "#fff";

export default class DrawerNavigator extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Discover"  drawerContent={props => <DrawerContent {...props}/>}>
          <Drawer.Screen name="Discover" component={DiscoverScreen} options={{headerShown: false}} />
          <Drawer.Screen name="Hotels" component={HotelsListScreen} options={{headerShown: false}} />
          <Drawer.Screen name="Favourites" component={FavouriteScreen} options={{ headerShown: false }}/>
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }

}

