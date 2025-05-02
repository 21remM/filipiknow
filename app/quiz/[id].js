import { View, Text, Button, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useState, useRef } from "react";
import ConfettiCannon from "react-native-confetti-cannon";

const quizData = {
  pusa: {
    question: 'What is "Pusa" in English?',
    answer: "Cat",
    options: ["Dog", "Cat", "Mouse"],
  },
  kumusta: {
    question: 'What does "Kumusta ka?" mean?',
    answer: "How are you?",
    options: ["Goodbye", "How are you?", "Where are you?"],
  },
};

export default function QuizById() {
  const { id } = useLocalSearchParams();
  const [selected, setSelected] = useState(null);
  const cannonRef = useRef(null);

  const data = quizData[id];
  if (!data) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>No quiz available for "{id}"</Text>
      </View>
    );
  }

  const handleAnswer = (option) => {
    setSelected(option);
    if (option === data.answer) {
      cannonRef.current?.start();
    }
  };

  const isCorrect = selected === data.answer;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data.question}</Text>

      {data.options.map((option, index) => (
        <View key={index} style={styles.buttonWrapper}>
          <Button title={option} onPress={() => handleAnswer(option)} />
        </View>
      ))}

      {selected && (
        <Text style={[styles.feedback, { color: isCorrect ? "green" : "red" }]}>
          {isCorrect ? "Correct!" : `Incorrect. The answer is: ${data.answer}`}
        </Text>
      )}

      {/* Confetti on correct answer */}
      <ConfettiCannon
        count={50}
        origin={{ x: 200, y: 0 }}
        fadeOut
        autoStart={false}
        ref={cannonRef}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  buttonWrapper: { marginVertical: 5 },
  feedback: { marginTop: 20, fontSize: 18, fontWeight: "bold" },
});
