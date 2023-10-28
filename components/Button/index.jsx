import React from "react";
import { Pressable, View, Text } from "react-native";
import { styles } from "./styles";

function Button({ children }) {
  return (
    <View style={styles.container}>
      <Pressable>
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default Button;
