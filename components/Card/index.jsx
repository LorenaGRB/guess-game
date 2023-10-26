import { View } from "react-native";
import { COLORS } from "../../utils/constants";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "../Title/styles";

function Card({ children }) {
  return (
    <View
      style={{
        borderRadius: 10,
        overflow: "hidden",
      }}
    >
      <LinearGradient colors={[COLORS.GRADIENT_1, COLORS.GRADIENT_2]}>
        <View
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            opacity: 1,
          }}
        >
          {children}
        </View>
      </LinearGradient>
    </View>
  );
}

export default Card;
