import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, TouchableOpacity, StyleSheet, ScrollView, FlatList, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Header from '../components/Header'
import Task from '../components/Task'

const StudyAlone = ({ route, navigation, })  => {
    const [data, setData] = useState([
        {task: 'Study English'}, 
    ]);

    useEffect(() => {
        if (route.params?.taskName) {
            const newTask = route.params
            const task = newTask.taskName
            setData(oldData => [...oldData, {task}])
        }
    }, [route.params?.taskName])
    
    return (
        <SafeAreaView style={styles.container}> 
            <Header style={styles.header} />
            <View style={styles.view}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('addTask')}>
                    <Icon name="plus" style={styles.buttonText}/>
                </TouchableOpacity>
                <Text style={styles.text}>Tasks Today</Text>
            </View>        
            <FlatList 
                    data={data}
                    renderItem={({ item }) => <Task task={item.task}  /> }
                    
            />  
        </SafeAreaView>
    )};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginVertical: 10,
        backgroundColor: '#E0E5EF',
    }, 
    view: {
        flexDirection: 'row',
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginVertical: 30
    },
    button: {
        backgroundColor: '#6197EB',
        height: 45,
        width: 45,
        borderRadius: 40,
        justifyContent: "center",
        alignItems: 'center',
    },
    buttonText: {
        color: '#E0E5EF',
        fontSize: 20
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#6197EB',
        marginHorizontal: 10,
        borderBottomWidth: 0.6,
        borderBottomColor: '#6197EB'
    },
    footer: {
        backgroundColor: '#E0E5EF',
    }
})

export default StudyAlone;