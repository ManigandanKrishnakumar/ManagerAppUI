/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './src/screens/LoginScreen/login';
import Home from './src/screens/HomeScreen/Home';
import {autoLogin} from './src/services/AuthService';
import ProfileScreen from './src/screens/ProfileScreen/ProfileScreen';
import UserContext from './src/context/UserContext';
import VendorHomeScreen from './src/screens/VendorHomeScreen/VendorHomeScreen';
import VendorProfileScreen from './src/screens/VendorProfileScreen/VendorProfile';
import {ActivityIndicator, View, StyleSheet} from 'react-native';

const RootNavigationComponent = () => {
  const Root = createStackNavigator();
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const setLoginStatus = (loginData) => {
    setUserData(JSON.parse(JSON.stringify(loginData)));
  };

  const setLogoutStatus = (data) => {
    setUserData(JSON.parse(JSON.stringify(data)));
  };

  useEffect(() => {
    async function loginCheck() {
      try {
        await autoLogin(setLoginStatus);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    loginCheck();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingView}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <UserContext.Provider
      value={{data: userData, setLoginStatus, setLogoutStatus}}>
      <NavigationContainer>
        <Root.Navigator
          headerMode="none"
          initialRouteName={userData.isLoggedIn ? 'HomeScreen' : 'LoginScreen'}>
          <Root.Screen name="LoginScreen" component={Login} />
          <Root.Screen
            name="HomeScreen"
            component={userData.role === 'Vendor' ? VendorHomeScreen : Home}
          />

          <Root.Screen
            name="ProfileScreen"
            component={
              userData.role === 'Vendor' ? VendorProfileScreen : ProfileScreen
            }
          />
        </Root.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  );
};

const App = () => {
  return <RootNavigationComponent />;
};

export default App;

const styles = StyleSheet.create({
  loadingView: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
