import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import stores from "./store";
import { Provider } from "mobx-react";
import Home from './page/home';
import One from './page/one';
import WebView from './page/webView';



const RootStack = createStackNavigator(
  {
    Home: Home,
    One: One,
    WebView:WebView
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
