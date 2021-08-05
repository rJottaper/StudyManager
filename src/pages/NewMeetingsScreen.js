import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { v4 as uuidv4 } from 'uuid';
import Icon from 'react-native-vector-icons/FontAwesome';

import Meeting from '../img/meeting.svg'

const newMeetings = () => {
  const navigation = useNavigation();

  const id = uuidv4();
  const [meeting, setMeeting] = useState('');
  const [date, setDate] = useState('');

  const done = () => {
    if (meeting === '' && date === '') {
      return Alert.alert('Please complete the fields')
    } 
    if (meeting === '') {
      return Alert.alert('Please, post a topic')
    } 
    if (date === '') {
      return Alert.alert('Please, post a date')
    } 
    navigation.navigate('StudyWithFriendsScreen', {
      key: id,
      meetingName: meeting,
      numberDay: date
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Create or Enter in a Meeting</Text>
      <View>
        <Meeting height={250} width={250} />
      </View>
      <View style={styles.content}>
        <View style={styles.create}>
          <Text style={styles.createText}>Create a Room</Text>
          <TextInput  
            style={styles.input}
            placeholder="What is the Topic"
            maxLength={50}
            value={meeting}
            onChangeText={(newMeeting) => setMeeting(newMeeting)}
          />
          <TextInput 
            style={styles.input}
            placeholder="Date"
            maxLength={2}
            keyboardType="numeric"
            value={date}
            onChangeText={(newDate) => setDate(newDate)}
          />
        </View>
        <View style={styles.join}>
          <Text style={styles.joinText}>Enter With Code</Text>
          <TextInput 
            style={styles.input}
            placeholder="Code"
            maxLength={5}
            keyboardType="numeric"
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={done}>
            <Text style={styles.buttonText}>Done</Text>
            <Icon name="check" style={styles.check}/> 
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonBackText}>Back</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0E5EF',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  title: {
    color: '#6197EB',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 70
  },  
  content: {
    flex: 1,
    backgroundColor: '#6197EB',
    width: '100%',
    marginTop: 10,
    borderTopStartRadius: 20,
    borderTopRightRadius: 20
  },
  create: {
    alignItems: 'center',
    marginTop: 20
  },
  createText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#E0E5EF'
  },
  input: {
    backgroundColor: '#E0E5EF',
    color: '#6197EB',
    marginTop: 5,
    width: '60%',
    borderRadius: 20,
    textAlign: 'center'
  },
  join: {
    alignItems: 'center',
    marginTop: 10
  },
  joinText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#E0E5EF'
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#E0E5EF',
    width: '80%',
    marginTop: 30,
    marginLeft: 38,
    padding: 15,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#6197EB',
    fontWeight: 'bold',
    fontSize: 20,
    marginRight: 5
  },
  check: {
    fontSize: 18,
    color: '#6197EB',
    marginTop: 3
  },
  buttonBack: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 3
  },
  buttonBackText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#E0E5EF',
  }
});

export default newMeetings;