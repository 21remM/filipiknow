import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect } from "react";

export default function VocabDetails() {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();

  useEffect(() => {
    if (id) {
      navigation.setOptions({ title: `Usage` });
    }
  }, [id]);

  const examples = {
    pusa: "Ang pusa ay nasa ilalim ng mesa. (The cat is under the table.)",
    aso: "Ang aso ay tumatakbo sa labas. (The dog is running outside.)",
    isa: "May isa akong lapis. (I have one pencil.)",
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>How to use the word: {id}</Text>
      <Text style={styles.text}>{examples[id] || "No example available."}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  text: { fontSize: 18, color: "#333" },
});
