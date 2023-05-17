import { StatusBar } from 'expo-status-bar';
import reactDom from 'react-dom';
import { StyleSheet,Modal,Pressable,Text, View, Button, TextInput, SafeAreaView } from 'react-native';
import { useState } from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';

export default function ShowModal({modalVisible,setModalVisible,data}) {
    
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.text}>index: {data.index}</Text>
              <Text style={styles.text}>text: {data.text}</Text>
              <Text style={styles.text}>heure: {data.heure}</Text>
              
              {/* <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable> */}
              <Button 
                title='close'
                onPress={() => setModalVisible(false)}
              />
            </View>
          </View>
        </Modal>
        {/* <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable> */}
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  text: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    color: 'black'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin:10,
    backgroundColor: '#D7FFEF',
    borderColor: 'blue',
  },
});
