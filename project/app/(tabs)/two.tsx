import { StyleSheet } from "react-native";

import { Text, View } from "../../components/Themed";
import { ScrollView } from "react-native-gesture-handler";

export default function TabTwoScreen() {
  return (
    <ScrollView style={styles.container}>
      <View
        style={styles.infoContainer}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      >
        <Text>Kategoria</Text>
      </View>
      <View
        style={styles.infoContainer}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      >
        <Text>Kategoria</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  infoContainer: {
    marginVertical: 30,
    height: 160,
    borderRadius: 15,
    width: "80%",
    backgroundColor: "green",
  },
});
