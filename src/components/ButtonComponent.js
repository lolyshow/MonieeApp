import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../utils/colors';

const ButtonComponent = ({
  title,
  loading,
  disabled,
  styleButton,
  onPress,
  buttonTittle,
}) => {
  const getBackgroundColor = () => {
    if (disabled) {
      return colors.GREY;
    }

    if (!disabled) {
      return colors.SECONDARY;
    }
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        style.container,
        {backgroundColor: disabled ? '#bfbfbf' : colors.SECONDARY},
        styleButton,
      ]}
      disabled={disabled || loading}>
      <View style={{flexDirection: 'row'}}>
        {loading && <ActivityIndicator size={20} color="#00A859" />}
        <Text style={([style.buttonTittle], buttonTittle)}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonComponent;

const style = StyleSheet.create({
  container: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginVertical: 10,
    lineHeight: 18,
    fontSize: 16,
  },
  buttonTittle: {
    fontFamily: 'Jost-Regular',
    fontSize: 16,
    lineHeight: 24,
    paddingLeft: 10,
    color: '#000',
    fontWeight: '700',
    
  },
});
