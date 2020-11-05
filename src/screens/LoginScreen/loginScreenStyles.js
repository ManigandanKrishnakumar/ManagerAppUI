import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/globalStyleValues';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY,
    paddingHorizontal: 40,
    paddingTop: '35%',
  },
  containerLandscape: {
    paddingTop: '5%',
    paddingHorizontal: 100,
  },
  logoContainer: {},
  companyLogo: {
    fontSize: 35,
    marginBottom: 100,
    textAlign: 'center',
    fontFamily: 'Helvetica Neue',
  },
  formContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  companyLogoLandscape: {
    marginBottom: 50,
  },
  loginButton: {
    marginVertical: 20,
    width: '100%',
  },
  forgotPassword: {
    textAlign: 'center',
    marginVertical: 10,
    color: COLORS.FONT_BLUE_SHADE,
    paddingBottom: 10,
  },
});

export default styles;
