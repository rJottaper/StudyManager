import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TextInput, TouchableOpacity, Image, TouchableWithoutFeedback, Keyboard, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import SecurityImg from '../img/online.svg'

const Login = ({ route }) => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFilled, setIsFilled] = useState();

  const changeEmail = (value) => {
    setIsFilled(!value);
    setEmail(value);
  }

  const changePassword = (value) => {
    setIsFilled(!value);
    setPassword(value);
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.content}>
            <View style={styles.header}>
              <SecurityImg width="200" height="150" />
            </View>
            <View>
              <Text style={styles.loginTitle}>Login</Text>
            </View>
            <View style={styles.inputs}>
              <Text style={styles.texts}>Username</Text>
              <TextInput
                placeholder='yourname'
                style={styles.email}
                value={email}
                onChangeText={changeEmail}
              />
            </View>
            <View style={styles.inputs}>
              <Text style={styles.texts}>Password</Text>
              <TextInput
                placeholder='yourpassword'
                maxLength={15}
                style={styles.password}
                secureTextEntry={true}
                value={password}
                onChangeText={changePassword}
              />
            </View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomeScreen', { email })}>
              <Text style={styles.buttonText}>
                Login
              </Text>
            </TouchableOpacity>
            <View style={styles.footer}>
              <Text style={styles.subtitle}>Don't have an account yet?</Text>
              <TouchableOpacity>
                <Text style={styles.buttonSubText}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    width: '100%',
    backgroundColor: '#E0E5EF',
  },
  content: {
    width: '100%'
  },
  header: {
    marginTop: 40,
    alignItems: 'center'
  },
  headerIMG: {
    marginRight: 28
  },
  loginTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#6197EB',
    paddingBottom: 40,
    textAlign: 'center',
    marginTop: 7
  },
  inputs: {
    width: '100%',
    paddingHorizontal: 20,

  },
  texts: {
    fontSize: 16,
    color: '#A1B0D4',
    marginLeft: 4,
    marginTop: 5
  },
  email: {
    fontSize: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#B9C7DA',
    marginBottom: 7
  },
  password: {
    fontSize: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#B9C7DA',
  },
  button: {
    height: 52,
    width: '90%',
    backgroundColor: '#6197EB',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 20
  },
  buttonText: {
    color: '#ddefed',
    fontSize: 20
  },
  subtitle: {
    fontSize: 16,
    color: '#B9C7DA',
    fontWeight: 'bold',
    textAlign: 'left'
  },
  buttonSubText: {
    color: '#6197EB',
    fontWeight: 'bold',
  },
  footer: {
    textAlign: 'left',
    padding: 25,
    marginTop: 30,
  }

})

export default Login;