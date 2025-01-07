import { View, Text, Image } from 'react-native';
import { colors } from '../../assets/theme';
import { dataActivity } from '../../data';

const HomeScreen = () => {


  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: '#d9d8df', paddingVertical: 30 }}>
        <View
          style={{
            backgroundColor: colors.greenPrimary[300],
            paddingVertical: 75,
            marginHorizontal: 15,
            borderRadius: 10,


          }}>
          <Text style={{ color: colors.white, fontSize: 16, fontWeight: '700' }}>
            Tarjeta
          </Text>
        </View>
      </View>


      <View style={{ marginHorizontal: 15 }}>
        <Text style={{ fontSize: 20 }}>Actividades recientes</Text>


        <View>

        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
