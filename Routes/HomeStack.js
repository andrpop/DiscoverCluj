import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import HomeScreen from "../Views/HomeScreen";
import TabNavigator from "./TabNavigator";
import {ViewPropTypes} from 'deprecated-react-native-prop-types';


const  screens = {
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerShown: false,
    }
  },
  TabNavigator: {
    screen: TabNavigator,
    navigationOptions: {
      headerShown: false,
    },
  }
};

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);
