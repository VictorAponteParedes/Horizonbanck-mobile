import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import LOGOHORIZONBANK from '../../assets/svg/horizonBankLogo.svg';
import {colors} from '../../assets/theme';
import InputCustom from '../../components/inputs';
import {useForm} from 'react-hook-form';
import {Routes} from '../../navigation/routes';
import {useNavigation} from '@react-navigation/native';
import {facebookLoginImagen, googleLoginImagen} from '../../assets';
import styles from './styles';
import ModalRegister from '../../modals/modalRegister';

type UserLoginType = {
  email: string;
  password: string;
};

const LoginScreen = () => {
  const [showModalRegister, setShowModalRegister] = useState<boolean>(false);
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = async (data: UserLoginType) => {
    try {
      console.log('Usuario logueado', data);
      if (data.email === 'vaponte520@gmail.com' && data.password === '1234') {
        navigation.navigate(Routes.HOME_SCREEN);
      }
      return;
    } catch (error) {
      console.log('Error al enviar los datos:', error);
    }
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          paddingVertical: 20,
          backgroundColor: colors.greenLith,
          alignItems: 'center',
        }}>
        <LOGOHORIZONBANK width={320} height={160} />
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
          name="password"
          placeholderText="Contraseña"
          placeholderColor="#9d9796"
        />

        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          style={styles.buttomContainerLogin}>
          <Text style={styles.textLogin}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setShowModalRegister(true)}
          style={styles.buttomContainerRegister}>
          <Text style={styles.textRegister}>
            ¿No tienes una cuenta en Horizon Bank?
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerRedes}>
        <TouchableOpacity style={styles.IconLogins}>
          <Image source={facebookLoginImagen} style={{width: 30, height: 30}} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.IconLogins}>
          <Image source={googleLoginImagen} style={{width: 30, height: 30}} />
        </TouchableOpacity>
      </View>

      {/* Modal de registro */}
      <ModalRegister
        visible={showModalRegister}
        onClose={() => setShowModalRegister(false)}
      />
    </View>
  );
};

export default LoginScreen;
