import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './UserDetailsBarStyles';
import UserContext from '../../context/UserContext';
import {globalStyles} from '../../constants/globalStyles';
import {COLORS} from '../../constants/globalStyleValues';

export default () => {
  const userContext = useContext(UserContext);

  return (
    <View style={styles.container}>
      <View style={styles.userDetailsWrapper}>
        <Text style={[globalStyles.textBlack, styles.name]}>
          {userContext.data.name}
        </Text>
        <Text style={[globalStyles.textBlack, styles.role]}>
          {userContext.data.role}
        </Text>
      </View>

      <View style={styles.moreMenuContainer}>
        <MatIcon
          name="dots-horizontal"
          size={40}
          color={COLORS.FONT_BLACK_SHADE}
          style={styles.moreIcon}
        />
      </View>
    </View>
  );
};
