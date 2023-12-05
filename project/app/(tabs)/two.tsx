import { StyleSheet } from "react-native";
import { Image } from "expo-image";
import { Text, View } from "../../components/Themed";
import { ScrollView } from "react-native-gesture-handler";

export default function TabTwoScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View
          style={styles.infoContainer}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        >
          <View style={{ flexGrow: 1 }}>
            <Text style={styles.title}>Obrazek</Text>
          </View>
          <View style={{ flexGrow: 1 }}>
            <Text style={styles.title}>Nazwa</Text>
            <Text style={styles.title}>Kategoria</Text>
          </View>
        </View>
        <View
          style={styles.infoContainer}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        >
          <View style={{ flexGrow: 1 }}>
            <View style={{ height: "50%", width: "100%", borderRadius: 1000 }}>
              <Image
                style={styles.image}
                source="https://i.ytimg.com/vi/JSPiRQp0GGo/maxresdefault.jpg"
                contentFit="scale-down"
                transition={1000}
              />
            </View>
          </View>
          <View style={{ flexGrow: 1 }}>
            <Text style={styles.title}>Nazwa</Text>
            <Text style={styles.title}>Kategoria</Text>
          </View>
        </View>
        <View
          style={styles.infoContainer}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        >
          <View style={{ flexGrow: 1 }}>
            <Text style={styles.title}>Obrazek</Text>
          </View>
          <View style={{ flexGrow: 1 }}>
            <Text style={styles.title}>Nazwa</Text>
            <Text style={styles.title}>Kategoria</Text>
          </View>
        </View>
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
  title: {
    paddingLeft: 10,
  },
  image: {
    flex: 1,
    width: "100%",
    backgroundColor: "#0553",
    margin: 0,
    borderRadius: 500,
  },
  infoContainer: {
    flexDirection: "row",
    marginVertical: 30,
    height: 160,
    borderRadius: 15,
    width: "80%",
    backgroundColor: "green",
  },
});
