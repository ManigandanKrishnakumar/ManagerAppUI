import React, {useState, useContext} from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './TasksTabStyles';
import ProjectAndTeamPicker from '../ProjectAndTeamPicker/ProjectAndTeamPicker';
import TeamImagesBar from '../TeamImagesBar/TeamImagesBar';
import {DESIGN_TEAM} from '../../constants/AppConstants';
import MemberDetailsBar from '../MemberDetailsBar/MemberDetailsBar';
import TasksList from '../TasksList/TasksList';
import TaskModal from '../../Modals/TaskModal/TaskModal';

export default () => {
  const team = DESIGN_TEAM;
  const [focusedMember, setFocusedMember] = useState(team[2]);
  const [selectedTask, setSelectedTask] = useState(false);

  return (
    <View style={styles.container}>
      <ProjectAndTeamPicker />
      <TeamImagesBar
        team={team}
        focusedMember={focusedMember}
        onPressOfMember={setFocusedMember}
      />
      <MemberDetailsBar member={focusedMember} />

      <TasksList member={focusedMember} onLongPressTask={setSelectedTask} />
      <TaskModal task={selectedTask} onSwipe={setSelectedTask} />
    </View>
  );
};
