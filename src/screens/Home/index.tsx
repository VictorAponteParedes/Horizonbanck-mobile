import {View, Text, Image} from 'react-native';
import {colors} from '../../assets/theme';

const HomeScreen = () => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          top: 30,
          backgroundColor: colors.greenPrimary[300],
          paddingVertical: 90,
          marginHorizontal: 15,
          borderRadius: 10,
        }}>
        <Text style={{color: colors.white, fontSize: 16, fontWeight: '700'}}>
          Tarjeta
        </Text>
      </View>
    </View>
  );
};

export default HomeScreen;
