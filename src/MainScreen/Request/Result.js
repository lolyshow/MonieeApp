import React,{useState} from 'react';
import {styles,button} from "../../utils/styles";
import { View, Text,Image,Button, ScrollView, StatusBar } from 'react-native';
import ButtonComponent from '../../components/ButtonComponent';
import colors from '../../utils/colors';
import KeypadComponent from '../../components/KeypadComponent';
import HeaderComponent from '../../components/HeaderComponent';

function Result ({navigation}){
    

    const handleSubmit =()=>{
        navigation.navigate("FundRequest");
    }


    return (
      <View style = {[styles.container,{flex: 1,justifyContent: "center",alignItems: "center",}]}>
        <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
        

        <View>
            <Image
                source={require('../../assets/images/img.png')}
                tintColor={"#F2F2F2"}
            />
        </View>
        <View style = {{justifyContent:'space-between',height:300}}>
            <View style = {{}}>
                <Text style = {[styles.titleText,{textAlign:'center'}]}>Request sent</Text>

                <Text style = {[styles.titleText,{textAlign:'center',fontSize:14,fontWeight:"400",fontFamily:'ABeeZee',color:"#4F4F4F"}]}>Your request for ₦2,000 to Terry and 5 others has been sent</Text>
            </View>

            <View style = {{alignContent:'center',alignSelf:'center'}}>
                <ButtonComponent
                    title="Go Home"
                    styleButton={{borderRadius:16,width:312,backgroundColor:colors.GREY}}
                    onPress={handleSubmit}
                    buttonTittle={{color:"#828282",fontSize:14,fontWeight:"800"}}
                />
            </View>

        </View>
      </View>
    );
  }
export default Result;

