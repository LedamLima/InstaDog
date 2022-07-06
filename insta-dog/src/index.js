import React from "react"
import {StyleSheet } from "react-native";
import Logo from "./components/logo";
import Foto from "./components/DogFoto";


const Main = () => {
  return (
     <> 
    <Logo file={require("./components/assets/images/InstaDog.png" )}/>
    <Foto count={10} file={require("./components/assets/images/dog2.jpg")}/>
    <Foto count={18} file={require("./components/assets/images/dog3.jpg")}/>
    <Foto count={8} file={require("./components/assets/images/dog4.jpg")}/>
    <Foto count={24} file={require("./components/assets/images/dog1.jpg")}/>
    </>
  )
}

export default Main; 



