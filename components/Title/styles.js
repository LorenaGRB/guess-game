import { COLORS } from "../../utils/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    borderColor: COLORS.WHITE,
    borderWidth: 1,
    padding: 15,
    marginVertical: 30,
  },
  text: { color: COLORS.WHITE, fontSize: 32, fontWeight: "700" },
});
