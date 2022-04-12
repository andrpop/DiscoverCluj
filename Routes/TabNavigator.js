import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";
import DiscoverScreen from "../Views/DiscoverScreen";
import HotelsListScreen from "../Views/HotelsListScreen";
import { ViewPropTypes } from "deprecated-react-native-prop-types";


const Tab = createMaterialBottomTabNavigator();


let color = "#fff";

function MyTabs() {

  return (
    <Tab.Navigator
      initialRouteName="Atractii"
      activeColor="white"
      barStyle={{ backgroundColor: "tomato" }}
    >
      <Tab.Screen
        name="Atractii"

        component={DiscoverScreen}

        options={{
          headerShown: false,
          tabBarLabel: "Atractii",
          tabBarColor: "grey",
          tabBarIcon:  ({color, focused}) => (
            <Icon
              focused={focused}
              color={color}
              name="photo-camera" size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Restaurante"
        component={DiscoverScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Restaurante",
          tabBarColor: "grey",
          tabBarIcon: ({color, focused}) => (
            <Icon
              focused={focused}
              color={color}
              name="restaurant" size={25} />
          ),

        }}
      />
      <Tab.Screen
        name="Cazare"
        component={DiscoverScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Cazare",
          tabBarColor: "grey",
          tabBarIcon: ({ color, focused }) => (
            <Icon
              focused={focused}
              color={color}
              name="business" size={25} />
          ),

        }}
      />
      <Tab.Screen
        name="Agrement"
        component={DiscoverScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Agrement",
          tabBarColor: "grey",
          tabBarIcon: ({ color, focused }) => (
            <Icon
              focused={focused}
              color={color}
              name="sports-handball" size={25} />
          ),

        }}
      />

    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
