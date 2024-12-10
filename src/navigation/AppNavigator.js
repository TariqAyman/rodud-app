import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import NewOrderScreen from '../screens/NewOrderScreen';
import OrdersDashboardScreen from '../screens/OrdersDashboardScreen';
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    const { token } = useContext(AuthContext);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* {!token ? ( */}
                <>
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="Register" component={RegisterScreen} />
                    {/* </>
                ) : (
                    <> */}
                    <Stack.Screen name="Dashboard" component={OrdersDashboardScreen} />
                    <Stack.Screen name="NewOrder" component={NewOrderScreen} />
                </>
                {/* )} */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
