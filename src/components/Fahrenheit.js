import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import Result from './Result';

const Fahrenheit = () => {
  // Estados
  const [tempInFahrenheit, setTempInFahrenheit] = useState(0);
  const [result, setResult] = useState(0);
  function converterTemp() {
    setResult((parseFloat(tempInFahrenheit) / 1.8 + 32).toFixed(1));
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TEMPERATURA EM CELSIUS</Text>
      <TextInput
        style={styles.input}
        onChangeText={setTempInFahrenheit}
        value={tempInFahrenheit}
        placeholder="Digite"
        keyboardType="numeric"
      />
      <Result convertion={result} />
      <TouchableOpacity
        style={styles.buttonTouchable}
        onPress={() => converterTemp()}
      >
        <Text>Calcular</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Fahrenheit;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'coral',
    padding: 110,
    alignItems: 'center',
    borderWidth: 3,
    borderRadius: 200,
    marginTop: 50,
  },
  title: {
    padding: 10,
    backgroundColor: '#B9A9A9',
    textAlign: 'center',
    borderWidth: 3,
    borderRadius: 10,
  },
  input: {
    textAlign: 'center',
    height: 40,
    borderWidth: 1,
    marginTop: 20,
    borderRadius: 10,
    padding: 10,
  },
  buttonTouchable: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: '#B9A9A9',
  },
});
