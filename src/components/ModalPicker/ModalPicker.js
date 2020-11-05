import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from './ModalPickerStyles';
export default ({value, style}) => {
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          Alert.alert('Clicked');
        }}>
        <Text style={styles.selectedValue}>{value}</Text>
        <Icon name="chevron-down" size={25} style={styles.dropDownIcon} />
      </TouchableOpacity>
    </View>
  );
};
