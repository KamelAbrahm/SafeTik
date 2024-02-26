import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userAuthStateListener } from '../../../redux/actions';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from '../../../screens/auth';
import HomeScreen from '../home';

const Stack = createStackNavigator();

const Route = () => {
  const currentUserObj = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userAuthStateListener());
  }, []);

  useEffect(() => {
    console.log('Current user state:', currentUserObj);
    if (currentUserObj.currentUser) {
      console.log('Authenticated, should navigate to homescreen');
    }
  }, [currentUserObj]);

  console.log('Current User Object:', currentUserObj);

  if (!currentUserObj.loaded) {
    console.log('Auth state not yet loaded');
    return <View></View>;
  }
  console.log(
    'Navigating based on user:',
    currentUserObj.currentUser ? 'Authenticated' : 'Not Authenticated'
  );
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {currentUserObj.currentUser == null ? (
          <Stack.Screen
            name="auth"
            component={AuthScreen}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;

const styles = StyleSheet.create({});
