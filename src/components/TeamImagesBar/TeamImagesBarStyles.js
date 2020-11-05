import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/globalStyleValues';

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
  },
  moreButton: {
    height: 70,
    width: 70,
    backgroundColor: COLORS.MORE_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  moreButtonText: {
    color: COLORS.PRIMARY,
    fontSize: 20,
    fontWeight: '500',
  },
});

export default style;
