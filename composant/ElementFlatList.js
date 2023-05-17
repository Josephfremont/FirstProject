import { StatusBar } from 'expo-status-bar';
import reactDom from 'react-dom';
import { StyleSheet, Text, FlatList, View, Button, TextInput, SafeAreaView, ScrollView } from 'react-native';
import { useState } from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';
import ShowModal from './ShowModal';


const Item = ({item,data,setData}) => {
  const [modalVisible, setModalVisible] = useState(false);


  const deleteElement = (element) => {
    setData(data => data.filter((item, i) => item.index !== element.index));
  }
  return (
  <View style={styles.box}>
    <Text onPress={() => setModalVisible(true)}>{item.text}</Text>
    <Icon.Button
      name="close"
      onPress={() => deleteElement(item)}>
    </Icon.Button>
    <ShowModal modalVisible={modalVisible} setModalVisible={setModalVisible} data={item}/>
  </View>
)};
const App = ({data, setData}) => {
  
  return (
      <>
        <ScrollView>
          <View>
            <FlatList
              data={data}
              renderItem={({item}) => <Item item={item} data={data} setData={setData} />}
              keyExtractor={item => item.id}
            />
          </View>
        </ScrollView>
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