import React from 'react';
import {
  Text,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import colors from '../utils/colors';
import { styles } from '../utils/styles';

const HeaderComponent = ({
  onpressBack,
  onpressBarcodeScan,
  onpressClock,
  title =null,
  path
}) => {
    return (<View >
                {path == "TrHome"?
                <View style = {[{justifyContent:'space-between',flexDirection:"row",marginBottom:60,}]}>

                    <View >
                        <Image
                            source={require('../assets/images/scan-barcode.png')}
                            tintColor={colors.SECONDARY}
                        />
                    </View>

                    <View>
                        <Image
                            source={require('../assets/images/clock.png')}
                            tintColor={ colors.SECONDARY}
                        />
                    </View>
                </View>:
                <>
                    <TouchableOpacity onPress = {onpressBack}>
                        <View style = {[{flexDirection:"row",marginBottom:60,}]}>

                            <View >
                                <Image
                                    source={require('../assets/images/Vector.png')}
                                    tintColor={colors.SECONDARY}
                                />
                            </View>

                            <Text style = {[{marginLeft:10,fontSize:17,fontWeight:"800",color:"#0C0C26",marginTop:-2}]}>{title}</Text>
                        </View>
                    </TouchableOpacity>
                </>
                }
            </View>
        )
}
export default HeaderComponent;