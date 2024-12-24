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
import {useForm} from 'react-hook-form';
import {colors} from '../assets/theme';
import LOGOHORIZONBANK from '../assets/svg/horizonBankLogo.svg';

type ModalRegisterProps = {
  visible: boolean;
  onClose: () => void;
};

const ModalRegister = ({visible, onClose}: ModalRegisterProps) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = () => {
    console.log('Registro con éxito');
    onClose();
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
                fontWeight: '600',
              }}>
              Registrate y disfruta tu seguridad!
            </Text>
          </View>
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
    height: '60%',
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  submitButton: {
    backgroundColor: colors.greenLith,
    paddingVertical: 12,
    borderRadius: 5,
    marginTop: 20,
  },
  submitButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  closeButton: {
    marginTop: 15,
    paddingVertical: 10,
    alignSelf: 'center',
  },
  closeButtonText: {
    color: '#ff5252',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ModalRegister;
