import React from "react";
import { Provider } from "mobx-react";
import Home from "./page/home";
import stores from "../src/store";
export default class Root extends React.Component {
  render() {
    return (
      <Provider {...stores}>
        <Home />
      </Provider>
    );
  }
}
