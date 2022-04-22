import React,{useState} from 'react';
import {styles,button} from "../utils/styles";
import { View, Text,StyleSheet,Button, TouchableOpacity } from 'react-native';
import InputField from '../components/InputField';
import ButtonComponent from '../components/ButtonComponent';
import MaskedTokenComponent from '../components/MaskedTokenComponent';

function SetPin ({navigation}){
    const [phoneNumber, setPhoneNumber] = useState("");
    const [pin, setPin] = useState("");
    const handleSubmit =()=>{

    }

    const numbersPad =[
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]

    const setPinFunc = (number)=>{
        let nepin = pin.toString();
        nepin+=number;
        console.log(nepin);
        setPin(nepin)
    }

    return (
      <View style = {styles.container}>
        <View>
            <View style= {{marginBottom:8}}>
                <Text style = {[styles.titleText,]} >Set PIN</Text>
                <Text style = {styles.bodyText} >Facilisis mauris, potenti vitae cras risus.</Text>
            </View>

            <View style = {{alignItems:'center',}}>                
                <View style = {[styles.bankBvnInputField,{height:50,justifyContent:'center',width:200}]}>
                    <View style={{alignItems:"center",}}>
                        <Text style = {{textAlign:'center',letterSpacing:20}}> {pin}</Text>
                    </View>
                </View>
            </View>


            <View>

                {numbersPad.map((numbers,index)=>{
                    return(<View key = {index} style = {styles.numberContainer}>
                        {numbers.map((number)=>{
                    return(<TouchableOpacity key = {number} onPress = {()=>setPinFunc(number)}>
                            <View key = {number} style = {styles.numberPad}>
                                <Text style={styles.number}>{number}</Text>
                            </View>
                            </TouchableOpacity>)
                        })}
                    </View>)
                })}

                <View style = {styles.numberContainer}>
                        
                    <View style = {styles.numberPad}>
                        <Text style={styles.number}>{"C"}</Text>
                    </View>
                    <View style = {styles.numberPad}>
                        <Text style={styles.number}>{"0"}</Text>
                    </View>
                    <View style = {styles.numberPad}>
                        <Text style={styles.number}>{"<"}</Text>
                    </View>
                        
                </View>
            </View>

            

            

            <View>

               <ButtonComponent
                    title="Submit"
                    styleButton={{marginTop: 120,borderRadius:16}}
                    onPress={handleSubmit}
                    buttonTittle={{color:"#FFFFFF",fontSize:14}}
              />
            </View>
        </View>
      </View>
    );
  }
export default SetPin;