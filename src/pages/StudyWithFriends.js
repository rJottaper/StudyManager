import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Header from '../components/Header';
import GroupTask from '../components/GroupTask';


const StudyWithFriends = ({ route }) => {
  const navigation = useNavigation();

  const [data, setData] = useState([]);

  useEffect(() => {
    if (route.params) {
      const { key, meetingName, numberDay } = route.params
      const id = key
      const meeting = meetingName
      const date = numberDay
      
      if(id === undefined || meeting === undefined || date === undefined) {
        setData([])
      } else {
        setData(oldData => [...oldData, { id, meeting, date }])
      }
    }
  }, [route.params])

  return (
    <SafeAreaView style={styles.container}>
      <Header email={route.params.email} />
      <View style={styles.content}>
        <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('NewMeetings')}}>
          <Icon name="plus" style={styles.buttonText} />
        </TouchableOpacity>
        <Text style={styles.title}>Meetings Today</Text>
      </View>
      <FlatList 
        data={data}
        renderItem={({item}) => <GroupTask day={item.date} meeting={item.meeting} />}
        horizontal={true}
      />
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#E0E5EF'
  },
  content: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 30,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  button: {
    backgroundColor: '#6197EB',
    width: 45,
    height: 45,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#E0E5EF',
    fontSize: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6197EB',
    marginHorizontal: 10,
    borderBottomWidth: 0.6,
    borderBottomColor: '#6197EB'
  }
});

export default StudyWithFriends;