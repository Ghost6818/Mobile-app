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
              <View style={{ flexGrow: 1 }}>
                <Image
                  style={styles.image}
                  source={categ.logo}
                  contentFit="scale-down"
                  transition={1000}
                />
              </View>
              <View style={{ flexGrow: 1 }}>
                <Text style={styles.title}>{categ.name}</Text>
                <Text style={styles.title}>{categ.query}</Text>
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
    paddingLeft: 10,
  },
  image: {
    flex: 1,
    width: "100%",
    backgroundColor: "green",
    margin: 0,
    borderRadius: 500,
  },
  infoContainer: {
    flexDirection: "row",
    marginVertical: 30,
    height: 160,
    borderRadius: 15,
    width: "80%",
  },
});
