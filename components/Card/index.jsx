import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";

function Card({ children }) {
  return (
    <View style={styles.container}>
      <LinearGradient colors={styles.colors}>
        <View style={styles.card}>{children}</View>
      </LinearGradient>
    </View>
  );
}

export default Card;
