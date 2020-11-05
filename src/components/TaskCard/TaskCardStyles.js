import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/globalStyleValues';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.PRIMARY,
    marginBottom: 20,
    borderRadius: 5,
    maxWidth: 500,
    padding: 20,
  },
  pressable: {
    flex: 1,
  },
});

export default styles;
