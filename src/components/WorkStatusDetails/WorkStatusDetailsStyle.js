import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/globalStyleValues';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusContainer: {
    flex: 3,
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: COLORS.FONT_BLACK_SHADE,
    paddingRight: 15,
    paddingTop: 25,
  },
  label: {
    flex: 1,
    fontWeight: '500',
    color: COLORS.FONT_BLACK_SHADE,
    fontSize: 16,
  },
  locationContainer: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  location: {
    marginLeft: 10,
    color: COLORS.FONT_BLACK_SHADE,
  },
  office: {
    marginBottom: 5,
  },
  status: {
    flex: 1,
  },
  text: {
    color: COLORS.FONT_BLACK_SHADE,
  },
  contractsContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingRight: 15,
  },
  contractsWrapper: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  totalContracts: {
    fontSize: 20,
  },
  meetingsWrapper: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
});

export default styles;
