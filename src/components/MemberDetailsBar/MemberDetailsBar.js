import React, {useEffect, useState, useRef, useContext} from 'react';
import {View, Text, TouchableOpacity, Animated} from 'react-native';
import styles from './MemberDetailsBarStyles';
import {getTasksCount} from '../../services/MemberDetailsServices';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../constants/globalStyleValues';

export default ({member}) => {
  const tasksCount = useRef(new Animated.Value(0)).current;
  const tasksAnimation = Animated.timing(tasksCount, {
    toValue: getTasksCount(member.id),
    duration: 200,
    useNativeDriver: false,
  });

  const [tasksCountForDisplay, setTasksCountForDisplay] = useState();
  useEffect(() => {
    tasksCount.addListener((progress) => {
      setTasksCountForDisplay(Math.floor(progress.value));
    });
    tasksAnimation.start();

    return () => {
      tasksCount.removeAllListeners();
    };
  }, [member, tasksAnimation, tasksCount]);

  return (
    <View style={styles.container}>
      <View style={[styles.tasksCountContainer, styles.slot]}>
        <View style={styles.tasksCountWrapper}>
          <Text style={styles.tasksCount}>{tasksCountForDisplay}</Text>
          <Text style={styles.tasksCountLabel}>tasks</Text>
        </View>
      </View>
      <View style={[styles.slot, styles.memberDetailsContainer]}>
        <Text style={styles.memberName}>{member.name}</Text>
        <Text style={styles.role}>{member.role}</Text>
      </View>
      <View style={[styles.addTasksContainer, styles.slot]}>
        <TouchableOpacity>
          <Icon
            name="ios-add-circle-outline"
            color={COLORS.GREEN}
            style={styles.addTaskIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
