import React from 'react';
import Navigator from './Routes/HomeStack';
import { enableScreens } from 'react-native-screens';
import { Text } from "react-native";
import {ViewPropTypes} from 'deprecated-react-native-prop-types';

enableScreens();

import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);
LogBox.ignoreLogs([
  "ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types'",
]);
LogBox.ignoreLogs([
  "ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types'.",
]);

export default function App() {

  return(
    <Navigator/>
  );

}



