import * as React from 'react';
import {View,Text,Image} from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from '../../AuthScreens/SignUp';
import FundRequest from '../../MainScreen/Request/FundRequest';
import colors from '../../utils/colors';
import RequestMoney from '../../MainScreen/Request/RequestMoney';
import SendMoney from '../../MainScreen/Request/SendMoney';
import Result from '../../MainScreen/Request/Result';





const Stack = createNativeStackNavigator();
export default function TransferStack() {
  return (
    <Stack.Navigator
    screenOptions={{
        tabBarActiveTintColor: colors.SECONDARY,
        tabBarInactiveTintColor: 'black',
        headerShown: false,
        tabBarStyle:{backgroundColor:"#FFFF",elevation:0}
      }}
      
    >
      <Stack.Screen name="FundRequest" component={FundRequest} />
      <Stack.Screen name="RequestMoney" component={RequestMoney} />
      <Stack.Screen name="SendMoney" component={SendMoney} />
      <Stack.Screen name="Result" component={Result} />
      
      
     
    </Stack.Navigator>
  );
}

