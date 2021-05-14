import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from '../pages/Welcome';
import LoginScreen from '../pages/LoginScreen';

const stackRoutes = createStackNavigator();

const AppRoutes = () => (
    
        <stackRoutes.Navigator headerMode="none">
            <stackRoutes.Screen 
                name="WelcomeScreen" 
                component={WelcomeScreen} 
            />
            <stackRoutes.Screen 
                name="LoginScreen" 
                component={LoginScreen} 
            />
        </stackRoutes.Navigator>
    
);

export default AppRoutes;