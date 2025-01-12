import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Views
import HomeScreen from '../screens/Home';
import ProfileScreen from '../screens/Profile';
import TransferScreen from '../screens/transfer';
import ListCards from '../screens/Cards/ListCards';

//Routes
import { Routes } from './routes';

const Tab = createBottomTabNavigator();

function MyViewTabs() {
    return (
        <Tab.Navigator initialRouteName={Routes.HOME_SCREEN}>
            <Tab.Screen name={Routes.HOME_SCREEN} component={HomeScreen} />
            <Tab.Screen name={Routes.PROFILE} component={ProfileScreen} />
            <Tab.Screen name={Routes.TRANSFER} component={TransferScreen} />
            <Tab.Screen name={Routes.LIST_CARDS} component={ListCards} />
        </Tab.Navigator>
    );
}
export default MyViewTabs;