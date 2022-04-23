import React,{useState} from 'react';
import {styles,button} from "../utils/styles";
import { View, Text,StyleSheet,Button, ScrollView } from 'react-native';
import InputField from '../components/InputField';
import ButtonComponent from '../components/ButtonComponent';
import MaskedTokenComponent from '../components/MaskedTokenComponent';

function BankBvnValidation ({navigation}){
    const [phoneNumber, setPhoneNumber] = useState("");
    const [pin, setPin] = useState("");
    const handleSubmit =()=>{
        navigation.navigate("SetPin");
    }

    return (
      <View style = {styles.container}>
        <View >
            <View style= {{marginBottom:8}}>
                <Text style = {[styles.titleText,]} >Add your bank details</Text>
                <Text style = {styles.bodyText} >Kindly ensure the details you enter belong to you.</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>                
                    <InputField
                        onChangeText={(text) => setPhoneNumber(text)}
                        inputValue={phoneNumber}
                        placeholder="Bank"
                        inputStyle = {styles.bankBvnInputField}
                    />
                </View>

                <View>                
                    <InputField
                        onChangeText={(text) => setPhoneNumber(text)}
                        inputValue={phoneNumber}
                        placeholder="Account number"
                        inputStyle = {styles.bankBvnInputField}
                    />
                </View>


                <View>                
                    <InputField
                        onChangeText={(text) => setPhoneNumber(text)}
                        inputValue={phoneNumber}
                        placeholder="BVN"
                        inputStyle = {styles.bankBvnInputField}
                        
                    />
                </View>

                

                

                <View>

                <ButtonComponent
                        title="Submit"
                        styleButton={{marginTop: 120,borderRadius:16}}
                        onPress={handleSubmit}
                        buttonTittle={{color:"#FFFFFF",fontSize:14}}
                />
                </View>
            </ScrollView>
        </View>
      </View>
    );
  }
export default BankBvnValidation;