import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/globalStyleValues';

const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: 'row',
    marginTop: 20,
  },
  pickerContainers: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 25,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: COLORS.GRAY,
  },
  teamPickerContainer: {
    alignItems: 'flex-end',
    borderRightWidth: 0,
  },
});

export default styles;
