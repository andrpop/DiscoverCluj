import React, {Component} from 'react';
import {
  ImageBackground,
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image
} from "react-native";
const win = Dimensions.get('window');


export default class HotelsListScreen extends Component {


  render() {
    const { navigate } = this.props.navigation;
    return (
      <Text>
        HOTELS LIST SCREEN
      </Text>
    );
  }
}
