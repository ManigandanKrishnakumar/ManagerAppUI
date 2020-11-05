import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/globalStyleValues';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  cardsContainer: {
    flex: 2,
    backgroundColor: 'red',
    width: '100%',
  },
  titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  vendorIcon: {
    marginRight: 10,
  },
  pageTitle: {
    fontSize: 30,
  },
  profileIcon: {
    color: COLORS.PRIMARY,
    marginLeft: 10,
  },
  buttonStyle: {
    margin: 15,
  },
});

export default styles;
