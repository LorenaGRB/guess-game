import React from "react";
import { ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../../utils/constants";

function Layout() {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={[
          COLORS.ROSE_GRADIENT_1,
          COLORS.ROSE_GRADIENT_2,
          COLORS.ROSE_GRADIENT_3,
        ]}
        style={styles.container}
      >
        <ImageBackground
          source={image}
          resizeMode="cover"
          imageStyle={{ opacity: 0.3 }}
          style={styles.container}
        >
          {children}
        </ImageBackground>
      </LinearGradient>
    </SafeAreaView>
  );
}

export default Layout;
