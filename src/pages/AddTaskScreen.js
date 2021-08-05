import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { v4 as uuidv4 } from 'uuid';

import HomeWork from '../img/homework.svg';

const AddTask = ({  }) => {
    const navigation = useNavigation();

    const key = uuidv4();
    const [task, setTask] = useState('');

    const sendTask = () => {
        if (task == '') {
            return Alert.alert('You Must Put a Task')
        }
        navigation.navigate('StudyAloneScreen', {
            key: key,
            taskName: task
        })
    };

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.container} >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.container}>
                        <View>
                            <Text style={styles.text}>Ready To Study Today?</Text>
                        </View>
                        <View style={styles.viewImage}>
                            <HomeWork height={250} width={250} />
                        </View>
                        <View style={styles.viewDetails}>
                            <View style={styles.input}>
                                <TextInput
                                    style={styles.inputText}
                                    placeholder="What You Go Study?"
                                    value={task}
                                    onChangeText={newTask => setTask(newTask)}
                                />
                            </View>
                            <View>
                                <TouchableOpacity
                                    style={styles.buttonGo} onPress={sendTask} >
                                    <Text style={styles.buttonText}>Ready</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.goBack()}>
                                <Text style={styles.buttonBackText}>Back</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E0E5EF',
        width: '100%',
    },
    text: {
        fontSize: 26,
        marginTop: 70,
        color: '#6197EB',
        fontWeight: 'bold'
    },
    viewImage: {
        marginBottom: 50,
        marginTop: 30,
    },
    viewDetails: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6197EB',
        borderTopStartRadius: 60,
        borderTopEndRadius: 60,
    },
    input: {
        backgroundColor: '#E0E5EF',
        marginTop: 40,
        marginVertical: 20,
        paddingVertical: 20,
        paddingHorizontal: 50,
        borderRadius: 35,
        height: 80,
    },
    inputText: {
        color: '#6197EB',
    },
    buttonGo: {
        backgroundColor: '#E0E5EF',
        padding: 20,
        paddingHorizontal: 50,
        borderRadius: 40,
    },
    buttonText: {
        color: '#6197EB',
        fontWeight: 'bold',
        fontSize: 18,
        justifyContent: 'center',
        textAlign: 'center'
    },
    buttonBack: {
        marginTop: 5,
    },
    buttonBackText: {
        fontSize: 16,
        color: '#E0E5EF',
        fontWeight: 'bold'
    }
});

export default AddTask;