import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'

import userImg from '../img/unknown.png'

const Header = () => {
    const [userName, setUserName] = useState();
    useEffect(() => {
        async function loadStorageUsername() {
            const user = await AsyncStorage.getItem('@studymanager:user')
            setUserName(user || '')
        }
        loadStorageUsername();
    }, [userName])
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.greeting}>Hi,</Text>
                <Text style={styles.username}>{userName}</Text>
            </View>
            <Image source={userImg} style={styles.image} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingVertical: 36,
        borderBottomWidth: 0.5,
        borderBottomColor: '#6197EB'
    },
    greeting: {
        fontSize: 26,
        color: '#A1B0D4',
        fontWeight: "bold"
    },
    username: {
        fontSize: 26,
        color: '#6197EB',
        fontWeight: "bold"
    },  
    image: {
        width: 85,
        height: 85,
        borderRadius: 40,
        marginLeft: 45
    }
});

export default Header;