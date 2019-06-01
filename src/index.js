import React from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import stores from "./store";
import { Provider } from "mobx-react";
import Home from './page/home';
import One from './page/one';



const RootStack = createStackNavigator(
  {
    Home: Home,
    One: One
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return (
      <Provider {...stores}>
        <AppContainer />
      </Provider>
    );
  }
}
