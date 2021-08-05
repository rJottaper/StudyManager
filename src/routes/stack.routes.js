import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from '../pages/WelcomeScreen';
import LoginScreen from '../pages/LoginScreen';
import HomeScreen from '../pages/HomeScreen';
import StudyAloneScreen from '../pages/StudyAloneScreen';
import AddTaskScreen from '../pages/AddTaskScreen';
import StudyWithFriendsScreen from '../pages/StudyWithFriendsScreen';
import NewMeetingsScreen from '../pages/NewMeetingsScreen';

const { Navigator, Screen } = createStackNavigator();

const AppRoutes = () => {
    return (
        <Navigator headerMode="none">
            <Screen name="WelcomeScreen" component={WelcomeScreen} />
            <Screen name="LoginScreen" component={LoginScreen} />
            <Screen name="HomeScreen" component={HomeScreen} />
            <Screen name="StudyAloneScreen" component={StudyAloneScreen} />
            <Screen name="AddTaskScreen" component={AddTaskScreen} />
            <Screen name="StudyWithFriendsScreen" component={StudyWithFriendsScreen} />
            <Screen name="NewMeetingsScreen" component={NewMeetingsScreen} />
        </Navigator>
    )
};

export default AppRoutes;