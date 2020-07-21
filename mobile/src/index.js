import React from 'react'
import { View, Text, StatusBar, StyleSheet } from 'react-native'

function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello React Native</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#222',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fafafa',
    fontSize: 30,
  },
})

export default App
