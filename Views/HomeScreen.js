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


export default class HomeScreen extends Component {

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
        <Button
          containerStyle={{
            marginTop: 50,
            marginLeft: 200,
            height: 50,
            width: 180,
            overflow: "hidden",
            backgroundColor: "#FFA500",
            borderRadius: 20,
          }}
          style={{ fontSize: 15, color: "black" }}
          onPress={() => this.props.navigation.navigate("TabNavigator")}>
         Discopera Aplicatia
        </Button>
        {/*</View>*/}
      </View>
    );
  }
}
