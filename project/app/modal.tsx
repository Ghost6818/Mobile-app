import { Platform, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { Text, View } from "../components/Themed";
import { PeopleAlsoAsk, getPeopleAlsoAsk } from "../db";
import { ScrollView } from "react-native-gesture-handler";

export default function ModalScreen() {
  const [status, setStatus] = useState("");
  const [peopleAlsoAsk, setPeopleAlsoAsk] = useState<PeopleAlsoAsk[]>([]);

  useEffect(() => {
    getPeopleAlsoAsk().then((res) => {
      setPeopleAlsoAsk(res);
    });
  }, [status, peopleAlsoAsk]);
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Jak się zaczeło?</Text>
        <Text style={styles.text}>
          Nasz projekt zaczą się od wywiadów z osobami, które mają doświadczenie
          z zarabianiem online. Postalowiliśmy sprawdzić czy ludzie są
          zainteresowani tematem. Aplikacja ma pomóc w wyszukaniu firm oraz
          stron sprawdzonych przez nas.
        </Text>
        {peopleAlsoAsk?.map((ask) => {
          return (
            <View style={styles.container} key={ask.index}>
              <View style={{ flexGrow: 1 }}></View>
              <View style={{ flexGrow: 1 }}>
                <Text style={styles.title}>{ask.title}</Text>
                <Text style={styles.title}>{ask.question}</Text>
                <Text style={styles.title}>{ask.snippet}</Text>
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
    marginVertical: 30,
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
