import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Dimensions,
} from 'react-native';
import InputCustom from '../components/inputs';
import { useForm } from 'react-hook-form';
import { colors } from '../assets/theme';
import LOGOHORIZONBANK from '../assets/svg/horizonBankLogo.svg';
import AuthService from '../services/auth';
import { UserData } from '../@types';
import { Routes } from '../navigation/routes';
import {
  useNavigation,
} from '@react-navigation/native';
import { fontsPlayFairDisplay } from '../assets/fonts';


type ModalRegisterProps = {
  visible: boolean;
  onClose: () => void;
};

const ModalRegister = ({ visible, onClose }: ModalRegisterProps) => {
  const navigation = useNavigation()
  const { registerUser } = AuthService;
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: UserData) => {
    console.log("hola")
    try {
      await registerUser(data);
      console.log('Formulario enviado:', data);
      onClose()
    } catch (error) {
      console.log('Error al enviar los datos:', error);
    }
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
            }}>
            <LOGOHORIZONBANK width={80} height={40} />
            <Text
              style={{
                textAlign: 'center',
                fontSize: 16,
                fontFamily: fontsPlayFairDisplay.regular,
              }}>
              Registrate y disfruta tu seguridad!
            </Text>
          </View>
          <InputCustom
            control={control}
            name="name"
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
            name="identityCard"
            placeholderText="Cedula de Identidad"
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
            placeholderText="Contraseña"
            placeholderColor="#9d9796"
          />

          <TouchableOpacity
            onPress={handleSubmit(onSubmit)}
            style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Enviar</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    height: '70%',
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  submitButton: {
    backgroundColor: colors.greenPrimary[300],
    paddingVertical: 12,
    borderRadius: 5,
    marginTop: 20,
  },
  submitButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: fontsPlayFairDisplay.regular,
  },
  closeButton: {
    marginTop: 15,
    paddingVertical: 10,
    alignSelf: 'center',
  },
  closeButtonText: {
    color: '#ff5252',
    fontSize: 16,
    fontFamily: fontsPlayFairDisplay.regular,
  },
});

export default ModalRegister;
