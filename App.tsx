import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Toolbar from './main/Toolbar'

export default function App() {
  return (
    <View >
      <Toolbar />
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
