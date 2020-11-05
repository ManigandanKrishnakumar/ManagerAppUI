import React, {useContext} from 'react';
import {View, Text, Button, TouchableOpacity, Animated} from 'react-native';
import UserContext from '../../context/UserContext';
import {logout} from '../../services/AuthService';
import styles from './VendorHomeScreenStyles';
import {withNavigation} from '@react-navigation/compat';
import Icon from 'react-native-vector-icons/Entypo';
import IonIcon from 'react-native-vector-icons/Ionicons';
import AvscButton from '../../components/AvscButton/AvscButton';

const VendorHomeScreen = ({navigation}) => {
  const userContext = useContext(UserContext);
  const onLogout = async () => {
    navigation.navigate('LoginScreen');
    await logout(userContext.setLogoutStatus);
  };
  const onProfilePress = () => {
    navigation.navigate('ProfileScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <View style={styles.titleWrapper}>
          <IonIcon name="business" size={40} style={styles.vendorIcon} />
          <Text style={styles.pageTitle}>Vendor Home Screen</Text>
        </View>
      </View>

      <AvscButton
        buttonTitle="Log out"
        onPress={onLogout}
        style={styles.buttonStyle}
      />

      <AvscButton
        buttonTitle="Profile"
        style={styles.buttonStyle}
        onPress={onProfilePress}>
        <Icon style={styles.profileIcon} name="user" size={20} />
      </AvscButton>
    </View>
  );
};

export default withNavigation(VendorHomeScreen);
