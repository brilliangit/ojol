import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './routes'

const App: () => React$Node = () => {
    return (
        <NavigationContainer>
            <Router />
        </NavigationContainer>
    );
};
export default App;
