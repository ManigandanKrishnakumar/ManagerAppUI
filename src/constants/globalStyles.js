import {StyleSheet} from 'react-native';
import {COLORS} from './globalStyleValues';

export const globalStyles = StyleSheet.create({
  textBlack: {
    color: COLORS.FONT_BLACK_SHADE,
  },
  shadowEffect: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
});
