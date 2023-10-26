import React from "react";
import { Pressable, View, Text } from "react-native";
import { COLORS } from "../../utils/constants";

function Button({ children }) {
  return (
    <View
      style={{
        width: "40%",
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.ROSE_TEXT,
        borderRadius: 10,
      }}
    >
      <Pressable>
        <Text style={{ color: COLORS.BLACK }}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default Button;
