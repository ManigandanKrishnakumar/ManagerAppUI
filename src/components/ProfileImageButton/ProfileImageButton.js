import React, {useRef, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  Image,
  Animated,
} from 'react-native';
import styles from './ProfileImageButtonStyles';

export default ({member, isFocused, onPress, buttonStyle}) => {
  const focusedButtonValue = useRef(new Animated.Value(70)).current;
  const focusAnimation = Animated.spring(focusedButtonValue, {
    toValue: 80,
    useNativeDriver: false,
  });
  const blurAnimation = Animated.spring(focusedButtonValue, {
    toValue: 70,
    useNativeDriver: false,
  });

  useEffect(() => {
    if (isFocused) {
      focusAnimation.start();
    } else {
      blurAnimation.start();
    }
  }, [blurAnimation, focusAnimation, isFocused]);

  return (
    <View style={[styles.container, buttonStyle]}>
      <Animated.View
        style={[
          styles.buttonView,
          isFocused ? styles.buttonViewFocused : null,
          {
            height: focusedButtonValue,
            width: focusedButtonValue,
          },
        ]}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            onPress(member);
          }}>
          <Image source={{uri: member.image}} style={styles.image} />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};
