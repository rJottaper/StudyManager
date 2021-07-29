import React, { useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, SafeAreaView, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Swipeable from 'react-native-gesture-handler/Swipeable'

const Task = ({ task, hour, removeTask }) => {
    const rightSwipe = () => {
        return (
            <TouchableOpacity style={styles.deleteView} onPress={removeTask}>
                <View>
                    <Icon name="trash" style={styles.trash} />
                </View>
            </TouchableOpacity>
        );
    };
    
    const leftSwipe = () => {
        return (
            <View style={styles.ckeckView}>
                <Text style={styles.checkViewText}>Done</Text>
                <Icon name="check" style={styles.check}/> 
            </View>
        )
    }

    return (
        <Swipeable
            renderRightActions={rightSwipe}
            renderLeftActions={leftSwipe}
        >
            <SafeAreaView style={styles.viewTask}>       
                <View>
                    <View style={styles.viewBT}>
                        <Icon name="book" style={styles.taskBook} />
                        <Text style={styles.taskHour}>12:00</Text> 
                    </View>
                    <View>
                        <Text style={styles.task}>{task}</Text>
                    </View>
                </View>
            </SafeAreaView>
        </Swipeable>
    )
};

const styles = StyleSheet.create({
    viewTask: {
        backgroundColor: '#6197EB',
        height: 100,
        marginHorizontal: 20,
        borderRadius: 25,
        justifyContent: 'center',
        marginVertical: 15,
    },
    viewBT: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },  
    taskBook: {
        fontSize: 34,
        color: '#E0E5EF',
        marginRight: 10
    },
    taskHour: {
        fontSize: 22,
        color: '#E0E5EF',

    },
    task: {
        fontSize: 22,
        color: '#E0E5EF',
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 5
    },
    deleteView: {
        backgroundColor: '#ff4f57',
        padding: 25,
        borderRadius: 25,
        height: '75%',
        marginTop: 15,
        justifyContent: 'center',
        width: '75%',
        alignItems: 'center',
        marginRight: 20
    },
    trash: {
        fontSize: 28,
        color: '#E0E5EF',   
    },
    ckeckView: {
        backgroundColor: '#00c848',
        padding: 25,
        borderRadius: 25,
        height: '75%',
        width: '90%',
        marginTop: 15,
        marginLeft: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    checkViewText: {
        color: '#E0E5EF',
        fontSize: 25,
        fontWeight: 'bold',
        marginHorizontal: 10
    },
    check: {
        color: '#E0E5EF',
        fontSize: 25,
    }
});

export default Task;