import React, {useState, useEffect} from 'react';

import {useForm} from 'react-hook-form';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import InputCustom from '../../../components/inputs';
import useGetUsers from '../../../hooks/useGetUsers';

interface CardFormData {
  cardNumber: string;
  accountNumber: string;
  cardHolderName: string;
  expirationDate: string;
  cvv: string;
  isActive: boolean;
}

const CreateCard = () => {
  const users = useGetUsers();

  useEffect(() => {
    console.log('Users:', users);
  }, []);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<CardFormData>({
    defaultValues: {
      isActive: false,
    },
  });

  const onSubmit = (data: CardFormData) => {
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create New Card</Text>

      <InputCustom
        control={control}
        name="cardNumber"
        placeholderText="Enter card number"
        secureTextEntry={false}
      />

      <InputCustom
        control={control}
        name="accountNumber"
        placeholderText="Enter account number"
        secureTextEntry={false}
      />

      <InputCustom
        control={control}
        name="cardHolderName"
        placeholderText="Enter cardholder name"
        secureTextEntry={false}
      />

      <InputCustom
        control={control}
        name="expirationDate"
        placeholderText="MM/YY"
        secureTextEntry={false}
      />

      <InputCustom
        control={control}
        name="cvv"
        placeholderText="Enter CVV"
        secureTextEntry={true}
      />

      <TouchableOpacity
        style={styles.submitButton}
        onPress={handleSubmit(onSubmit)}>
        <Text style={styles.submitButtonText}>Create Card</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  submitButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  submitButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CreateCard;
