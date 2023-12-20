import { StyleSheet } from "react-native";
import { Image } from "expo-image";
import { Text, View } from "../../components/Themed";
import { ScrollView } from "react-native-gesture-handler";
import { useEffect, useState } from "react";
import { Category, getCategory } from "../../db";

export default function TabTwoScreen() {
  const [status, setStatus] = useState("");
  const [category, setCategory] = useState<Category[] | undefined>();

  useEffect(() => {
    getCategory().then((res) => {
      setCategory(res);
    });
  }, [status, category]);

  return (
    <ScrollView>
      <View style={styles.container}>
        {category?.map((categ) => {
          return (
            <View style={styles.infoContainer} key={categ.index}>
              <View style={{ flexGrow: 1, width: "50%" }}>
                <Image
                  style={styles.image}
                  source={categ.logo}
                  contentFit="scale-down"
                  transition={1000}
                />
              </View>
              <View style={{ flexGrow: 1, width: "50%" }}>
                <Text style={styles.title}>{categ.name}</Text>
                <Text style={styles.text}>{categ.query}</Text>
              </View>
            </View>
          );
        })}
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
    margin: 10,
  },
  text: {
    fontSize: 15,
    margin: 10,
    lineHeight: 25,
  },
  image: {
    flex: 1,
    margin: 0,
  },
  infoContainer: {
    flexDirection: "row",
    marginVertical: 20,
    height: 160,
    borderRadius: 15,
    overflow: "hidden",
    width: "80%",
  },
});
