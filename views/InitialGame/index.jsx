import { View, Text, TextInput } from "react-native";
import Title from "../../components/Title";
import { COLORS } from "../../utils/constants";
import Button from "../../components/Button";
import Card from "../../components/Card";

function InititalGame() {
  return (
    <View style={{ flex: 1, width: "100%", padding: 30, alignItems: "center" }}>
      <Title>Guess My Number</Title>
      <Card>
        <Text
          style={{
            color: COLORS.ROSE_TEXT,
            fontSize: 18,
            textAlign: "center",
            marginVertical: 10,
          }}
        >
          Enter a number
        </Text>

        <View
          style={{
            borderBottomColor: COLORS.WHITE,
            borderBottomWidth: 3,
            width: 100,
          }}
        >
          <TextInput
            style={{
              fontSize: 60,
              color: COLORS.WHITE,
              textAlign: "center",
            }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            marginTop: 30,
            marginBottom: 20,
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <Button>RESET</Button>
          <Button>CONFIRM</Button>
        </View>
      </Card>
    </View>
  );
}

export default InititalGame;
