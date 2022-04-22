import React from "react";

import { StyleSheet, SafeAreaView, Text, View, Platform, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from "react-native";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
  MaskSymbol,
  isLastFilledCell,
  
} from "react-native-confirmation-code-field";

const styles = StyleSheet.create({
  root: {
    // padding: 20,
    //  minHeight: 300,
    alignSelf: "stretch",
  },
  title: { textAlign: "center", fontSize: 30 },
  fieldRow: {
    marginTop: 20,
    flexDirection: "row",
    marginLeft: 8,
  },
  cell: {
    width: 62,
    height: 60,
    lineHeight: 55,
    fontSize: 25,
    fontWeight: "700",
    textAlign: "center",
    marginLeft: 8,
    borderRadius: 6,
    backgroundColor: "#E5E5E5",
  },
  toggle: {
    width: 55,
    height: 55,
    lineHeight: 55,
    fontSize: 24,
    textAlign: "center",
  },
  focusCell: {
    borderColor: "#000",
  },
});

export default function MaskedTokenComponent({
  length = 4,
  value,
  onchange,
  autoFocus = false,
  fieldStyle=null,
}) {
  const ref = useBlurOnFulfill({ value, cellCount: length });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue:onchange,
  });

  const renderCell = ({ index, symbol, isFocused }) => {
    let textChild = null;

    if (symbol) {
      textChild = (
        <MaskSymbol
          maskSymbol="•"
          isLastFilledCell={isLastFilledCell({ index, value })}
        >
          {symbol}
        </MaskSymbol>
      );
    } else if (isFocused) {
      textChild = <Cursor />;
    }

    return (
      <Text
        key={index}
        style={[styles.cell, fieldStyle, isFocused && styles.focusCell]}
        onLayout={getCellOnLayoutHandler(index)}
      >
        {textChild}
      </Text>
    );
  };

  return (
    <View style={styles.root}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={styles.fieldRow}>
            <CodeField
              ref={ref}
              {...props}
              value={value}
              onChangeText={onchange}
              cellCount={length}
              keyboardType="number-pad"
              secureTextEntry={true}
              textContentType="oneTimeCode"
              renderCell={renderCell}
              autoFocus={autoFocus}
            />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
}
