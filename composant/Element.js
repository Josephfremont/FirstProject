import { StatusBar } from 'expo-status-bar';
import reactDom from 'react-dom';
import { StyleSheet, Text, View, Button, TextInput, SafeAreaView } from 'react-native';
import { useState } from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';

export default function App({data, setData}) {


    const deleteElement = (element) => {
        setData(data => data.filter((item, i) => item !== element));
    }

  return (
      <>
        {
          data.map((uneData, index) => {
            return (
              <View style={styles.box}>
                <Text>{uneData}</Text>
                <Icon.Button
                  name="close"
                  onPress={() => deleteElement(uneData)}>
                </Icon.Button>
              </View>
              )
          })
        }
      </>
  );
}

const styles = StyleSheet.create({
    box: {
        flexDirection: 'row',
        margin: 10,
        width: 100,
        height: "auto",
        backgroundColor: 'powderblue',
      }
});
