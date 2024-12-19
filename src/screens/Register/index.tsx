import React from 'react';
import {
  View,
  Text,
  Button,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useForm} from 'react-hook-form';
import {UserData} from '../../types';
import InputCustom from '../../components/inputs/index';
import AuthService from '../../services/auth';
import styles from './styles';
import {googleLoginImagen, facebookLoginImagen} from '../../assets';

const UserFormScreen = () => {
  const {registerUser} = AuthService;
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<UserData>();

  const onSubmit = async (data: UserData) => {
    try {
      //   await registerUser(data);
      console.log('Formulario enviado:', data);
    } catch (error) {
      console.log('Error al enviar los datos:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>¡Regístrate!</Text>

        <ScrollView>
          <InputCustom
            control={control}
            name="firstName"
            placeholderText="Nombre"
            placeholderColor="#9d9796"
          />

          <InputCustom
            control={control}
            name="lastName"
            placeholderText="Apellido"
            placeholderColor="#9d9796"
          />

          <InputCustom
            control={control}
            name="email"
            placeholderText="Email"
            placeholderColor="#9d9796"
          />

          <InputCustom
            control={control}
            name="password"
            placeholderText="Contasena"
            placeholderColor="#9d9796"
          />
          {/* Submit Button */}
          <TouchableOpacity
            style={styles.bottonSubmit}
            onPress={handleSubmit(onSubmit)}>
            <Text style={styles.bottomTextSubmit}>Enviar</Text>
          </TouchableOpacity>

          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center', // Centra los elementos en el eje vertical
              top: 30,
            }}>
            <TouchableOpacity style={styles.IconLogins}>
              <Image
                source={facebookLoginImagen}
                style={{width: 30, height: 30, marginRight: 10}}
              />
              <Text style={styles.IconTextLogins}>Regístrate con Facebook</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.IconLogins}>
              <Image
                source={googleLoginImagen}
                style={{width: 30, height: 30, marginRight: 10}}
              />
              <Text style={styles.IconTextLogins}>Regístrate con Google</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default UserFormScreen;
