import React from 'react';
import {View, TouchableWithoutFeedback, Alert} from 'react-native';
import styles from './TaskCardStyles';
import TasksCardHeader from '../TasksCardHeader/TasksCardHeader';
import TaskCardBody from '../TaskCardBody/TaskCardBody';
import TaskCardFooter from '../TaskCardFooter/TaskCardFooter';
export default ({task, onLongPressTask, style}) => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onLongPress={() => {
          onLongPressTask(task);
        }}>
        <View>
          <TasksCardHeader title={task.title} createdDate={task.createdDate} />
          <TaskCardBody content={task.discription} />
          <TaskCardFooter
            comments={task.comments}
            subTasks={task.subTasks}
            members={task.profiles}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
