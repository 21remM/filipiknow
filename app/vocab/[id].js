import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { useState, useEffect } from "react";
import { useLocalSearchParams, useRouter, useNavigation } from "expo-router";

export default function VocabEntryScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const navigation = useNavigation();
  const [userTranslation, setUserTranslation] = useState("");

  useEffect(() => {
    if (id) {
      navigation.setOptions({ title: `Translate: ${id}` });
    }
  }, [id]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Translate this word:</Text>
      <Text style={styles.word}>{id}</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter the English translation"
        value={userTranslation}
        onChangeText={setUserTranslation}
      />

      {userTranslation.length > 0 && (
        <Text style={styles.result}>
          You entered: <Text style={styles.bold}>{userTranslation}</Text>
        </Text>
      )}

      <Button
        title="See usage examples"
        onPress={() => router.push(`/vocab/${id}/details`)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  title: { fontSize: 22, marginBottom: 10 },
  word: { fontSize: 26, fontWeight: "bold", marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    fontSize: 18,
    marginBottom: 20,
  },
  result: { fontSize: 18 },
  bold: { fontWeight: "bold", color: "#2a9d8f" },
});
