import React from "react";
import { enableScreens } from "react-native-screens";
import DrawerNavigator from "./Routes/DrawerNavigator";


enableScreens();
console.disableYellowBox = true; //disable yellow bottom box of Warnings

export default function App() {

  return (
    <DrawerNavigator />
  );

}
