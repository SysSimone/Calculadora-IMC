import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  function handleSubmit() {
    const alt = altura / 100;
    const imc = peso / (alt * alt);


    if (imc < 18.6) {
      alert('Você está abaixo do peso!' + imc.toFixed(2));
    } else if (imc >= 18.6 && imc < 24.9) {
      alert('Peso ideal! ' + imc.toFixed(2));
    } else if (imc >= 24.9 && imc < 34.9) {
      alert('Você está levemente acima do peso!' + imc.toFixed(2));
    }
    setPeso('');
    setAltura('');
  }
  return (
    <View style={styles.container}>
      <Image style={styles.imagem} source={require('./assets/img/nv.png')} />
      <Text style={styles.title}> Calcule seu IMC</Text>
      <TextInput
        style={styles.input}
        value={peso}
        onChangeText={(peso) => setPeso(peso)}
        placeholder="Peso(Kg)"
        keyboardType="numeric"
        color='black'
      />

      <TextInput
        style={styles.input}
        value={altura}
        onChangeText={(altura) => setAltura(altura)}
        placeholder="Altura (cm)"
        keyboardType="numeric"
        color='black'
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit}
      >

        <Text style={styles.buttonText}> Calcule </Text>
      </TouchableOpacity>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#D8D8D8'
  },
  title: {
    textAlign: 'center',
    marginBottom:30,
    fontSize: 30,
  },
  input: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    margin: 15,
    padding: 10,
    fontSize: 23,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    backgroundColor: '#5858FA',
    padding: 10,
  },

  buttonText: {
    color: '#FFF',
    fontSize: 25,
  },
  imagem: {
    margin:80,
    width: 250,
    height: 250,
    marginVertical:70,
    alignItems: 'center',
  }

});