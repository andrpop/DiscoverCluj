import React, { Component } from "react";
import {
  ImageBackground,
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image, StatusBar,
} from "react-native";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import {db} from "./Config";

const win = Dimensions.get("window");


export default class DiscoverScreen extends Component {

  constructor(props) {
    super(props);


    this.state = {
      initialPosition: {

        latitude: 46.770439,
        longitude: 23.591423,
        latitudeDelta: 0.50,
        longitudeDelta: 0.30
      },
      hotels: [],
      coord: {
        latitude: 46.7891292,
        longitude: 23.5917804,
      },
    };

  }


  getHotels() {
    let ref = db.ref('Hotels/');
    ref.on("value", (data) => {

      data.forEach(function (childSnapshot) {
        console.log(childSnapshot.val());
        //let item = childSnapshot.val();
        //item.key = childSnapshot.key;
        //returnArr.push(item);
      });

      this.setState({hotels: returnArr});
    })

  }

  componentDidMount(): void {
    // this.getHotels();
    }


  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: this.state.initialPosition.latitude,
            longitude: this.state.initialPosition.longitude,
            latitudeDelta: this.state.initialPosition.latitudeDelta,
            longitudeDelta: this.state.initialPosition.longitudeDelta
          }}
        >
        </MapView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  searchBox:{
    position: 'absolute',
    flexDirection: 'row',
    backgroundColor: '#fff',
    width:'90%'
  }
});
