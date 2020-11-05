import {StyleSheet} from 'react-native';
import {BORDER_RADIUS, COLORS} from '../../constants/globalStyleValues';

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    height: 60,
    marginVertical: 7,
    maxWidth: 600,
  },
  input: {
    flex: 1,
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: BORDER_RADIUS.LEVEL_1,
    borderColor: COLORS.SECONDARY_LIGHT,
    fontWeight: '500',
    fontSize: 20,
    color: COLORS.FONT_BLUE_SHADE,
  },
});

export default styles;
