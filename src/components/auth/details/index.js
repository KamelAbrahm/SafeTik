import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import styles from './styles';
import { useDispatch } from 'react-redux';
import { login, register } from '../../../redux/actions';

const AuthDetails = ({ authPage, setDetailsPage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(login(email, password))
      .then(() => {
        console.log('login successful');
      })
      .catch(() => {
        console.log('login unsuccessful');
      });
  };

  const handleRegistration = () => {
    dispatch(register(email, password))
      .then(() => {
        console.log('register successful');
      })
      .catch(() => {
        console.log('register unsuccessful');
      });
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setDetailsPage(false)}>
        <Feather name="arrow-left" size={24} color="black" />
      </TouchableOpacity>
      <TextInput
        onChangeText={(text) => setEmail(text)}
        style={styles.textInput}
        placeholder="Email"
      ></TextInput>
      <TextInput
        onChangeText={(text) => setPassword(text)}
        style={styles.textInput}
        secureTextEntry
        placeholder="Password"
      ></TextInput>

      <TouchableOpacity
        style={styles.button}
        onPress={() => (authPage == 0 ? handleLogin() : handleRegistration())}
      >
        <Text style={styles.buttonText}>
          {authPage == 0 ? 'Sign in' : 'Sign up'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AuthDetails;