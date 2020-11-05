import React from 'react';
import {View} from 'react-native';
import ModalPicker from '../ModalPicker/ModalPicker';
import styles from './ProjectAndTeamPickerStyles';
import style from '../TasksTab/TasksTabStyles';
export default () => {
  return (
    <View style={styles.container}>
      <View style={[styles.teamPickerContainer, styles.pickerContainers]}>
        <ModalPicker value="Design Team" />
      </View>
      <View style={[style.projectPickerContainer, styles.pickerContainers]}>
        <ModalPicker value="Project Y" />
      </View>
    </View>
  );
};
