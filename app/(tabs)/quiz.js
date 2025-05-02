import { View, Text, Button, StyleSheet } from "react-native";
import { useState } from "react";

const questions = [
  {
    question: 'What is "Pusa" in English?',
    answer: "Cat",
    options: ["Dog", "Cat", "Mouse"],
  },
  {
    question: 'What does "Kumusta ka?" mean?',
    answer: "How are you?",
    options: ["Goodbye", "How are you?", "What time is it?"],
  },
];

export default function QuizScreen() {
  const [current, setCurrent] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = (option) => {
    if (option === questions[current].answer) {
      setScore(score + 1);
    }

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setShowResult(true);
    }
  };

  const restart = () => {
    setCurrent(0);
    setScore(0);
    setShowResult(false);
  };

  if (showResult) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Quiz Complete!</Text>
        <Text style={styles.score}>
          Your Score: {score} / {questions.length}
        </Text>
        <Button title="Restart Quiz" onPress={restart} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{questions[current].question}</Text>
      {questions[current].options.map((opt, idx) => (
        <View key={idx} style={styles.buttonWrapper}>
          <Button title={opt} onPress={() => handleAnswer(opt)} />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 22, marginBottom: 20, fontWeight: "bold" },
  score: { fontSize: 18, marginBottom: 20 },
  buttonWrapper: { marginVertical: 5 },
});
