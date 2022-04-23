import React,{useState} from 'react';
import {styles,button} from "../utils/styles";
import { View, Text,StyleSheet,Button } from 'react-native';
import InputField from '../components/InputField';
import ButtonComponent from '../components/ButtonComponent';
import MaskedTokenComponent from '../components/MaskedTokenComponent';

function Verify ({navigation}){
    const [phoneNumber, setPhoneNumber] = useState("");
    const [pin, setPin] = useState("");
    const handleSubmit =()=>{
        navigation.navigate("BankBvnValidation")
    }

    return (
      <View style = {[styles.container]}>

        <View>
          <Text>hi</Text>
        </View>

        <View>
            <View style= {{marginBottom:8}}>
                <Text style = {[styles.titleText,]} >Verification</Text>
                <Text style = {styles.bodyText} >Lacus integer imperdiet lacinia consectetur erat scelerisque.</Text>
            </View>

            <View style= {{marginTop:20}}>                
                <MaskedTokenComponent
                    length={4}
                    value={pin}
                    onchange={(pin) =>setPin(pin)}
                    autoFocus={true}
                    fieldStyle = {{backgroundColor:"#E5E5E5"}}
                />
            </View>

            <View style= {{marginTop:20}}> 
                <Text style = {{textAlign:'center'}}>Verification code will be resent in</Text>
                <Text style = {{textAlign:'center',fontFamily:"ABeeZee",fontWeight:'400',color:'#0C0C26'}}>0:45</Text>
            </View>

            <View>

               <ButtonComponent
                    title="Submit"
                    styleButton={{marginTop: 160,borderRadius:16}}
                    onPress={handleSubmit}
                    buttonTittle={{color:"#FFFFFF",fontSize:14}}
              />
            </View>
        </View>
      </View>
    );
  }
export default Verify;