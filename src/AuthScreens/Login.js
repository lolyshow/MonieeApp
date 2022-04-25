import React,{useState} from 'react';
import {styles,button} from "../utils/styles";
import { View, Text } from 'react-native';
import InputField from '../components/InputField';
import ButtonComponent from '../components/ButtonComponent';
import HeaderComponent from '../components/HeaderComponent';

function Login ({navigation}){
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleSubmit =()=>{
      navigation.navigate("PinAuth")
    }

    return (
      <View style = {styles.container}>
        <HeaderComponent/>
        <View>
            <View style= {{}}>
                <Text style = {[styles.titleText,{marginBottom:8}]} >Login</Text>
                <Text style = {styles.bodyText} >Enter your phone number</Text>
            </View>

            <View>
                <InputField
                    onChangeText={(text) => setPhoneNumber(text)}
                    inputValue={phoneNumber}
                    placeholder="Phone Number"
                    inputStyle = {{backgroundColor:"#E5E5E5",marginTop:20,borderRadius:18}}
                />
            </View>

            <View>

               <ButtonComponent
                    title="Continue"
                    styleButton={{marginTop: 220,borderRadius:16}}
                    onPress={handleSubmit}
                    buttonTittle={{color:"#FFFFFF",fontSize:14}}
              />
            </View>
        </View>
      </View>
    );
  }
export default Login;