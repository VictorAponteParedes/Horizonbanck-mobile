import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from './routes';

// Views
import LoginScreen from '../screens/Login';
import UserFormScreen from '../screens/Register';
import MyViewTabs from './ButtomTabNavigation';

const Stack = createNativeStackNavigator();
const TabNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={Routes.LOGIN_SCREEN}>
      <Stack.Screen name={Routes.LOGIN_SCREEN} component={LoginScreen} />
      <Stack.Screen name={Routes.HOME_SCREEN} component={MyViewTabs} />
      <Stack.Screen name={Routes.USER_RESGISTER} component={UserFormScreen} />
    </Stack.Navigator>
  );
};

export default TabNavigation;
