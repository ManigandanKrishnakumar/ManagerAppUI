import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styles from './HeaderStyles';
import ProfileButton from '../ProfileButton/ProfileButton';
import Icon from 'react-native-vector-icons/AntDesign';

export default ({config, navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={[styles.backButton]}>
          {/* <Text style={!config.showBack ? styles.hide : null}>back</Text> */}
          <Icon
            style={!config.showBack ? styles.hide : null}
            name="arrowleft"
            size={30}
          />
        </View>
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>avsc.</Text>
        </View>
        <View style={styles.profileButton}>
          <ProfileButton navigation={navigation} />
        </View>
      </View>
    </SafeAreaView>
  );
};
