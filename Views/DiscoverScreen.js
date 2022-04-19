import React, { Component } from "react";
import {
  Text, View, StyleSheet, Dimensions, Image, StatusBar, TouchableOpacity, Platform, ScrollView, PermissionsAndroid
} from "react-native";
import MapView, { Circle, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { db } from "../Firebase/Firebase";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Fontisto from "react-native-vector-icons/Fontisto";
import Svg, { Ellipse,Path } from "react-native-svg";

const win = Dimensions.get("window");
let returnArr = [];
let test = [];
let dbPath = "";
const LATITUDE_DELTA = 0.15;
const LONGITUDE_DELTA = 0.15;
navigator.geolocation = require("@react-native-community/geolocation");
const mapRef = React.createRef();


export default class DiscoverScreen extends Component {

  async  requestLocationPermission() {

    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION ,
        {
          title: "DiscoverCluj device location Permission",
          message:
            "DiscoverCluj needs access to your device location ",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        this.getCoords();
      } else {
        console.log("Device location permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  }


   componentDidMount() {
    this.requestLocationPermission()

     setTimeout(() => {
       this.changeRegion();     }, 2500);

  }

  constructor(props) {
    super(props);


    this.state = {
      initialPosition: {

        latitude: 46.770439,
        longitude: 23.591423,
        latitudeDelta: 0.50,
        longitudeDelta: 0.30,
      },
      pinsList: [],
      categories: [
        {
          name: "Atractii",
          icon: <MaterialIcons style={styles.chipsIcon} name="photo-camera" size={18} />,
        },
        {
          name: "Restaurante",
          icon: <Ionicons name="ios-restaurant" style={styles.chipsIcon} size={18} />,
        },
        {
          name: "Cazare",
          icon: <Fontisto name="hotel" style={styles.chipsIcon} size={18} />,
        },
        {
          name: "Agrement",
          icon: <MaterialIcons name="sports-handball" style={styles.chipsIcon} size={18} />,
        },
      ],
      isLoading: true,
      userPosition: {
        latitude: 46.7689,
        longitude: 23.5912,
        latitudeDelta: 0.15,
        longitudeDelta: 0.15,
      },
    };

  }


  getCoords() {
    navigator.geolocation.getCurrentPosition((position) => {
        let lat = parseFloat(position.coords.latitude);
        let long = parseFloat(position.coords.longitude);
        let initialRegion = {
          latitude: lat,
          longitude: long,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        };
        this.setState({ userPosition: initialRegion });
      },
    );
  }

  changeRegion(){
    const latitude = this.state.userPosition.latitude;
    const longitude = this.state.userPosition.longitude

    mapRef.current.animateToRegion({
      latitude,
      longitude,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01
    })
  }


  getPins(path) {
    this.setState({ pinsList: test });
    dbPath = path + "/";
    let ref = db.ref(dbPath);
    ref.on("value", (data) => {
      data.forEach(function(childSnapshot) {
        let item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
      });
      this.setState({ pinsList: returnArr });
    });
  }




  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <MapView
          // showsUserLocation={true}
          userLocationUpdateInterval={2000}
          ref={mapRef}
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: this.state.initialPosition.latitude,
            longitude: this.state.initialPosition.longitude,
            latitudeDelta: this.state.initialPosition.latitudeDelta,
            longitudeDelta: this.state.initialPosition.longitudeDelta,
          }}
        >
          {this.state.pinsList.map((marker, i) => (
            <Marker
              key={i}
              coordinate={{
                latitude: marker.Latitude,
                longitude: marker.Longitude,
              }}
            >
            </Marker>
          ))}

          <Marker
            coordinate={{
              latitude: this.state.userPosition.latitude,
              longitude: this.state.userPosition.longitude,
            }}
            title={"This is your current location"}
          >
            <Image source={require('../Images/userLocation.png')} style={{height: 30, width:30 }} />

          </Marker>

        </MapView>
        <View style={styles.headerBox}>
          <View

            style={{
              flex: 1,
              flexDirection: "row",
              paddingTop: 10,
              marginBottom: 10,
              paddingHorizontal: 5,
              height: 70,
              width: "100%",
              backgroundColor: "#FFA500",
              alignItems: "flex-start",
              fontWeight: "bold",
              shadowColor: "#ccc",
              shadowOffset: { width: 0, height: 5 },
              shadowOpacity: 0.5,
              elevation: 4,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.openDrawer();
              }}>
              <Image
                source={require("../Images/menu.png")}
                style={styles.menuButtonStyle}
              />
            </TouchableOpacity>
            <View
              style={styles.chipHeaderImage}>
              <Image source={require("../Images/Header1.png")}
                     style={styles.headerImage} />
            </View>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.jumpTo("Favourites");
              }}>
              <Image
                source={require("../Images/heart.png")}
                style={styles.heartIconStyle}

              />
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            height={50}
            style={styles.chipsScrollView}
            contentContainerStyle={{
              paddingRight: Platform.OS === "android" ? 20 : 0,
            }}
          >
            {this.state.categories.map((category, index) => (
              <TouchableOpacity key={index} style={styles.chipsItem}
                                onPress={() => this.getPins(this.state.categories[index].name)}
              >
                {category.icon}
                <Text>{category.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  headerImage: {
    marginBottom: 15,
    marginLeft: 10,
    height: 50,
    width: 270,
  },

  chipHeaderImage: {
    alignSelf: "center",
  },

  menuButtonStyle: {
    width: 40,
    resizeMode: "contain",
    height: 40,
    marginLeft: 10,
    marginTop: 10,
  },
  heartIconStyle: {
    marginTop: 5,
    marginLeft: 25,
    width: 40,
    resizeMode: "contain",
    height: 40,
  },
  headerBox: {
    display: "flex",
    flexDirection: "column",
    resizeMode: "contain",
    position: "absolute",
    width: "100%",
  },
  chipsScrollView: {
    width: "100%",
    paddingTop: 10,
  },
  chipsItem: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 8,
    paddingHorizontal: 10,
    marginHorizontal: 5,
    height: 35,
    shadowColor: "#ccc",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 4,
  },
  chipsIcon: {
    marginRight: 5,
  },
});
