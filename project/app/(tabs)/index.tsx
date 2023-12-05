import { StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { Image } from "expo-image";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source="https://i.ytimg.com/vi/JSPiRQp0GGo/maxresdefault.jpg"
        contentFit="scale-down"
        transition={1000}
      />
      <View>
        <Text>Instrukcja</Text>
        <Text>1. Wejdź na naszą stronę.</Text>
        <Text>2. Wybierz kategorię.</Text>
        <Text>2. Wyślij swoją pierwszą recenzje po przeczytaniu książki.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  infoContainer: {
    alignItems: "center",
    marginVertical: 30,
    backgroundColor: "green",
  },
  image: {
    flex: 1,
    width: "100%",
    backgroundColor: "#0553",
    margin: 0,
  },
});
