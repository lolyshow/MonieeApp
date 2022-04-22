import React,{useState} from 'react';
import {styles,button} from "../utils/styles";
import { View, Text,StyleSheet,Button } from 'react-native';
import InputField from '../components/InputField';
import ButtonComponent from '../components/ButtonComponent';

function SignUp ({navigation}){
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleSubmit =()=>{
      navigation.navigate("Verify")
    }

    return (
      <View style = {styles.container}>
        <View>
            <View style= {{}}>
                <Text style = {[styles.titleText,{marginBottom:8}]} >Let’s begin</Text>
                <Text style = {styles.bodyText} >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            </View>

            <View>
                <InputField
                    onChangeText={(text) => setPhoneNumber(text)}
                    inputValue={phoneNumber}
                    inputLabel="Phone Number"
                    placeholder="Phone Number"
                    inputStyle = {{backgroundColor:"#E5E5E5",marginTop:20,borderRadius:18}}
                />
            </View>

            <View>

               <ButtonComponent
                    title="Get Started"
                    styleButton={{marginTop: 220,borderRadius:16}}
                    onPress={handleSubmit}
                    buttonTittle={{color:"#FFFFFF",fontSize:14}}
              />
            </View>
        </View>
      </View>
    );
  }
export default SignUp;