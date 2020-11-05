import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import UserContext from '../../context/UserContext';
import {logout} from '../../services/AuthService';
import styles from './ProfileScreenStyles';
import {withNavigation} from '@react-navigation/compat';

const ProfileScreen = ({navigation}) => {
  const userContext = useContext(UserContext);
  const onLogout = async () => {
    await logout(userContext.setLogoutStatus);
    navigation.navigate('LoginScreen');
  };
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
      <Button onPress={() => onLogout()} title=" Log out " />
    </View>
  );
};

export default withNavigation(ProfileScreen);
