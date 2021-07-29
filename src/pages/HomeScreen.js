import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import Header from '../components/Header'

const Home = ({ route }) => {
    const navigation = useNavigation();
    const { email } = route.params

    return (
        <SafeAreaView style={styles.container}>
            <Header email={route.params.email} />
            <View>
                <Text style={styles.title}>
                    How do you want to study today?
                </Text>
            </View>
            <View style={styles.method}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('StudyAloneScreen', {email})}>
                    <FontAwesome name="user" style={styles.icons} />
                    <Text style={styles.texts}>Study Alone</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('StudyWithFriends', {email})}>
                    <FontAwesome name="users" style={styles.icons} />
                    <Text style={styles.texts}>Study With Friends</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#E0E5EF',
    },
    title: {
        textAlign: 'center',
        marginTop: 50,
        fontSize: 26,
        color: '#6197EB',
        fontWeight: 'bold',
        margin: 5,
        paddingBottom: 50,
    },
    method: {
        flex: 1,
        height: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#6197EB',
        borderTopEndRadius: 50,
        borderTopStartRadius: 50,
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 24,
        backgroundColor: '#E0E5EF',
        height: 170,
        width: 120,
        borderRadius: 20,
        marginHorizontal: 30
    },
    icons: {
        fontSize: 35,
        color: '#6197EB'
    },
    texts: {
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 10,
        color: '#6197EB',
        textAlign: 'center'

    }
})

export default Home;