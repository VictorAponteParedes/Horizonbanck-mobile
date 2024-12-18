import { StyleSheet, TextInput, View } from "react-native";
import { Controller } from 'react-hook-form';

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
            render={({ field }) => (
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

const styles = StyleSheet.create({
    input: {
        width: '100%',
        height: 50,
        borderBottomWidth: 1,
        paddingLeft: 10,
        marginBottom: 15,
        backgroundColor: '#f7f7f7',
        fontSize: 16,
    },
});
