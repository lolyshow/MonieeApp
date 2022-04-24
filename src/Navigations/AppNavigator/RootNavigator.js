import React from 'react';
import {View,Text,Image} from "react-native";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import colors from '../../utils/colors';
import TransferStack from './StackNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigation(){
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor:colors.SECONDARY,
        tabBarInactiveTintColor: 'black',
        headerShown: false,
        tabBarStyle:{backgroundColor:"#FFFF",elevation:0,borderTopWidth:0}
      }}>
      <Tab.Screen
        name="Home"
        component={TransferStack}
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../../assets/images/homeIcon.png')}
              tintColor={focused ? colors.SECONDARY : colors.GREY}
            />
          ),
        }}
      />
      <Tab.Screen
        component={TransferStack}
        name="Transfer"
        screenOptions={{ headerShown: false }}
        options={{
          headerStyle:{backgroundColor:"blue"},
          headerShown: false,
          title: 'Transfer',
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../../assets/images/category.png')}
              tintColor={focused ? colors.SECONDARY : colors.GREY}
            />
          ),
          
        }}
      />


    <Tab.Screen
        component={TransferStack}
        name="Account"
        options={{
          title: 'Transfer',
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../../assets/images/profile.png')}
              tintColor={focused ? colors.SECONDARY : colors.GREY}
            />
          ),
        }}
    />
    </Tab.Navigator>
  );
};


export default function RootNavigator() {

  return (
    <Stack.Navigator
    screenOptions={{
        tabBarActiveTintColor:colors.SECONDARY,
        tabBarInactiveTintColor: 'black',
        headerShown: false,
        tabBarStyle:{backgroundColor:"#FFFF",elevation:0}
      }}
      
    >
      <Stack.Screen name="HomePage" component={TabNavigation} />
      
    </Stack.Navigator>
  );
}



