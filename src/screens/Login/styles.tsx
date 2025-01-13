import { StyleSheet } from 'react-native';
import { colors } from '../../assets/theme';
import { fontsPlayFairDisplay } from '../../assets/fonts';

const styles = StyleSheet.create({
  buttomContainerLogin: {
    backgroundColor: colors.greenPrimary[300],
    paddingVertical: 12,
    borderRadius: 5,
    top: 10,
  },
  buttomContainerRegister: {
    marginTop: 40,
  },
  IconLogins: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 5,
    borderRadius: 5,
    marginBottom: 10,
    borderColor: 'gray',
    borderWidth: 0.2,
  },
  textLogin: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 16,
    fontFamily: fontsPlayFairDisplay.regular,
  },
  textRegister: {
    color: colors.greenPrimary[500],
    textAlign: 'center',
    fontSize: 14,
    fontFamily: fontsPlayFairDisplay.regular,
  },
  containerRedes: {
    flex: 1,
    justifyContent: 'center',
    top: 30,
  },
});

export default styles;
