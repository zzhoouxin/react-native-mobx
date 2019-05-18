
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { observer, inject } from "mobx-react";

@observer
@inject("homeStore")
@inject("oneStore")
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{this.props.homeStore.homeNum}</Text>
        <Text style={styles.instructions}>
          oneStore的number1为:{this.props.oneStore.oneNum}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
