import React, {useRef, useEffect} from 'react';
import {View, Text, TouchableOpacity, Animated} from 'react-native';
import styles from './TabButtonStyles';
import Icon from 'react-native-vector-icons/Feather';

export default ({
  index,
  accessibilityRole,
  onPress,
  onLongPress,
  isFocused,
  options,
  label,
  iconDetail,
}) => {
  const buttonScaleValue = useRef(new Animated.Value(0)).current;
  const buttonScaleAnimation = Animated.spring(buttonScaleValue, {
    toValue: 1,
    useNativeDriver: false,
  });

  useEffect(() => {
    buttonScaleAnimation.start();
  }, [buttonScaleAnimation]);

  return (
    <Animated.View
      style={[styles.container, {transform: [{scale: buttonScaleValue}]}]}>
      <TouchableOpacity
        accessibilityRole={accessibilityRole}
        accessibilityStates={isFocused ? ['selected'] : []}
        accessibilityLabel={options.tabBarAccessibilityLabel}
        testID={options.tabBarTestID}
        onPress={onPress}
        onLongPress={onLongPress}
        style={[
          styles.button,
          styles.shadowEffect,
          isFocused ? styles.buttonFocused : null,
        ]}>
        {iconDetail ? (
          <Icon
            name={iconDetail.name}
            size={25}
            style={[styles.icon, isFocused ? styles.iconSelected : null]}
          />
        ) : null}
        <Text style={[styles.label, isFocused ? styles.labelFocused : null]}>
          {label}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};
