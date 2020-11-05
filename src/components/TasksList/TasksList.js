import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import TaskCard from '../TaskCard/TaskCard';
import {getTasks} from '../../services/MemberDetailsServices';
import styles from './TasksListStyles';

export default ({member, onLongPressTask}) => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    setTasks(getTasks(member.id));
  }, [member]);
  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={tasks}
          keyExtractor={(task) => task.id}
          renderItem={({item}) => {
            return <TaskCard onLongPressTask={onLongPressTask} task={item} />;
          }}
          style={styles.list}
        />
      </View>
    </View>
  );
};
