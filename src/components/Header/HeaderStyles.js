import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    // height: 60,
    flexDirection: 'row',
    paddingTop: 20,
  },
  backButton: {
    flex: 1,
    justifyContent: 'center',
  },
  logoContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontSize: 30,
  },
  profileButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hide: {
    display: 'none',
  },
});

export default styles;
