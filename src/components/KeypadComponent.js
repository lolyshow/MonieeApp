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
  customContainerStyle = null,
  customNumpadStyle = null,
  customNumberStyle = null
}) => {
    return (
        <View style = {[{marginTop:20}]}>

            {numbersPad.map((numbers,index)=>{
                return(<View key = {index} style = {[customContainerStyle,styles.numberContainer]}>
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

                <TouchableOpacity onPress = {()=>actionBtnClicked("clear")}>    
                    <View style = {styles.numberPad}>
                        <Text style={[styles.number,{color:'#BDBDBD'}]}>{"C"}</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress = {()=>setPinFunc("0")}> 
                    <View style = {styles.numberPad}>
                        <Text style={styles.number}>{"0"}</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress = {()=>actionBtnClicked("backSpace")}> 
                    <View style = {styles.numberPad}>
                        <Text style={[styles.number,{color:'#BDBDBD'}]}>{"<"}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
      );
}
export default KeypadComponent;