import React, {useState, useContext} from 'react';
import {Text, View, ScrollView} from 'react-native';
import styles from './loginScreenStyles';
import AvscInput from '../../components/AvscInput/AvscInput';
import withEssentials from '../../HOCs/withEssentials';
import AvscButton from '../../components/AvscButton/AvscButton';
import {useNavigation} from '@react-navigation/native';
import {login} from '../../services/AuthService';
import UserContext from '../../context/UserContext';

const Login = ({isPortrait}) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const userContext = useContext(UserContext);
  const navigation = useNavigation();

  const onLogin = async () => {
    if (userName.length && password.length) {
      setUserName('');
      setPassword('');
      const isLoggedIn = await login(userContext.setLoginStatus, {
        username: userName,
        password,
      });
      isLoggedIn ? navigation.navigate('HomeScreen') : null;
    }
  };

  return (
    <ScrollView
      style={[
        styles.container,
        !isPortrait ? styles.containerLandscape : null,
      ]}>
      <View style={styles.logoContainer}>
        <Text
          style={[
            styles.companyLogo,
            !isPortrait ? styles.companyLogoLandscape : null,
          ]}>
          avsc.
        </Text>
      </View>
      <View style={styles.formContainer}>
        <AvscInput
          type="text"
          value={userName}
          onChange={setUserName}
          placeholder="Username"
        />
        <AvscInput
          type="password"
          value={password}
          onChange={setPassword}
          placeholder="Password"
        />

        <AvscButton
          buttonTitle="Let's get Started"
          style={styles.loginButton}
          onPress={() => {
            onLogin();
          }}
        />
        <Text style={styles.forgotPassword}>
          Did you forget your password ? {userContext.data.role}
        </Text>
      </View>
    </ScrollView>
  );
};

export default withEssentials(Login);
