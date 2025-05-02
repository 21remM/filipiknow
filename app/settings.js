import { View, Text, StyleSheet, Switch, Button } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function SettingsScreen() {
  const [isEnabled, setIsEnabled] = useState(false);
  const router = useRouter();

  const toggleSwitch = () => setIsEnabled((prev) => !prev);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      <View style={styles.row}>
        <Text style={styles.label}>Enable Sound</Text>
        <Switch value={isEnabled} onValueChange={toggleSwitch} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  label: { fontSize: 18 },
});
