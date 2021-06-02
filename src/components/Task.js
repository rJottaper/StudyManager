import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Task = ({ task, hour }) => {
    return (
        <TouchableOpacity style={styles.viewTask}>
            <View>
                <View style={styles.viewBT}>
                    <Icon name="book" style={styles.taskBook} />
                    <Text style={styles.taskHour}>12:00</Text> 
                </View>
                <View>
                    <Text style={styles.task}>{task}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    viewTask: {
        backgroundColor: '#6197EB',
        height: 100,
        marginHorizontal: 20,
        borderRadius: 25,
        justifyContent: 'center',
        marginVertical: 15
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
    }
});

export default Task;