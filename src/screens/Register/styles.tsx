import {Dimensions, StyleSheet} from 'react-native';
import {ThemeColors} from '../../config/Colors';

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#f0f4f7',
  },
  formContainer: {
    backgroundColor: '#f7f7f7',
    padding: 20,
    width: '100%',
    height: height * 0.8,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#ccc',
    shadowOffset: {width: 0, height: 2},
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
  errorText: {
    fontSize: 14,
    color: 'red',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bottonSubmit: {
    backgroundColor: ThemeColors.blueSkyLith,
    paddingVertical: 10,
    top: 20,
    borderRadius: 5,
  },
  bottomTextSubmit: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '600',
  },
  IconLogins: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 5,
    borderRadius: 5,
    marginBottom: 10,
    borderColor: 'gray',
    borderWidth: 0.2,
  },

  IconTextLogins: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '600',
  },

  containerInitSession: {
    alignItems: 'center', // Centra el contenido horizontalmente
    justifyContent: 'center', // Centra el contenido verticalmente
    marginTop: 50, // Espacio superior
  },
  textInitSession: {
    fontSize: 13, // Tamaño de la fuente
    fontWeight: 'bold', // Negrita
    color: '#0066CC', // Color similar a un enlace
    textAlign: 'center', // Centra el texto
    textDecorationLine: 'underline', // Subraya el texto para simular un enlace
  },
});

export default styles;
