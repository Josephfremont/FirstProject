import { StatusBar } from 'expo-status-bar';
import reactDom from 'react-dom';
import { StyleSheet, Text, View, Button, TextInput, SafeAreaView, ScrollView } from 'react-native';
import { useState } from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';

export default function InputData({data, setData}) {

    const [elementInput , setElementInput] = useState(null);

    const ajoutElement = (element) => {
        const newIndex = data.length + 1;
        const newHeure = Math.floor(Math.random() * 24)
        setData([...data, { index: newIndex ,text:element , heure: newHeure }]);
        // console.log('data ',data);
    }

    return (
      <ScrollView>
        <View style={styles.container}>
          <TextInput
            placeholder="Insérer"
            onChangeText={(e) => setElementInput(e)}
          />
          <Button 
            style={{ height: 50, width: 50 }}
            title="Add"
            onPress={() => ajoutElement(elementInput)}
          />
        </View>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
