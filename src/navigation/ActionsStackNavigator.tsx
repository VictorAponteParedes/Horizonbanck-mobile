import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RenderActtion from '../screens/RenderAcctions';
import ListCards from '../screens/Cards/ListCards';
import CreateCard from '../screens/Cards/CreateCards';
import {Routes} from './routes';

const Stack = createNativeStackNavigator();

const ActionsStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.RENDER_ACCTION} component={RenderActtion} />
      <Stack.Screen name={Routes.LIST_CARDS} component={ListCards} />
      <Stack.Screen name={Routes.CREATE_CARD} component={CreateCard} />
    </Stack.Navigator>
  );
};

export default ActionsStackNavigator;
