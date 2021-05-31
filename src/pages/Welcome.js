import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import WelcomeImg from '../img/Welcome.svg'

const Welcome = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titleText}>
                    Hello {'\n'}
                    it's really good to see you here
                </Text>
            </View> 
            <View>
                <WelcomeImg height="250" width="250" />
            </View>
            <View style={styles.subTitle}>
                <Text style={styles.subTitleText}>
                    Here is the best way to be reminded {'\n'} 
                    (and charged to study) {'\n'} 
                    at the times and days of your choice
                </Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LoginScreen')}>
                    <FontAwesome name="chevron-right" style={styles.buttonText}/>              
            </TouchableOpacity>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#E0E5EF',
        width: '100%'
    },
    title: {
        backgroundColor: '#b8d8ed',
        paddingHorizontal: 6,
        borderRadius: 50,
        marginTop: 15
    },
    titleText: {
        fontSize: 20,
        padding: 10,
        color: '#6197EB',
        fontFamily: 'bold',
        textAlign: 'center'
    },
    subTitle: {
        borderBottomWidth: 1,
        borderColor: '#6197EB',
        padding: 4
    },
    subTitleText: {
        fontSize: 18,
        textAlign: 'center',
        color: '#6197EB',
        padding: 4
    },
    button: {
        backgroundColor: '#6197EB',
        height: 60,
        width: 60,
        borderRadius: 20,
        justifyContent: 'center'
    },
    buttonText: {
        textAlign: 'center',
        color: '#E0E5EF',
        fontSize: 30,
        marginLeft: 2,
        marginTop: 3
    }

})

export default Welcome;