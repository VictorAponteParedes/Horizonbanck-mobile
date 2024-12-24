import {View, Text} from 'react-native';
import LOGOHORIZONBANK from '../../assets/svg/horizonBankLogo.svg';

const HomeScreen = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{paddingVertical: 20, backgroundColor: '#75e0b5'}}>
        <LOGOHORIZONBANK width={350} height={160} />
      </View>
    </View>
  );
};

export default HomeScreen;
