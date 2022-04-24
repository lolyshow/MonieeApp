import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../utils/colors';

const AmountCard = ({
  title,
  amount
}) => {
    return (<View style = {{alignItems:'center'}}>                
                <View style = {{height:62,width:178,backgroundColor:"#FAFAFA",borderRadius:12,justifyContent:'space-between',alignItems:'center',flexDirection:'row',paddingLeft:38,paddingRight:38}}>
                    <View style = {{backgroundColor:"#E0E0E0",height:40,width:40,borderRadius:18}}>
                        <View>

                        </View>
                    </View>
                    <View>
                        <Text>{title}</Text>
                        <Text>{amount}</Text>
                    </View>
                </View>
            </View>
            )}
export default AmountCard;