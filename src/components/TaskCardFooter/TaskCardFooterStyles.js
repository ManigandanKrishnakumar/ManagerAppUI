import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/globalStyleValues';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  commentsAndSubTasks: {
    flexDirection: 'row',
  },
  iconData: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentIcon: {
    fontWeight: '500',
    color: COLORS.GREEN,
  },
  subTaskContainer: {
    marginLeft: 10,
  },
  subTaskIcon: {
    color: COLORS.ORANGE,
  },
  text: {
    color: COLORS.FONT_BLACK_SHADE,
    fontWeight: '500',
    marginLeft: 5,
  },
});

export default styles;
