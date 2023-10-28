import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 30,
    alignItems: "center",
  },
  title: {
    color: COLORS.ROSE_TEXT,
    fontSize: 18,
    textAlign: "center",
    marginVertical: 10,
  },
  textInputContainer: {
    borderBottomColor: COLORS.WHITE,
    borderBottomWidth: 3,
    width: 100,
  },
  textInput: {
    fontSize: 60,
    color: COLORS.WHITE,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 30,
    marginBottom: 20,
    justifyContent: "space-around",
    width: "100%",
  },
});
