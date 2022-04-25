import React,{useState} from 'react';
import {styles,button} from "../../utils/styles";
import { View, Text,Image,Button, ScrollView, StatusBar } from 'react-native';
import InputField from '../../components/InputField';
import ButtonComponent from '../../components/ButtonComponent';
import MaskedTokenComponent from '../../components/MaskedTokenComponent';
import colors from '../../utils/colors';
import KeypadComponent from '../../components/KeypadComponent';
import HeaderComponent from '../../components/HeaderComponent';
import AmountCard from '../../components/AmountCard';

function SendMoney ({navigation}){
    const [phoneNumber, setPhoneNumber] = useState("");
    const [pin, setPin] = useState("");
    const [maskedPin, setMaskedPin] = useState("");
    const handleSubmit =()=>{
        navigation.navigate("RequestMoney");
    }
    

    


    return (
      <View style = {[styles.container,]}>
        <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
        
        <View>
            
            <>

                <HeaderComponent
                    path = "false"
                    title = {"Send Money"}
                />
            </>


            <ScrollView showsVerticalScrollIndicator={false}>
                
                <View>
                  <AmountCard
                    title = {"Send"}
                    amount = {"₦ 15,000"}
                  />
                </View>


                <View>
                  <InputField
                      onChangeText={(text) => setPhoneNumber(text)}
                      inputValue={phoneNumber}
                      placeholder="Purpose of sending"
                      inputStyle = {{backgroundColor:"#E5E5E5",marginTop:0,}}
                      // showBook = {true}
                  />
                </View>


                <View>
                  <InputField
                      onChangeText={(text) => setPhoneNumber(text)}
                      inputValue={phoneNumber}
                      placeholder="Phone number"
                      inputWrapperStyle = {{justifyContent:"space-between", marginTop:10, flexDirection:"row",backgroundColor:"#E5E5E5",borderRadius:18,}}
                      inputStyle = {{backgroundColor:"#E5E5E5",marginTop:0,width:250}}
                      showBook = {true}
                  />
                </View>




                <View style ={{marginTop:120}}>

                        <ButtonComponent
                            title="Request"
                            styleButton={{borderRadius:16,width:312,backgroundColor:"#0C0C26"}}
                            onPress={handleSubmit}
                            buttonTittle={{color:"#FFFFFF",fontSize:14,fontWeight:"800"}}
                        />

                        
                        
                
                </View>
            </ScrollView>
        </View>
      </View>
    );
  }
export default SendMoney;