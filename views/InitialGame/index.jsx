import { View, Text, TextInput } from "react-native";
import Title from "../../components/Title";
import Button from "../../components/Button";
import Card from "../../components/Card";
import { styles } from "./styles";

function InititalGame() {
  return (
    <View style={styles.container}>
      <Title>Guess My Number</Title>

      <Card>
        <Text style={styles.title}>Enter a number</Text>

        <View style={styles.textInputContainer}>
          <TextInput style={styles.textInput} />
        </View>

        <View style={styles.buttonContainer}>
          <Button>RESET</Button>
          <Button>CONFIRM</Button>
        </View>
      </Card>
    </View>
  );
}

export default InititalGame;
