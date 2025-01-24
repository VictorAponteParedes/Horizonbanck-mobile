import {StyleSheet} from 'react-native';
import {colors} from '../../assets/theme';
import {fontsPlayFairDisplay} from '../../assets/fonts';

const style = StyleSheet.create({
  acctionButtom: {
    backgroundColor: 'white',
    borderColor: colors.greenPrimary[300],
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 10,
    marginHorizontal: 20,
    marginVertical: 20,
  },
  acctionButtomText: {
    color: 'black',
    fontSize: 15,
    textAlign: 'center',
    fontFamily: fontsPlayFairDisplay.regular,
  },
});
export default style;
