import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  Button,
} from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

const categories = {
  Words: [
    { tagalog: "Aso", english: "Dog" },
    { tagalog: "Pusa", english: "Cat" },
  ],
  Phrases: [
    { tagalog: "Kumusta ka?", english: "How are you?" },
    { tagalog: "Anong pangalan mo?", english: "What is your name?" },
  ],
  Numbers: [
    { tagalog: "Isa", english: "One" },
    { tagalog: "Dalawa", english: "Two" },
  ],
};

export default function HomeScreen() {
  const [selectedCategory, setSelectedCategory] = useState("Words");
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Choose a category:</Text>

      <View style={styles.categories}>
        {Object.keys(categories).map((key) => (
          <Pressable
            key={key}
            onPress={() => setSelectedCategory(key)}
            style={styles.category}
          >
            <Text style={styles.categoryText}>{key}</Text>
          </Pressable>
        ))}
      </View>

      <ScrollView style={styles.list}>
        {categories[selectedCategory].map((item, index) => (
          <TranslationCard
            key={index}
            tagalog={item.tagalog}
            english={item.english}
          />
        ))}
      </ScrollView>

      <Button
        title="Try translating 'Pusa'"
        onPress={() => router.push("/vocab/pusa")}
      />
      <Button title="Go to Settings" onPress={() => router.push("/settings")} />
    </View>
  );
}

function TranslationCard({ tagalog, english }) {
  const [revealed, setRevealed] = useState(false);
  const router = useRouter();

  return (
    <Pressable onPress={() => setRevealed(!revealed)} style={styles.card}>
      <Text style={styles.cardText}>{tagalog}</Text>
      {revealed && (
        <>
          <Text style={styles.translation}>{english}</Text>
          <Button
            title="Quiz me on this"
            onPress={() => router.push(`/quiz/${tagalog.toLowerCase()}`)}
          />
        </>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  categories: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  category: { backgroundColor: "#eee", padding: 10, borderRadius: 10 },
  categoryText: { fontSize: 16 },
  list: { flex: 1 },
  card: {
    padding: 16,
    backgroundColor: "#f9f9f9",
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  cardText: { fontSize: 18, fontWeight: "600" },
  translation: { fontSize: 16, color: "#555", marginTop: 8 },
});
