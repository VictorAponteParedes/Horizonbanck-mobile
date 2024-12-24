import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from './routes';

//Views
import UserFormScreen from '../screens/Register';
import HomeScreen from '../screens/Home';

const Stack = createNativeStackNavigator();
const TabNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={Routes.HOMESCREEN}>
      <Stack.Screen name={Routes.HOMESCREEN} component={HomeScreen} />
      <Stack.Screen name={Routes.USER_RESGISTER} component={UserFormScreen} />
    </Stack.Navigator>
  );
};

export default TabNavigation;
