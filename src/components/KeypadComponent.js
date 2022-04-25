import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { styles } from '../utils/styles';

const KeypadComponent = ({
  actionBtnClicked,
  setPinFunc,
  numbersPad,
  customContainerStyle = {},
  customNumpadStyle = null,
  customNumberStyle = null,
  leftKey = "C",
  leftKeyText = "clear"
}) => {
    return (
        <View style = {[{marginTop:20}]}>

            {numbersPad.map((numbers,index)=>{
                return(<View key = {index} style = {[styles.numberContainer,customContainerStyle]}>
                        {numbers.map((number)=>{
                return(<TouchableOpacity key = {number} onPress = {()=>setPinFunc(number)}>
                            <View key = {number} style = {[customNumpadStyle,styles.numberPad]}>
                                <Text style={[customNumberStyle,styles.number]}>{number}</Text>
                            </View>
                        </TouchableOpacity>)
                    })}
                </View>)
            })}

            <View style = {styles.numberContainer}>

                <TouchableOpacity onPress = {()=>actionBtnClicked(leftKeyText)}>    
                    <View style = {styles.numberPad}>
                        <Text style={[styles.number,{color:'#BDBDBD'}]}>{leftKey}</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress = {()=>setPinFunc("0")}> 
                    <View style = {customNumpadStyle,styles.numberPad}>
                        <Text style={customNumberStyle,styles.number}>{"0"}</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress = {()=>actionBtnClicked("backSpace")}> 
                    <View style = {customNumpadStyle,styles.numberPad}>
                        <Text style={[customNumberStyle,styles.number,{color:'#BDBDBD'}]}>{"<"}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
      );
}
export default KeypadComponent;