import React,{useState} from 'react';
import {styles,button} from "../../utils/styles";
import { View, Text,Image,Button, ScrollView, StatusBar } from 'react-native';
import ButtonComponent from '../../components/ButtonComponent';
import MaskedTokenComponent from '../../components/MaskedTokenComponent';
import colors from '../../utils/colors';
import KeypadComponent from '../../components/KeypadComponent';
import HeaderComponent from '../../components/HeaderComponent';

function FundRequest ({navigation}){
    const [phoneNumber, setPhoneNumber] = useState("");
    const [pin, setPin] = useState("");
    const [maskedPin, setMaskedPin] = useState("");

    
    const handleSubmit =()=>{
        navigation.navigate("RequestMoney");
    }

    const handleSubmitSend =()=>{
        navigation.navigate("SendMoney");
    }

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
      <View style = {[styles.container,]}>
        <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
        
        <View>
            
            <>

                <HeaderComponent
                    path = "TrHome"
                />
            </>

            <View style= {{marginBottom:8,alignItems:"center"}}>
                <Text style = {[styles.titleText,]} >₦0</Text>
                
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style = {{alignItems:'center'}}>                
                    <View style = {{height:62,width:119,backgroundColor:colors.GREY,borderRadius:12,justifyContent:'center',alignItems:'center'}}>
                        <Text>Wallet Balance</Text>
                        <Text>5,200</Text>
                    </View>
                </View>

                <View> 
                                  
                    <KeypadComponent
                    actionBtnClicked = {actionBtnClicked}
                    setPinFunc = {setPinFunc}
                    numbersPad = {numbersPad}
                    

                    />
                </View>




                <View style ={{marginBottom:120}}>
                    <View style = {{flexDirection:"row",justifyContent:'space-between'}}>

                        <ButtonComponent
                            title="Request"
                            styleButton={{borderRadius:16,width:123,backgroundColor:colors.GREY}}
                            onPress={handleSubmit}
                            buttonTittle={{color:"#828282",fontSize:14,fontWeight:"800"}}
                        />

                        <ButtonComponent
                            title="Send"
                            styleButton={{borderRadius:16,width:123,backgroundColor:colors.GREY}}
                            onPress={handleSubmitSend}
                            buttonTittle={{color:"#828282",fontSize:14,fontWeight:"800"}}
                        />
                        
                    </View>
                
                </View>
            </ScrollView>
        </View>
      </View>
    );
  }
export default FundRequest;