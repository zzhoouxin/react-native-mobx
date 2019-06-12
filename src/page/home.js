import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import { observer, inject } from "mobx-react";
import DefaultComponent from '../loading/loading';
import {sendGA} from "../loading/decorator";

@inject("homeStore")
@inject("oneStore")
@observer
@sendGA("打点的页面")
export default class App extends DefaultComponent {


  componentDidMount(){
    setTimeout(()=>{
      this.setSuccessPage()
    },2000)
  }



  _render() {
    let { homeNum } = this.props.homeStore;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>首页</Text>
        <Text style={styles.welcome}>homeSoter里面的numBer:{homeNum}</Text>
        <Text style={styles.welcome}>
          1oneStore里面的numBer:{this.props.oneStore.oneNum}
        </Text>
        <View>
          <TouchableOpacity
            style={[styles.addNumberView, { backgroundColor: "red" }]}
            onPress={() => {
              this.props.homeStore.addNum();
            }}
          >
            <Text style={{ color: "white" }}>homeNum点击添加+1</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.addNumberView,
              { backgroundColor: "green", marginTop: 10 }
            ]}
            onPress={() => {
              this.props.homeStore.lessNum();
            }}
          >
            <Text style={{ color: "white" }}>homeNum点击减少-1</Text>
          </TouchableOpacity>
          <Button
            title="去第二个页面"
            onPress={() => this.props.navigation.navigate("One")}
          />
        </View>
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
  title: {
    fontSize: 30,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  addNumberView: {
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    height: 30
  }
});
