import React, { useEffect, useState, useRef } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Modalize } from 'react-native-modalize';

import Header from '../components/Header';
import GroupTask from '../components/GroupTask';

import JoinMeeting from '../img/joinmeeting.svg'

const StudyWithFriends = ({ route }) => {
  const navigation = useNavigation();

  const [data, setData] = useState([]);

  useEffect(() => {
    if (route.params) {
      const { key, meetingName, numberDay } = route.params
      if(key === undefined || meetingName === undefined || numberDay === undefined) {
        return setData([])
      }
      setData(oldData => [...oldData, { key, meetingName, numberDay }])
    }
  }, [route.params])

  const modalizeRef = useRef(null);

  const open = () => {
    modalizeRef.current?.open();
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header username={route.params.username} />
      <View style={styles.content}>
        <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('NewMeetingsScreen')}}>
          <Icon name="plus" style={styles.buttonText} />
        </TouchableOpacity>
        <Text style={styles.title}>Meetings Today</Text>
      </View>
      <FlatList 
        data={data}
        renderItem={({item}) => <GroupTask day={item.numberDay} meeting={item.meetingName} open={open} />}
        horizontal={true}
      />
      <Modalize
        ref={modalizeRef}
        snapPoint={450}
        modalHeight={450}
        modalStyle={styles.modalView}
      >
        <View style={styles.image}>
          <JoinMeeting height={250} width={250} />
        </View>
        <View style={styles.modalTitle}> 
          <Text style={[styles.modalText, {fontSize: 20, textAlign: 'center'}]}>Study With Friends?</Text>
        </View>
        <TouchableOpacity style={styles.modalButton}>
          <Text style={styles.modalButtonText}>Join Meeting</Text>
        </TouchableOpacity>
      </Modalize>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#E0E5EF',
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
  },
  modalView: {
    flex: 1,
    backgroundColor: '#E0E5EF',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20
  },
  modalTitle: {
    backgroundColor: '#6197EB',
    padding: 10,
    marginTop: 10,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 70
  },
  modalText: {
    color: '#E0E5EF',
    fontWeight: 'bold',
  },
  modalButton: {
    backgroundColor: '#6197EB',
    padding: 16,
    marginTop: 30,
    marginHorizontal: 30,
    borderRadius: 20,
    alignItems: 'center'
  },
  modalButtonText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#E0E5EF',
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default StudyWithFriends;