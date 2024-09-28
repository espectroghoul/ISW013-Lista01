import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [randomNumber, setRandomNumber] = useState(null);

  const generateRandomNumber = () => {
    const randomNum = Math.floor(Math.random() * 11);
    setRandomNumber(randomNum);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jogo do Nº Aleatório</Text>
      <Image
        style={styles.image}
        source={{ uri: '' }}
      />
      <Text style={styles.instruction}>Pense em um nº de 0 a 10</Text>
      <Text style={styles.resultText}>Número Aleatório:</Text>
      {randomNumber !== null && (
        <Text style={styles.result}>{randomNumber}</Text>
      )}
      <View style={styles.line} />
      <TouchableOpacity style={styles.button} onPress={generateRandomNumber}>
        <Text style={styles.buttonText}>Descobrir</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 1,
    marginBottom: 20,
  },
  instruction: {
    fontSize: 18,
    marginBottom: 10,
  },
  line: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  resultText: {
    fontSize: 18,
    marginTop: 10,
  },
  result: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 5,
  },
});
