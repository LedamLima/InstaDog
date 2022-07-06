import React from "react";
import {Image, Text, View,StyleSheet } from "react-native";

const Logo = ({file}) => {
  return (
  <View>
   <Image style={styles.logo} source={file} />
   </View>
  )};
const styles = StyleSheet.create({
  logo:{
    marginVertical:20,
    height: 80,
    width: 280,
    alignItems: "center",
  }
})
export default Logo;