import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/globalStyleValues';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 17,
    fontWeight: '500',
    color: COLORS.FONT_BLACK_SHADE,
  },
  createdDate: {
    color: COLORS.FONT_BLACK_SHADE,
    fontSize: 12,
  },
});

export default styles;
