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

function RequestMoney ({navigation}){
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
                    title = {"Request Money"}
                />
            </>


            <ScrollView showsVerticalScrollIndicator={false}>
                
                <View>
                <AmountCard
                  title = {"Request"}
                  amount = {"₦ 15,000"}
                />
                </View>

                



                <View style ={{marginTop:120}}>

                        <ButtonComponent
                            title="Request"
                            styleButton={{borderRadius:16,width:312,backgroundColor:colors.GREY}}
                            onPress={handleSubmit}
                            buttonTittle={{color:"#828282",fontSize:14,fontWeight:"800"}}
                        />

                        
                        
                
                </View>
            </ScrollView>
        </View>
      </View>
    );
  }
export default RequestMoney;