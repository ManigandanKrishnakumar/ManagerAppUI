import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/globalStyleValues';

const SIZE = 60;
const styles = StyleSheet.create({
  container: {
    height: SIZE,
    width: SIZE,
    borderRadius: SIZE / 2,
    backgroundColor: 'grey',
  },
  button: {
    backgroundColor: COLORS.SECONDARY_LIGHT,
    flex: 1,
    borderRadius: SIZE / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileName: {
    fontSize: 30,
    color: COLORS.SECONDARY,
  },
});

export default styles;
