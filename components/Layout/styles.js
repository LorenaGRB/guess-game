import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    margin: 0,
    padding: 0,
  },
  colors: [
    COLORS.ROSE_GRADIENT_1,
    COLORS.ROSE_GRADIENT_2,
    COLORS.ROSE_GRADIENT_3,
  ],
  image: { opacity: 0.3 },
});
