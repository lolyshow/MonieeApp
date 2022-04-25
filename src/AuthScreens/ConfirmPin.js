import React,{useState,useEffect} from 'react';
import {styles,} from "../utils/styles";
import { View, Text, ScrollView } from 'react-native';
import KeypadComponent from '../components/KeypadComponent';
import TokenField from './TokenField';
import HeaderComponent from '../components/HeaderComponent';

function ConfirmPin ({navigation}){
    const [phoneNumber, setPhoneNumber] = useState("");
    const [pin, setPin] = useState("");
    const [maskedPin, setMaskedPin] = useState("");
    useEffect(()=>{
        //this would be called when the lenght of pin reaches 4
        if(pin.length == 4){
            navigation.navigate("Login")
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

        <HeaderComponent/>

        <View>
            <View style= {{}}>
                <Text style = {[styles.titleText,]} >Confirm PIN</Text>
                <Text style = {[styles.bodyText,{marginTop:8}]} >Facilisis mauris, potenti vitae cras risus.</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator = {false}>
                <View>
                    <TokenField maskedPin = {maskedPin}/>
                </View>
                <View>

                    <KeypadComponent
                        actionBtnClicked = {actionBtnClicked}
                        setPinFunc = {setPinFunc}
                        numbersPad = {numbersPad} 
                    />
                
                </View>
            </ScrollView>
        </View>
      </View>
    );
  }
export default ConfirmPin;