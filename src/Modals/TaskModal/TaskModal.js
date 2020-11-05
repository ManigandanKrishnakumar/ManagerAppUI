import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  PanResponder,
  ScrollView,
} from 'react-native';
import styles from './TaskModalStyles';
import AntIcon from 'react-native-vector-icons/AntDesign';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import MembersList from '../../components/MembersList/MembersList';
import {COLORS} from '../../constants/globalStyleValues';
import Swipable from 'react-native-swipe-gestures';
import withEssentials from '../../HOCs/withEssentials';

const TaskModal = ({task, onSwipe, orientation, isPortrait}) => {
  const panResponder = useRef(PanResponder.create());
  useEffect(() => {}, [task]);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={task ? true : false}
      supportedOrientations={['portrait', 'landscape']}>
      {/* <ScrollView style={{flex: 1, backgroundColor: 'red'}}> */}
      <View style={[styles.overlay]} />

      <TaskModalCard
        task={task}
        onTapOutSide={onSwipe}
        orientation={orientation}
        isPortrait={isPortrait}
      />
      {/* </ScrollView> */}
    </Modal>
  );
};

export default withEssentials(TaskModal);
// export default TaskModal;

const TaskModalCard = ({task, onTapOutSide, isPortrait}) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[
        styles.taskModalCardContainer,
        !isPortrait ? styles.taskModalCardContainerLandscape : null,
      ]}
      contentContainerStyle={[
        styles.taskModalCardContentContainer,
        !isPortrait ? styles.taskModalCardContentLandscape : null,
      ]}>
      <TouchableOpacity
        style={[
          styles.overlayTouch,
          !isPortrait ? styles.overlayTouchLandscape : null,
        ]}
        onPress={() => {
          onTapOutSide(false);
        }}
      />

      <View style={[styles.taskModalCard, styles.shadow]}>
        <TaskModalHeader title={task.title} createdDate={task.createdDate} />
        <TaskMembersDetails
          profiles={task.profiles}
          timeTracked={task.timeTracked}
        />
        <TaskDescription description={task.discription} />
        <SubTasksLists subTasks={task.subTasks} />
      </View>
    </ScrollView>
  );
};

const TaskModalHeader = ({title, createdDate}) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.detailsContainer}>
        <Text style={[styles.title, styles.text]}>{title}</Text>
        <Text style={[styles.createdDate, styles.text]}>{createdDate}</Text>
      </View>
      <View style={styles.optionsContainer}>
        <AntIcon
          name="ellipsis1"
          size={30}
          style={[styles.optionsIcon, styles.text]}
        />
      </View>
    </View>
  );
};

const TaskMembersDetails = ({profiles, timeTracked}) => {
  return (
    <View style={styles.memberDetailsContainer}>
      <MembersList members={profiles} imageConfig={{height: 65, width: 65}} />
      <View style={styles.timeTrackedContainer}>
        <View style={styles.timeTrackedLabel}>
          <AntIcon name="clockcircle" size={15} color={COLORS.GRAY} />
          <Text style={[styles.timeTrackedLabelText]}>Time tracked:</Text>
        </View>
        <View style={styles.timeContainer}>
          <Text style={styles.time}>
            {timeTracked.hours}:{timeTracked.min}{' '}
            <Text style={styles.hourLabel}>h</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const TaskDescription = ({description}) => {
  return (
    <View style={styles.taskDescriptionContainer}>
      <Text style={styles.taskDescription}>{description}</Text>
    </View>
  );
};

const SubTasksLists = ({subTasks}) => {
  return (
    <View style={styles.subTasksContainer}>
      {subTasks.map((task, i) => {
        return <CheckListItem subTask={task} key={i} />;
      })}
    </View>
  );
};

const CheckListItem = ({subTask}) => {
  let icon;

  subTask.done
    ? (icon = (
        <Feather
          name="check-circle"
          size={25}
          color={COLORS.GREEN}
          style={styles.doneIcon}
        />
      ))
    : (icon = (
        <Feather
          name="circle"
          size={25}
          color={COLORS.GRAY}
          style={styles.notDoneIcon}
        />
      ));

  return (
    <View style={styles.checkListItemContainer}>
      {icon}
      <Text style={styles.subTask}>{subTask.title}</Text>
    </View>
  );
};
