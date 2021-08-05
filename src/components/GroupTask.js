import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import userImg from '../img/unknown.png'

const GroupTask = ({ meeting, day, open }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.container} onPress={open}>
      <View style={styles.viewContent}>
        <View style={styles.header}>
          <View style={styles.date}>
            <Text style={styles.dateText}>Day</Text>
            <Text style={styles.dateText}>{day}</Text>
          </View>
          <View>
            <Text style={styles.title}>{meeting}</Text>
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.time}>09:30 - 12:00</Text>
          <View style={styles.viewImage}>
            <Image source={userImg} style={styles.image} />
            <Image source={userImg} style={styles.image} />
            <Image source={userImg} style={styles.image} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6197EB',
    height: 110,
    marginHorizontal: 20,
    marginVertical: 15,
    borderRadius: 30,
    justifyContent: 'center',
    padding: 50
  },
  header: {
    flexDirection: 'row',
    marginBottom: 10
  },
  date: {
    backgroundColor: '#E0E5EF',
    height: 50,
    width: 50,
    borderRadius: 5,
    justifyContent: 'center', 
    borderWidth: 1,
    borderColor: '#6197EB',
    marginRight: 20,
  },
  dateText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#6197EB',
    fontSize: 16
  },
  title: {
    color: '#E0E5EF',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  time: {
    color: '#E0E5EF',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 20,
    
  },
  viewImage: {
    flexDirection: 'row',
    justifyContent: 'center',
    
  },  
  image: {
    width: 25,
    height: 25,
    borderRadius: 20,
  },
});

export default GroupTask;