import React, {useContext} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import styles from './VendorProfileStyles';

import AntIcon from 'react-native-vector-icons/AntDesign';
import useProfileData from '../../hooks/useProfileData';
import VendorWorkStatus from '../../components/VendorWorkStatus/VendorWorkStatus';
import UserDetailsBar from '../../components/UserDetailsbar/UserDetailsBar';
import VendorEfficiency from '../../components/VendorEfficiency/VendorEfficiency';

export default ({navigation}) => {
  const [profileData, error, loading] = useProfileData();
  const onBack = () => {
    navigation.goBack();
  };
  if (loading) {
    return (
      <View style={styles.loadingView}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.loadingView}>
        <Text>An error occured please comeback later</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.backContainer}>
        <SafeAreaView>
          <View style={styles.backIconWrapper}>
            <TouchableOpacity onPress={onBack}>
              <AntIcon name="arrowleft" size={30} style={styles.backIcon} />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
      <View style={styles.profileContainer}>
        <SafeAreaView style={styles.profileView}>
          <View style={styles.workStatusContainer}>
            <VendorWorkStatus workStatus={profileData.workStatus} />
          </View>
          <View style={styles.userDetailsContainer}>
            <UserDetailsBar />
          </View>
          <View style={styles.efficiencyContainer}>
            <VendorEfficiency efficiencyData={profileData.currentMonthData} />
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
};
