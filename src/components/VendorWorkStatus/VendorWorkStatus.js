import React from 'react';
import {View, Text} from 'react-native';
import styles from './VendorWorkStatusStyles';
import UserProfileImage from '../UserProfileImage/UserProfileImage';
import WorkStatusDetails from '../WorkStatusDetails/WorkStatusDetails';

export default ({workStatus}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <UserProfileImage />
      </View>
      <View style={styles.workStatusContainer}>
        <WorkStatusDetails workStatus={workStatus} />
      </View>
    </View>
  );
};
