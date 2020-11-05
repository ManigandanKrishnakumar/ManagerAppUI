import React from 'react';
import {View, Text, TouchableOpacity, Image, Alert} from 'react-native';
import styles from './ProfileButtonStyles';
import {withNavigation} from '@react-navigation/compat';

export const ProfileButton = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('ProfileScreen');
        }}>
        <Text style={styles.profileName}>A</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileButton;
