/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import UserFormScreen from './src/screens/Register';
import {
  View,
} from 'react-native';




function App(): React.JSX.Element {

  return (
    <View style={{ flex: 1 }}>
      <UserFormScreen />
    </View>

  );
}



export default App;
