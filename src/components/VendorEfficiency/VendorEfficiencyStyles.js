import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/globalStyleValues';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: COLORS.FONT_BLACK_SHADE,
  },
  monthlyDataContainer: {
    flex: 1.5,
    flexDirection: 'row',
  },
  progressBarContainer: {
    flex: 2,
    flexDirection: 'row',
  },
  monthlyDataWrapper: {
    flex: 1,
  },
  progressPercentWrapper: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  moreButton: {
    height: 100,
    width: 100,
    backgroundColor: COLORS.GRAY,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  moreLabel: {
    color: COLORS.PRIMARY,
  },
  circularBarContainer: {
    flex: 1.25,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  notesContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'space-evenly',
    paddingRight: 15,
  },
  notesLabel: {
    fontWeight: '500',
  },
  notes: {
    textAlign: 'right',
  },
  editContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  editLabel: {
    fontSize: 17,
    marginLeft: 10,
  },
});

export const cmDataStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  picker: {
    marginVertical: 10,
  },
  contractsContainer: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  contract: {
    color: COLORS.SECONDARY_DARK,
    marginRight: 5,
    fontWeight: '500',
  },
  meetings: {
    fontWeight: '500',
  },
});

export const progressSquareStyle = StyleSheet.create({
  containter: {
    height: 100,
    width: 100,
    backgroundColor: COLORS.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginRight: 10,
  },
  progText: {
    fontSize: 25,
  },
  positive: {
    color: COLORS.GREEN,
  },
  negative: {
    color: 'red',
  },
});
export default styles;
