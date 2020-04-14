import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import {
    SplashScreen,
    Login,
    Register,
    WelcomeAuth
} from '../pages';

const Stack = createStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="splashscreen" component={SplashScreen} />
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="register" component={Register} />
            <Stack.Screen name="welcome" component={WelcomeAuth} />
        </Stack.Navigator>
    )
}

export default Router;