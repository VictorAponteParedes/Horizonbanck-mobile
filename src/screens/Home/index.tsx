import {View, Text, TouchableOpacity} from 'react-native';
import LOGOHORIZONBANK from '../../assets/svg/horizonBankLogo.svg';
import {colors} from '../../assets/theme';
import InputCustom from '../../components/inputs';
import {useForm} from 'react-hook-form';

type UserLoginType = {
  email: string;
  password: string;
};

const HomeScreen = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = async (data: UserLoginType) => {
    try {
      console.log('Usuario logueado', data);
    } catch (error) {
      console.log('Error al enviar los datos:', error);
    }
  };
  return (
    <View style={{flex: 1}}>
      <View style={{paddingVertical: 20, backgroundColor: colors.greenLith}}>
        <LOGOHORIZONBANK width={350} height={160} />
      </View>

      <View style={{flex: 1, marginHorizontal: 10}}>
        <InputCustom
          control={control}
          name="email"
          placeholderText="Correo electrónico"
          placeholderColor="#9d9796"
        />
        <InputCustom
          control={control}
          name="passwork"
          placeholderText="Contraseña"
          placeholderColor="#9d9796"
        />

        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          style={{
            backgroundColor: colors.greenLith,
            paddingVertical: 12,
            borderRadius: 5,
            top: 10,
          }}>
          <Text
            style={{
              color: colors.black,
              textAlign: 'center',
              fontSize: 16,
              fontWeight: '600',
            }}>
            Entrar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
