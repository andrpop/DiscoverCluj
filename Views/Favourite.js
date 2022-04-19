import React, { Component } from "react";
import {
  ImageBackground,
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  StatusBar,
  TouchableHighlight,
} from "react-native";
import Button from "react-native-button";
import TabNavigator from "../Routes/TabNavigator";

const win = Dimensions.get("window");


export default class FavouriteScreen extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <StatusBar
          hidden={true}
        />
        <Text>
          Favourites Screen
        </Text>
      </View>
    );
  }
}
