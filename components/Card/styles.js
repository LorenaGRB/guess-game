import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/constants";

export const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    overflow: "hidden",
  },
  colors: [COLORS.GRADIENT_1, COLORS.GRADIENT_2],
  card: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    opacity: 1,
  },
});
