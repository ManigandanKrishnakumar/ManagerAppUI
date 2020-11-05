import React, {useEffect, useRef} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './TaskCardFooterStyles';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MemberList from '../MembersList/MembersList';
export default ({comments, subTasks, members}) => {
  let completedTask = useRef(
    subTasks.filter((task) => task.done === true).length,
  ).current;

  return (
    <View style={styles.container}>
      <View style={styles.commentsAndSubTasks}>
        <View style={[styles.iconData]}>
          <FontistoIcon name="comment" size={15} style={styles.commentIcon} />
          <Text style={[styles.text]}>{comments}</Text>
        </View>
        <View style={[styles.iconData, styles.subTaskContainer]}>
          <FeatherIcon name="list" size={20} style={styles.subTaskIcon} />
          <Text style={[styles.text]}>
            {completedTask}/{subTasks.length}
          </Text>
        </View>
      </View>
      <MemberList members={members} />
    </View>
  );
};
