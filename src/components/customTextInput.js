import React from "react";
import { TextInput, View, StyleSheet } from "react-native";

const CustomTextInput = ({
  text,
  onChangeText,
  multiline = false,
  placeholder,
  numberOfLines,
}) => (
  <View style={(styles.container, styles.input)}>
    <TextInput
      multiline={multiline}
      numberOfLines={numberOfLines}
      defaultValue={text}
      onChangeText={onChangeText}
      placeholder={placeholder}
    />
  </View>
);

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: "#DDDDDD",
    padding: 10,
    marginTop: 50,
  },
  container: {
    marginTop: 100,
  },
});

export default CustomTextInput;
