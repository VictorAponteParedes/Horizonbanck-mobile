import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import style from './styles';

type ActionsButtomType = {
  title: string;
  onPress: () => void;
};
const ActionsButtom = (props: ActionsButtomType) => {
  const {title, onPress} = props;
  return (
    <TouchableOpacity onPress={onPress} style={style.acctionButtom}>
      <Text style={style.acctionButtomText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ActionsButtom;
