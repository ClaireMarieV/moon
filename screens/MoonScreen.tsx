import { StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { WeekCalendar, CalendarProvider } from "react-native-calendars";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"Moon">) {
  return (
    <View style={styles.container}>
      <CalendarProvider date={new Date()}>
        <WeekCalendar />
      </CalendarProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
