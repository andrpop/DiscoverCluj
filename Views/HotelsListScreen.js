import React, {Component} from 'react';
import {
  ImageBackground,
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image, StatusBar,
} from "react-native";
const win = Dimensions.get('window');


export default class HotelsListScreen extends Component {


  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <StatusBar
          hidden={true}
        />
      <Text>
        HOTELS LIST SCREEN
      </Text>
      </View>
    );
  }
}
