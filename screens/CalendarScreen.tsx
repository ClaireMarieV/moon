import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import { Calendar } from "react-native-calendars";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Calendar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
