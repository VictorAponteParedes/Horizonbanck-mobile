import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Views
import HomeScreen from '../screens/Home';
import ProfileScreen from '../screens/Profile';
import TransferScreen from '../screens/transfer';
import ListCards from '../screens/Cards/ListCards';

// Routes
import { Routes } from './routes';

// Icons TabNavigation
import { logoHome, logoTranfer, logoProfile, logoAccion } from '../assets';
import LOGOPROFILE from '../assets/svg/logoProfile.svg';

const Tab = createBottomTabNavigator();

function MyViewTabs() {
    const iconStyle = { width: 30, height: 30, resizeMode: 'contain' };

    return (
        <Tab.Navigator
            initialRouteName={Routes.HOME_SCREEN}
            screenOptions={{
                tabBarStyle: { backgroundColor: '#f8f9fa', height: 60 },
                tabBarActiveTintColor: '#007BFF',
                tabBarInactiveTintColor: '#6c757d',
            }}
        >
            <Tab.Screen
                name={Routes.HOME_SCREEN}
                component={HomeScreen}
                options={{
                    tabBarLabel: "Inicio",
                    tabBarIcon: () => (
                        <Image source={logoHome} style={iconStyle} />
                    ),
                }}
            />

            <Tab.Screen
                name={Routes.TRANSFER}
                component={TransferScreen}
                options={{
                    tabBarLabel: "Movimientos",
                    tabBarIcon: () => (
                        <Image source={logoTranfer} style={iconStyle} />
                    ),
                }}
            />
            <Tab.Screen
                name={Routes.PROFILE}
                component={ProfileScreen}
                options={{
                    tabBarLabel: "Perfil",
                    tabBarIcon: () => (
                        <Image source={logoProfile} style={iconStyle} />
                    ),
                }}
            />
            <Tab.Screen
                name={Routes.LIST_CARDS}
                component={ListCards}
                options={{
                    tabBarLabel: "Acciones",
                    tabBarIcon: () => (
                        <Image source={logoAccion} style={iconStyle} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default MyViewTabs;
