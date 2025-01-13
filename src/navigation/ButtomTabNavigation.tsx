import { Image, StyleSheet, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { fontsPlayFairDisplay } from '../assets/fonts';
import { colors } from '../assets/theme';
// Views
import HomeScreen from '../screens/Home';
import ProfileScreen from '../screens/Profile';
import TransferScreen from '../screens/transfer';
import ListCards from '../screens/Cards/ListCards';

// Routes
import { Routes } from './routes';

// Icons TabNavigation
import { logoHome, logoTranfer, logoProfile, logoAccion } from '../assets';

const Tab = createBottomTabNavigator();

function MyViewTabs() {
    return (
        <Tab.Navigator
            initialRouteName={Routes.HOME_SCREEN}
            screenOptions={{
                tabBarStyle: { backgroundColor: '#f8f9fa', height: 60 },
                tabBarActiveTintColor: colors.greenPrimary[300],
                tabBarInactiveTintColor: 'black',
            }}
        >
            <Tab.Screen
                name={Routes.HOME_SCREEN}
                component={HomeScreen}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <Text style={[styles.label, focused && styles.labelFocused]}>
                            Inicio
                        </Text>
                    ),
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={logoHome}
                            style={[
                                styles.icon,
                                focused && styles.iconFocused,
                            ]}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name={Routes.TRANSFER}
                component={TransferScreen}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <Text style={[styles.label, focused && styles.labelFocused]}>
                            Movimientos
                        </Text>
                    ),
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={logoTranfer}
                            style={[
                                styles.icon,
                                focused && styles.iconFocused,
                            ]}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name={Routes.PROFILE}
                component={ProfileScreen}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <Text style={[styles.label, focused && styles.labelFocused]}>
                            Perfil
                        </Text>
                    ),
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={logoProfile}
                            style={[
                                styles.icon,
                                focused && styles.iconFocused,
                            ]}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name={Routes.LIST_CARDS}
                component={ListCards}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <Text style={[styles.label, focused && styles.labelFocused]}>
                            Acciones
                        </Text>
                    ),
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={logoAccion}
                            style={[
                                styles.icon,
                                focused && styles.iconFocused,
                            ]}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
        tintColor: colors.greenPrimary[300]
    },
    iconFocused: {
        width: 37,
        height: 37,
    },
    label: {
        fontSize: 12,
        fontFamily: fontsPlayFairDisplay.regular,
        color: 'black',
    },
    labelFocused: {
        fontSize: 13,
        fontFamily: fontsPlayFairDisplay.regular,
        color: colors.greenPrimary[500],
    },
});

export default MyViewTabs;
