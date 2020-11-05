import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/globalStyleValues';

const styles = StyleSheet.create({
  catagoriesTabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  // scrollView: {
  //   backgroundColor: 'red',
  // },
  // catagoryTabButton: {
  //   padding: 20,
  // },
  // catagoryName: {
  //   fontSize: 20,
  // },
  // catagorySelected: {
  //   paddingBottom: 0,
  //   borderBottomWidth: 5,
  // },
  // catagorySelectedText: {
  //   fontWeight: '600',
  // },
  // catagoriesNotSelected: {},
  // catagoriesNotSelectedText: {
  //   color: COLORS.GRAY,
  // },

  // FLAT LIST
  flatListBar: {flex: 1},
  flatListBarContent: {
    justifyContent: 'center',
    // flex: 1,
  },
});

export default styles;
