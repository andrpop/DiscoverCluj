import React, { Component } from "react";
import {
  ImageBackground,
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image, StatusBar, TouchableOpacity, TextInput, TouchableHighlight, Platform, ScrollView, Alert,
} from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { db } from "../Firebase/Firebase";
import CustomSidebarMenu from "./CustomSidebarMenu";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Button from "react-native-button";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Fontisto from "react-native-vector-icons/Fontisto";

const win = Dimensions.get("window");
let returnArr = [];
let test = [];
let dbPath='';


export default class DiscoverScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      initialPosition: {

        latitude: 46.770439,
        longitude: 23.591423,
        latitudeDelta: 0.50,
        longitudeDelta: 0.30,
      },
      pinsList:[],
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
          icon: <MaterialIcons name="sports-handball" style={styles.chipsIcon} size={18} />
        },
      ],
      isLoading: true,
      coord: {
        latitude: 46.7891292,
        longitude: 23.5917804,
      },
    };

  }

  getPins(path){
    this.setState({pinsList:test});
    dbPath=path+"/";
    let ref = db.ref(dbPath);
    ref.on("value",(data)=>{
      data.forEach(function(childSnapshot){
        let item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
      });
      this.setState({pinsList:returnArr})
    })
  }


  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <MapView
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

        </MapView>
        <View style={styles.headerBox}>
          <Button
            onPress={() => {
              this.props.navigation.openDrawer();
            }}
            containerStyle={{
              marginLeft: 5,
              height: 50,
              width: 150,
              overflow: "hidden",
              backgroundColor: "#FFA500",
              borderTopRightRadius: 20,
              borderBottomRightRadius: 20,
              borderTopLeftRadius:5,
              borderBottomLeftRadius:5,
              alignItems:"flex-start",
              fontWeight:"bold"
            }}
            style={{ fontSize: 15, color: "black", marginLeft: 10 }}

          >
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.openDrawer();
              }}>
              <Image
                source={require("../Images/menu-icon1.png")}
                style={styles.floatingButtonStyle}

              />
            </TouchableOpacity>
            <Text
              style={{fontWeight:"bold", fontSize: 20, color: "black", marginLeft: 10 }}
            >MENIU</Text>
          </Button>
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
                                onPress={()=>this.getPins(this.state.categories[index].name)}
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

  floatingButtonStyle: {
    // marginLeft: 20,
    // flexDirection: "row",
    // alignSelf: "flex-start",
    // backgroundColor: "#ffaf03",
    width: 40,
    resizeMode: "contain",
    // borderRadius: 40,
    height: 40,
    // shadowColor: "#ccc",
    // shadowOpacity: 0.5,
    // shadowRadius: 10,
    // shadowOffset: { width: 3, height: 10 },
    // // elevation: 10,
  },
  headerBox: {
    display: "flex",
    flexDirection: "column",
    resizeMode: "contain",
    position: "absolute",
    width: "100%",
    marginTop: 10,
    paddingTop: 10,
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
