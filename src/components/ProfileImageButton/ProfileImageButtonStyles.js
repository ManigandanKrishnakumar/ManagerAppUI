import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/globalStyleValues';

const styles = StyleSheet.create({
  container: {},
  buttonView: {
    height: 70,
    width: 70,
    backgroundColor: COLORS.SECONDARY_LIGHT,
    marginRight: 10,
    borderRadius: 5,
  },
  buttonViewFocused: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 7,

    elevation: 10,
  },
  button: {
    flex: 1,
  },
  image: {
    flex: 1,
    borderRadius: 5,
  },
});

export default styles;
