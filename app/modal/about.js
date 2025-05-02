import { View, Text, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function AboutModal() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>About filipiKNOW</Text>
      <Text style={styles.text}>
        This app helps you learn Tagalog through categories and quizzes. Tap a
        word to reveal its meaning or test yourself with interactive questions.
      </Text>
      <Button title="Close" onPress={() => router.dismiss()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  text: { fontSize: 16, textAlign: "center", marginBottom: 20 },
});
