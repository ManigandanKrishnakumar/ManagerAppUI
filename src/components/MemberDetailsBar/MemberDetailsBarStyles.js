import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/globalStyleValues';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  slot: {
    flex: 1,
  },
  tasksCountContainer: {
    alignItems: 'flex-end',
  },
  tasksCountWrapper: {
    alignItems: 'center',
  },
  tasksCount: {
    fontSize: 25,
    color: COLORS.FONT_BLACK_SHADE,
  },
  tasksCountLabel: {
    color: COLORS.FONT_BLACK_SHADE,
  },
  memberDetailsContainer: {
    flex: 3,
    alignItems: 'center',
  },
  memberName: {
    color: COLORS.FONT_BLACK_SHADE,
    fontSize: 20,
    fontWeight: '500',
  },
  role: {
    color: COLORS.FONT_BLACK_SHADE,
    marginTop: 5,
  },
  addTasksContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  addTaskIcon: {
    fontSize: 40,
  },
});

export default styles;
