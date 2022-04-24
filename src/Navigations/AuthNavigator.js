import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from '../AuthScreens/SignUp';
import Verify from '../AuthScreens/Verify';
import BankBvnValidation from '../AuthScreens/BankBvnValidation';
import SetPin from '../AuthScreens/SetPin';
import ConfirmPin from '../AuthScreens/ConfirmPin';
import Login from '../AuthScreens/Login';
import PinAuth from '../AuthScreens/PinAuth';




const Stack = createNativeStackNavigator();
export default function AuthNavigator() {
  return (
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
        <Stack.Screen name="ConfirmPin" component={ConfirmPin} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="PinAuth" component={PinAuth} />



        
        

        
    </Stack.Navigator>
  );
}

