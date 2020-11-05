import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './AvscButtonStyles';

export default ({buttonTitle, onPress, style, children}) => {
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity onPress={onPress} style={[styles.button]}>
        <Text style={styles.buttonText}>{buttonTitle}</Text>
        {children}
      </TouchableOpacity>
    </View>
  );
};
