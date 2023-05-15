import { StatusBar } from 'expo-status-bar';
import reactDom from 'react-dom';
import { StyleSheet, Text, View, Button, TextInput, SafeAreaView } from 'react-native';
import { useState } from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';

export default function InputData({data, setData}) {

    const [elementInput , setElementInput] = useState(null);

    const ajoutElement = (element) => {
        setData([...data, element]);
        console.log('data ',data);
    }

    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Insérer"
          onChangeText={(e) => setElementInput(e)}
        />
        <Button 
          title="Add"
          onPress={() => ajoutElement(elementInput)}
        />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
