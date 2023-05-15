import { StatusBar } from 'expo-status-bar';
import reactDom from 'react-dom';
import { StyleSheet, Text, FlatList, View, Button, TextInput, SafeAreaView } from 'react-native';
import { useState } from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';


const Item = ({item,data,setData}) => {
  const deleteElement = (element) => {
    setData(data => data.filter((item, i) => item.index !== element.index));
  }
  return (
  <View style={styles.box}>
    <Text>{item.text}</Text>
    <Icon.Button
      name="close"
      onPress={() => deleteElement(item)}>
    </Icon.Button>
  </View>
)};
const App = ({data, setData}) => {

  return (
      <>
        <View>
          <FlatList
            data={data}
            renderItem={({item}) => <Item item={item} data={data} setData={setData} />}
            keyExtractor={item => item.id}
          />
        </View>
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
    },
});

export default App;