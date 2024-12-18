import React from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    ScrollView,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { UserData } from '../../types';
import InputCustom from '../../components/inputs/index'
import AuthService from '../../services/auth';


const { height } = Dimensions.get('window');

const UserFormScreen = () => {
    const { registerUser } = AuthService;
    const { control, handleSubmit, formState: { errors } } = useForm<UserData>();

    const onSubmit = async (data: UserData) => {
        try {
            await registerUser(data)
            console.log('Formulario enviado:', data);
        } catch (error) {
            console.log("Error al enviar los datos:", error)
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <Text style={styles.title}>¡Regístrate!</Text>

                <ScrollView>

                    <InputCustom
                        control={control}
                        name='firstName'
                        placeholderText='Nombre'
                        placeholderColor='black'

                    />

                    <InputCustom
                        control={control}
                        name='lastName'
                        placeholderText='Apellido'
                        placeholderColor='black'

                    />

                    <InputCustom
                        control={control}
                        name='email'
                        placeholderText='Email'
                        placeholderColor='black'

                    />


                    <InputCustom
                        control={control}
                        name='password'
                        placeholderText='Contasena'
                        placeholderColor='black'

                    />
                    {/* Submit Button */}
                    <Button title="Enviar" onPress={handleSubmit(onSubmit)} />
                </ScrollView>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#f0f4f7',
    },
    formContainer: {
        backgroundColor: 'white',
        padding: 20,
        width: '90%',
        height: height * 0.6,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: '#ccc',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        elevation: 5,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 15,
        color: '#333',
    },
    input: {
        width: '100%',
        height: 50,
        borderBottomWidth: 1,
        paddingLeft: 10,
        marginBottom: 15,
        backgroundColor: '#f7f7f7',
    },
    errorText: {
        fontSize: 14,
        color: 'red',
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});

export default UserFormScreen;
