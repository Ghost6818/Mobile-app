import { StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>Jak się zaczeło?</Text>
        <Text style={styles.text}>
          Dzięki tej stronie dowiesz się jak zarabiać pieniądze przez słuchanie
          muyzyki.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  infoContainer: {
    alignItems: "center",
    marginVertical: 30,
    backgroundColor: "green",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    fontSize: 15,
    textAlign: "center",
  },
});
