import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/globalStyleValues';

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginVertical: 20,
    // transform: [
    //   {
    //     scale: 1,
    //   },
    // ],
  },
  icon: {
    color: '#bec1c8',
    marginBottom: 10,
    fontWeight: '400',
  },

  iconSelected: {
    color: COLORS.PRIMARY,
  },

  shadowEffect: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.65,

    elevation: 8,
  },
  button: {
    height: 85,
    width: 120,
    backgroundColor: COLORS.PRIMARY,
    borderRadius: 6,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 15,
  },
  buttonFocused: {
    backgroundColor: COLORS.SECONDARY_DARK,
    shadowColor: COLORS.SECONDARY_DARK,
    shadowOpacity: 1,
    elevation: 16,
  },
  label: {
    fontWeight: '500',
    color: COLORS.FONT_BLUE_SHADE,
  },
  labelFocused: {
    color: COLORS.PRIMARY,
  },
});

export default styles;
