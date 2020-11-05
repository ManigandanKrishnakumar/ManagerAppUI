import React from 'react';
import {View, Text} from 'react-native';
import styles from './WorkStatusDetailsStyle';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../../constants/globalStyleValues';

export default ({workStatus}) => {
  return (
    <View style={styles.container}>
      <View style={styles.statusContainer}>
        <Text style={styles.label}>Work status:</Text>

        <View style={styles.locationContainer}>
          <Icon name="record-circle-outline" size={20} color={COLORS.GREEN} />
          <Text style={styles.location}>
            {workStatus.location.city},{workStatus.location.country}
          </Text>
        </View>

        <Text style={[styles.office, styles.text]}>
          {workStatus.location.office}
        </Text>

        <Text style={[styles.text, styles.status]}>{workStatus.status}</Text>
      </View>

      <View style={styles.contractsContainer}>
        <View style={styles.contractsWrapper}>
          <Text style={[styles.totalContracts, styles.text]}>
            {workStatus.totalContracts}
          </Text>
          <Text style={[styles.text, styles.contractsLabel]}>contracts</Text>
        </View>
        <View style={styles.meetingsWrapper}>
          <Text style={[styles.totalContracts, styles.text]}>
            {workStatus.totalMeetings}
          </Text>
          <Text style={[styles.text, styles.contractsLabel]}>meetings</Text>
        </View>
      </View>
    </View>
  );
};
