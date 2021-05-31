import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome'

import Home from '../pages/Home';
import StudyAlone from '../pages/StudyAlone';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: '#A1B0D4',
            inactiveTintColor: '#E0E0EF',
            labelPosition: 'beside-icon',
            style: {
               backgroundColor: '#6197EB',
               marginLeft: 5,
               marginRight: 5,
               marginTop: 5,
               borderRadius: 15,
               height: 60
            },
        }}>
            <Tab.Screen 
                name="Home" 
                component={StudyAlone} 
                options={{
                    tabBarIcon: (() => {
                        <Icon name={"home"} size={16} color="#E0E0EF" />
                    })
                }}
            />
            <Tab.Screen name="Search" component={Home} />
            <Tab.Screen name="Comunity" component={Home} />
            <Tab.Screen name="Profile" component={Home} />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    view: {
        alignItems: 'center',
        justifyContent: 'center',
        top: 10
    }
})

export default Tabs;