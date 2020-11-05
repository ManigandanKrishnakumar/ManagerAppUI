import {StyleSheet} from 'react-native';
import {COLORS, BORDER_RADIUS} from '../../constants/globalStyleValues';

const styles = StyleSheet.create({
  container: {
    height: 60,
    minWidth: 300,
    maxWidth: 600,
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.SECONDARY,
    borderRadius: BORDER_RADIUS.LEVEL_1,
  },
  buttonText: {
    color: COLORS.PRIMARY,
    fontSize: 20,
    fontWeight: '500',
  },
});

export default styles;
