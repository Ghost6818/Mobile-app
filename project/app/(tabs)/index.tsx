import { StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { Image } from "expo-image";
import { Organic, getOrganic } from "../../db";
import { ScrollView } from "react-native-gesture-handler";

export default function TabOneScreen() {
  const [status, setStatus] = useState("");
  const [organic, setOrganic] = useState<Organic[]>([]);

  useEffect(() => {
    getOrganic().then((res) => {
      setOrganic(res);
    });
  }, [status, organic]);

  return (
    <ScrollView>
      <View style={styles.container}>
        {organic?.map((org) => {
          return (
            <View style={styles.container} key={org.position}>
              <Image
                style={styles.image}
                source={org.link}
                contentFit="scale-down"
                transition={1000}
              />
              <View>
                <Text style={styles.title}>{org.title}</Text>
                <Text style={styles.text}>{org.snippet}</Text>
                <Text style={styles.text}>{org?.date}</Text>
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
    marginVertical: 20,
    backgroundColor: "white",
    borderRadius: 15,
    overflow: "hidden",
  },
  image: {
    flex: 1,
    width: "100%",
    margin: 0,
  },
  title: {
    margin: 10,
  },
  text: {
    fontSize: 15,
    margin: 10,
    lineHeight: 25,
  },
});
