import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../constants/globalStyleValues';

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: COLORS.PRIMARY,
    opacity: 0.5,
  },
  overlayTouch: {
    flexGrow: 1,
  },
  overlayTouchLandscape: {
    flexGrow: 0,
  },

  taskModalCardContainer: {
    flexGrow: 1,
    paddingHorizontal: 15,
    paddingBottom: 30,
  },
  taskModalCardContainerLandscape: {
    marginTop: 20,
    maxHeight: Dimensions.get('screen').height,
  },
  taskModalCardContentContainer: {
    height: Dimensions.get('screen').height,
  },
  taskModalCardContentLandscape: {
    justifyContent: 'flex-start',
  },
  taskModalCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 10,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: COLORS.GRAY,
  },
  detailsContainer: {},
  title: {
    fontSize: 20,
    marginBottom: 5,
  },
  createdDate: {},
  optionsContainer: {},
  optionsIcon: {},
  memberDetailsContainer: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: COLORS.GRAY,
  },
  timeTrackedContainer: {
    alignItems: 'flex-end',
  },
  timeTrackedLabel: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  timeTrackedLabelText: {
    color: COLORS.GRAY,
    marginLeft: 5,
  },
  timeContainer: {
    marginTop: 10,
  },
  time: {
    fontSize: 25,
    color: COLORS.SECONDARY_DARK,
  },
  hourLabel: {
    color: COLORS.SECONDARY_DARK,
    opacity: 0.8,
  },
  taskDescriptionContainer: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: COLORS.GRAY,
  },
  taskDescription: {
    lineHeight: 22,
    color: COLORS.GRAY,
  },
  subTasksContainer: {
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  checkListItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  doneIcon: {},
  notDoneIcon: {},
  subTask: {
    marginLeft: 10,
    color: COLORS.GRAY,
  },

  text: {
    color: COLORS.FONT_BLACK_SHADE,
  },
});

export default styles;
