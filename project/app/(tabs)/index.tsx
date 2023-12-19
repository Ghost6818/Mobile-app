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
                <Text>{org.title}</Text>
                <Text>{org.snippet}</Text>
                <Text>{org?.date}</Text>
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
    marginVertical: 30,
  },
  image: {
    flex: 1,
    width: "100%",
    margin: 0,
  },
});
