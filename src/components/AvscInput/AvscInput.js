import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './AvscInputStyles';

const isPassword = (type) => {
  return type === 'password';
};

export default ({value, onChange, type, placeholder, style}) => {
  return (
    <View style={[styles.inputContainer, style]}>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        value={value}
        onChangeText={(newValue) => {
          onChange(newValue);
        }}
        secureTextEntry={isPassword(type)}
      />
    </View>
  );
};
