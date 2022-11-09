import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Result = ({ convertion }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.styleResult}>{convertion} °C</Text>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    marginBottom: 20,
    marginTop: 0,
    borderBottomWidth: 5,
  },
  styleResult: {
    fontSize: 25,
  },
});
