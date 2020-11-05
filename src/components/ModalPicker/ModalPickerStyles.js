import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/globalStyleValues';

const styles = StyleSheet.create({
  container: {},
  selectedValue: {
    color: COLORS.FONT_BLACK_SHADE,
    fontSize: 16,
    fontWeight: '500',
    marginRight: 5,
  },
  dropDownIcon: {
    color: COLORS.SECONDARY_DARK,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
