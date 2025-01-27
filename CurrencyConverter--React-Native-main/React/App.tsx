import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  const [input, setInput] = useState('');
  const [sentiment, setSentiment] = useState('');

  const analyzeSentiment = async () => {
    if (!input) {
      setSentiment('Please enter some text.');
      return;
    }

    try {
      // Fake API simulation (replace with real sentiment analysis API)
      const response = input.includes('good') || input.includes('happy')
        ? 'Positive Sentiment'
        : 'Negative Sentiment';
      setSentiment(response);
    } catch (error) {
      setSentiment('Error analyzing sentiment.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Customer Sentiment Analysis</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter customer feedback..."
        value={input}
        onChangeText={setInput}
      />
      <Button title="Analyze Sentiment" onPress={analyzeSentiment} />
      <Text style={styles.result}>{sentiment}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    width: '100%',
    marginBottom: 20,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    color: 'blue',
  },
});
