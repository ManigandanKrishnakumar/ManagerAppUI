import React from 'react';
import {View, Text} from 'react-native';

import styles from './TaskCardBodyStyles';

export default ({content}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.content} numberOfLines={4}>
        {content}
      </Text>
    </View>
  );
};
