import React, {useContext} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './UserProfileImageStyle';
import UserContext from '../../context/UserContext';

export default () => {
  const userContext = useContext(UserContext);

  return (
    <View style={styles.container}>
      <Image source={{uri: userContext.data.image}} style={styles.image} />
    </View>
  );
};
