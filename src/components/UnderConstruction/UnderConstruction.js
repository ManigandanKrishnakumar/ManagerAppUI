import React from 'react';
import {View, Text} from 'react-native';
import styles from './UnderConstructionStyles';
import {globalStyles} from '../../constants/globalStyles';

import IonIcon from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../constants/globalStyleValues';
import withEssentials from '../../HOCs/withEssentials';

const UnderConstruction = ({isPortrait}) => {
  return (
    <View
      style={[
        styles.container,
        !isPortrait ? styles.containerLandscape : null,
      ]}>
      <IonIcon
        name="ios-construct"
        size={100}
        color={COLORS.FONT_BLACK_SHADE}
        style={styles.icon}
      />
      <Text style={[globalStyles.textBlack, styles.contructionText]}>
        {' '}
        Under construction{' '}
      </Text>
    </View>
  );
};

export default withEssentials(UnderConstruction);
