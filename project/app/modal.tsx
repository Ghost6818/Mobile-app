import { Platform, StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>Jak się zaczeło?</Text>
        <Text style={styles.text}>
          {" "}
          Nasz projekt zaczą się od wywiadów z osobami, które mają doświadczenie
          z zarabianiem online. Postalowiliśmy sprawdzić czy ludzie są
          zainteresowani tematem. Aplikacja ma pomóc w wyszukaniu firm oraz
          stron sprawdzonych przez nas.
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
