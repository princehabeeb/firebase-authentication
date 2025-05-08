import { router } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const index = () => {

const handleLogin = () => {
  // Navigate to the Login screen
  router.push('/auth/Login');
}

const handleSignup = () => {
  // Navigate to the Signup screen
  router.push('/auth/Signup');
}

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Text>Welcome to the app!</Text>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5FCFF',
  },
  buttonContainer: {
    // marginTop: 20,
    width: '90%',
    backgroundColor: '#222',
    padding: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
})