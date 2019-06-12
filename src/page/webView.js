import React, { Component } from "react";
import { StyleSheet, View, WebView } from "react-native";
import DefaultComponent from '../loading/loading';

export default class App extends DefaultComponent {

  render() {
    return (
      <WebView style={styles.container}  source={{uri: 'http://laizhijia.yidaoit.com/app/index.php?i=10&c=entry&m=ewei_shopv2&do=mobile'}}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
 
});
