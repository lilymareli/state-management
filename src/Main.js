import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Provider from './context/Provider'
import { Facts, Login, VoteFilter } from './pages'

const Stack = createStackNavigator();

function Main() {
    return (
        <Provider>
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Facts" component={Facts} />
                <Stack.Screen name="Votes" component={VoteFilter} />

            </Stack.Navigator>
        </NavigationContainer>
        </Provider>
    );
}

export default Main;