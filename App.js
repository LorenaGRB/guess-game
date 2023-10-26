import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import InititalGame from "./views/InitialGame";
import { COLORS } from "./utils/constants";

export default function App() {
  const screen = <InititalGame />;
  const image = require("./assets/background.png");
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
          {screen}
        </ImageBackground>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    margin: 0,
    padding: 0,
  },
});
