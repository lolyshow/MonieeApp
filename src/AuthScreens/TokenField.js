import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../utils/colors';
import { styles } from '../utils/styles';

const TokenField = ({
    maskedPin,
    customTokenContainerWrapperStyle = null,
    customTokenContainerStyle = null,
    customTokenTextStyle
}) => {
    return (
        <View style = {[styles.tokenContainerWrapper,customTokenContainerWrapperStyle]}>                
            <View style = {[styles.bankBvnInputField,styles.tokenFieldContainerStyle,customTokenContainerStyle]}>
                <View style={{ }}>
                    <Text style = {[styles.tokenTextStyle,customTokenTextStyle]}> {maskedPin}</Text>
                </View>
            </View>
        </View>
      );
}
export default TokenField;