import React from 'react';
import {ScrollView} from 'react-native';
import ActionsButtom from '../../components/ationsButtom';
import {Routes} from '../../navigation/routes';
import {useNavigation} from '@react-navigation/native';

const acctionPress = () => {
  console.log('Listado de tarjeta');
};
const RenderActtion = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={{flex: 1}}>
      <ActionsButtom
        title="Listado de tarjeta"
        onPress={() => {
          navigation.navigate(Routes.LIST_CARDS);
        }}
      />
      <ActionsButtom
        title="Crear de tarjeta"
        onPress={() => {
          navigation.navigate(Routes.CREATE_CARD);
        }}
      />
      <ActionsButtom title="Listado de tarjeta" onPress={acctionPress} />
      <ActionsButtom title="Listado de tarjeta" onPress={acctionPress} />
    </ScrollView>
  );
};

export default RenderActtion;
