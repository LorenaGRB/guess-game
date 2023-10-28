import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/constants";

export const styles = StyleSheet.create({
  container: {
    width: "40%",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.ROSE_TEXT,
    borderRadius: 10,
  },
  text: {
    color: COLORS.BLACK,
  },
});
