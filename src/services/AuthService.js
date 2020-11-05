import AsyncStorage from '@react-native-community/async-storage';

export const isLoggedIn = () => {
  return true;
};

export const autoLogin = async (loginState) => {
  try {
    const userData = JSON.parse(await AsyncStorage.getItem('userData'));
    if (userData) {
      loginState({...userData, isLoggedIn: true});
    } else {
      loginState({...userData, isLoggedIn: false});
    }
  } catch (error) {
    console.log('Could not access the Async Storage', error);
  }
};

export const logout = async (setLoginState) => {
  try {
    await AsyncStorage.removeItem('userData');
    setLoginState({isLoggedIn: false});
  } catch (error) {
    console.log(error);
  }
};

export const login = async (setLoginState, userCreds) => {
  try {
    if (
      (userCreds.username === 'Mani' || userCreds.username === 'Sanjay') &&
      userCreds.password === 'Welcome@123'
    ) {
      let USER;
      userCreds.username === 'Mani' ? (USER = user) : (USER = userVendor);
      await AsyncStorage.setItem('userData', JSON.stringify(USER));
      setLoginState({...USER, isLoggedIn: true});
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};

const userVendor = {
  id: '3',
  name: 'Julie',
  role: 'Vendor',
  image:
    'https://writestylesonline.com/wp-content/uploads/2019/01/What-To-Wear-For-Your-Professional-Profile-Picture-or-Headshot.jpg',
};

const user = {
  id: '2',
  name: 'Julie',
  role: 'UX Designer',
  image:
    'https://charlotteknee.com/photography/wp-content/uploads/2015/04/Professional-Profile-Photograph-Corporate-Headshot-copyright-Charlotte-Knee-Photography_00021.jpg',
};
