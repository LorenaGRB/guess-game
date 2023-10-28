import React from "react";
import { ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";

function Layout({ children }) {
  const image = require("../../assets/background.png");
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={styles.colors}>
        <ImageBackground
          source={image}
          resizeMode="cover"
          imageStyle={styles.image}
        >
          {children}
        </ImageBackground>
      </LinearGradient>
    </SafeAreaView>
  );
}

export default Layout;
