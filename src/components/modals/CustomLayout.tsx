import React from 'react';
import { View, Text, Image, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import { fontsPlayFairDisplay } from '../../assets/fonts';
import { colors } from '../../assets/theme';

type CustomLayoutType = {
    title: string;
    colorTitle?: string;
    subTitle: string;
    colorSubTitle?: string;
    logo: any;
    visible: boolean;
    onClose: () => void;
    onCancel?: () => void;
    onAccept?: () => void;
    tintColor?: string;
    borderColor?: string;
}

const CustomLayout = (props: CustomLayoutType) => {
    const { title, colorTitle, colorSubTitle, subTitle, logo, visible, onClose, onCancel, onAccept, tintColor, borderColor } = props;
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.overlay}>
                <View style={[styles.cardContainer, { borderColor }]}>
                    {/* Título */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={[styles.title, { color: colorTitle }]}>{title}</Text>
                        {/* Logo */}
                        <Image source={logo} style={[styles.logo, { tintColor }]} />
                    </View>

                    {/* Subtítulo */}
                    <Text style={[styles.subTitle, { color: colorSubTitle }]}>{subTitle}</Text>



                    {/* Botones */}
                    <View style={styles.buttonContainer}>
                        {onCancel && (
                            <TouchableOpacity style={styles.button} onPress={onCancel}>
                                <Text style={styles.buttonText}>Cancelar</Text>
                            </TouchableOpacity>
                        )}
                        {onAccept && (
                            <TouchableOpacity style={styles.button} onPress={onAccept}>
                                <Text style={styles.buttonText}>Salir</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo oscuro con opacidad
    },
    cardContainer: {
        width: '80%',
        padding: 20,
        backgroundColor: 'white', // Fondo blanco del card
        borderRadius: 10,
        elevation: 5, // Sombra para dispositivos Android
        shadowColor: '#000', // Sombra para dispositivos iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        borderColor: colors.greenPrimary[300],
        borderWidth: 2
    },
    title: {
        fontSize: 26,
        fontFamily: fontsPlayFairDisplay.regular,
        color: '#333',
    },
    subTitle: {
        fontSize: 18,
        fontFamily: fontsPlayFairDisplay.regular,
        color: '#666', // Color gris para el subtítulo
        marginBottom: 20,
        textAlign: 'center',
    },
    logo: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
    },
    button: {
        backgroundColor: colors.greenPrimary[300],
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        margin: 5,
        width: '100%',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontFamily: fontsPlayFairDisplay.regular,
        textAlign: 'center',
    },
});

export default CustomLayout;
