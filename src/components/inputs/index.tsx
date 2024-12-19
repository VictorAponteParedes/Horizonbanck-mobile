import {StyleSheet, TextInput, View} from 'react-native';
import {Controller} from 'react-hook-form';
import styles from './styles';

type InputCustomType = {
  placeholderText: string;
  placeholderColor?: string;
  control: any;
  name: string;
  secureTextEntry?: boolean;
};

const InputCustom = ({
  control,
  name,
  placeholderText,
  placeholderColor = '#888',
  secureTextEntry = false,
}: InputCustomType) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({field}) => (
        <TextInput
          placeholder={placeholderText}
          placeholderTextColor={placeholderColor}
          style={styles.input}
          value={field.value}
          onChangeText={field.onChange}
          secureTextEntry={secureTextEntry}
        />
      )}
    />
  );
};

export default InputCustom;
