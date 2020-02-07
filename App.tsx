import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationNativeContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import login from './src/screens/Login';
import Info from './src/screens/Info';

const LoginStack = createStackNavigator();
const InfoStack = createStackNavigator();


function App() {
  
  return (
    <NavigationNativeContainer>
      <LoginStack.Navigator>
         <LoginStack.Screen name="Login" component={login} />
         <LoginStack.Screen name="Info" component={Info} options={{ title : '내정보', headerShown: false}} />
      </LoginStack.Navigator>
    </NavigationNativeContainer>
  );
}
export default App;