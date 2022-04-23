import React,{useState,useEffect} from 'react';
import {styles,} from "../utils/styles";
import { View, Text, ScrollView } from 'react-native';
import KeypadComponent from '../components/KeypadComponent';
import TokenField from './TokenField';

function PinAuth ({navigation}){
    const [pin, setPin] = useState("");
    const [maskedPin, setMaskedPin] = useState("");
    useEffect(()=>{
        // this will be called when the lenght of pin reaches 4
        if(pin.length == 4){
            // navigation.navigate("Login")
        }
    },[pin])

    const numbersPad =[
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]

    const setPinFunc = (number)=>{
        
        if(pin.length <4){
            let nepin = pin.toString();
            let mask = maskedPin.toString();
            nepin+=number;
            mask+="•";
            // console.log(nepin);
            setMaskedPin(mask)
            setPin(nepin)
        }
    }

    const actionBtnClicked = (action)=>{
        console.log(action)

        if(action == "backSpace"){
            
            let deleteKey = pin.toString().slice(0, -1);
            let masked = maskedPin.toString().slice(0, -1);
            
            setMaskedPin(masked);
            setPin(deleteKey);
        }else{
            setPin("");
            setMaskedPin("");
        }
    }


    return (
      <View style = {styles.container}>
        <ScrollView showsVerticalScrollIndicator = {false}>
            <View style= {{marginBottom:8,alignItems:"center"}}>
                <Text style = {[styles.titleText,]} >Welcome back</Text>
                <Text style = {[styles.bodyText,{marginTop:8}]} >Enter your PIN to continue</Text>
            </View>

            <View>
                <TokenField maskedPin = {maskedPin}/>
            </View>

            <View style={{marginTop:48,alignItems:'center'}}>
                <Text style = {[styles.bankBvnInputField,{backgroundColor:null}]}>Forgot PIN?</Text>
            </View>

            <>
                <KeypadComponent
                    actionBtnClicked = {actionBtnClicked}
                    setPinFunc = {setPinFunc}
                    numbersPad = {numbersPad}
                    

              />
            </>
        </ScrollView>
      </View>
    );
  }
export default PinAuth;