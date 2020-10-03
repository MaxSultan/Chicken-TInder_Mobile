/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator';


const App = () => {
  return (
    <>
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
    </>
  );
};


export default App;