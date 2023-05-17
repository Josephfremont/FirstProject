import { StatusBar } from 'expo-status-bar';
import reactDom from 'react-dom';
import { StyleSheet, Text, View, Button, TextInput, SafeAreaView, ImageBackground, ScrollView } from 'react-native';
import { useState } from 'react';

import Element from './composant/Element';
import ElementFlatList from './composant/ElementFlatList';
import InputData from './composant/InputData';
import InputDataOrigin from './composant/InputDataOrigin';

import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  const sampleGoals = [
    {    index: 1, text:"Faire les courses", heure:"5h"},
    {    index: 2, text:"Aller à la salle de sport 3 fois par semaine", heure:"6h"},
    {    index: 3, text:"Montaer à plus de 5000m d'altitude", heure:"7h"},
    {    index: 4, text:"Acheter mon premier appartement", heure:"14h"},
    {    index: 5, text:"Perdre 5kgs", heure:"23h"},
    {    index: 6, text:"Gagner en productivité", heure:"1h"},
    {    index: 7, text:"Apprendre un nouveau langage", heure:"8h"},
    {    index: 8, text:"Faire une mission en freelance", heure:"2h"},
    {    index: 9, text:"Organiser un meetup autour de la tech", heure:"7h"},
    {    index: 10, text:"Faire un triathlon",heure: "9h"}
  ];

  const sampleGoalsOrigin = [
      "Faire les courses",
      "Aller à la salle de sport 3 fois par semaine",
      "Montaer à plus de 5000m d'altitude",
      "Acheter mon premier appartement",
      "Perdre 5kgs",
      "Gagner en productivité",
      "Apprendre un nouveau langage",
      "Faire une mission en freelance",
      "Organiser un meetup autour de la tech",
      "Faire un triathlon"
  ];

  const image = {uri: 'https://reactjs.org/logo-og.png'};

  const [data, setData] = useState(sampleGoals);

  const [dataOrigin, setDataOrigin] = useState(sampleGoalsOrigin);

  return (
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView>
          <View style={styles.container}>
            {/* <ImageBackground source={image} resizeMode="cover" style={{opacity:0.5}}> */}
              <Text style={styles.color}>Open up <Text style={styles.bold}>App.js</Text> to start working on your app!</Text>
              <ElementFlatList data={data} setData={setData}/>
              {/* <Element data={dataOrigin} setData={setDataOrigin}/> */}
              {/* <InputData data={dataOrigin} setData={setDataOrigin}/> */}
              <InputData data={data} setData={setData}/>
              {/* <InputDataOrigin data={dataOrigin} setData={setDataOrigin}/> */}
              <StatusBar style='auto'/>
            {/* </ImageBackground> */}
          </View>
        </ScrollView>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView:{
    paddingTop: StatusBar.currentHeight,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bold: {
    fontWeight: "bold",
  },
  color: {
    color: "red",
  },
});
