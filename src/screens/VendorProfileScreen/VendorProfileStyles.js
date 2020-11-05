import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  loadingView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  backContainer: {
    flex: 1,
  },
  backIconWrapper: {
    alignItems: 'center',
  },
  backIcon: {
    fontWeight: '100',
  },
  profileContainer: {
    flex: 5,
  },
  profileView: {
    flex: 1,
  },
  workStatusContainer: {
    flex: 4,
  },
  userDetailsContainer: {
    flexGrow: 0.5,
    justifyContent: 'center',
  },
  efficiencyContainer: {
    flexGrow: 6,
  },
});

export default styles;
