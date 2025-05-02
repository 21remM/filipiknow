import { View, Text, StyleSheet, Image, Button } from "react-native";
import { useRouter } from "expo-router";

export default function Welcome() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <Text style={styles.title}>Welcome to filipiKNOW</Text>
      <Text style={styles.subtitle}>Tap below to begin learning Tagalog!</Text>
      <Button
        title="Start Learning"
        onPress={() => router.replace("/(tabs)/home")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: { width: 200, height: 200, marginBottom: 20, resizeMode: "contain" },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 10 },
  subtitle: {
    fontSize: 18,
    color: "#666",
    textAlign: "center",
    marginBottom: 30,
  },
});
