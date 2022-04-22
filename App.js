import * as React from 'react';
import { View, Text,StyleSheet,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './src/AuthScreens/SignUp';
import Verify from './src/AuthScreens/Verify';
import BankBvnValidation from './src/AuthScreens/BankBvnValidation';
import SetPin from './src/AuthScreens/SetPin';



function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator 
       initialRouteName="Root"
        screenOptions={{
          headerShown: false,
        }}
       >
        <Stack.Screen name="Root" component={SignUp}/>
        <Stack.Screen name="Verify" component={Verify} />
        <Stack.Screen name="BankBvnValidation" component={BankBvnValidation} />
        <Stack.Screen name="SetPin" component={SetPin} />

        
      </Stack.Navigator>
    </NavigationContainer>
  );
}


