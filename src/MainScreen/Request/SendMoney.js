import React,{useState,useEffect} from 'react';
import {styles} from "../../utils/styles";
import { View,ScrollView, StatusBar,TouchableWithoutFeedback,Modal,Text } from 'react-native';
import InputField from '../../components/InputField';
import ButtonComponent from '../../components/ButtonComponent';
import HeaderComponent from '../../components/HeaderComponent';
import AmountCard from '../../components/AmountCard';
import KeypadComponent from '../../components/KeypadComponent';
import TokenField from '../../AuthScreens/TokenField';


function SendMoney ({navigation}){
    const [phoneNumber, setPhoneNumber] = useState("");
    const [pin, setPin] = useState("");
    const [maskedPin, setMaskedPin] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    
    useEffect(()=>{
      // this will be called when the lenght of pin reaches 4
      if(pin.length == 4){
          // navigation.navigate("Login")
          const user = {
              isLoggedIn: true,
          };
      
          navigation.navigate("Result",{message:"Money Sent",btntext:"Kari me go house"});
      }
    },[pin])

    const handleSubmit =()=>{
      setModalVisible(true);
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


    const numbersPad =[
      [1,2,3],
      [4,5,6],
      [7,8,9]
  ]


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
                      title="Send Money"
                      styleButton={{borderRadius:16,width:312,backgroundColor:"#0C0C26"}}
                      onPress={handleSubmit}
                      buttonTittle={{color:"#FFFFFF",fontSize:14,fontWeight:"800"}}
                  />

                </View>


              <Modal
                transparent
                animationType="slide"
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}>
                <View style={styles.panel}>
                  <View style={{alignItems: 'center'}}>
                    <View style={{}}>
                      <Text style={[styles.titleText,{marginTop: 20, fontSize: 20,}]}>
                        Enter Pin
                      </Text>
                    </View>
                    <View>
                      
                    </View>

                    <View>
                      {/* <Text style={style.panelSubtitle}>{airtimeInfo.phone}</Text> */}
                    </View>

                    <View style={[styles.codeContainer,{}]}>
                    <View>
                        <TokenField maskedPin = {maskedPin}/>
                    </View>
                    <>
                        <KeypadComponent
                          actionBtnClicked = {actionBtnClicked}
                          setPinFunc = {setPinFunc}
                          numbersPad = {numbersPad}
                          customContainerStyle = {{marginVertical:0}}
                          customNumberStyle = {{fontStyle:"normal",fontSize:21,color:"#03053D"}}
                          leftKey = "."
                          leftKeyText="."
                      />
                    </>

                    </View>
                    
                  </View>
                  
                </View>
                <TouchableWithoutFeedback
                  onPress={() => {
                    setModalVisible(false);
                  }}>
                  <View style={styles.modalBg} />
                </TouchableWithoutFeedback>
              </Modal>
                
            </ScrollView>
        </View>
      </View>
    );
  }
export default SendMoney;

