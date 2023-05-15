import { StatusBar } from 'expo-status-bar';
import reactDom from 'react-dom';
import { StyleSheet, Text, View, Button, TextInput, SafeAreaView, ImageBackground, ScrollView } from 'react-native';
import { useState } from 'react';

import Element from './composant/Element';
import ElementFlatList from './composant/ElementFlatList';
import InputData from './composant/InputData';

import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  const sampleGoals = [
    {    index: 1, text:"Faire les courses"},
    {    index: 2, text:"Aller à la salle de sport 3 fois par semaine"},
    {    index: 3, text:"Montaer à plus de 5000m d'altitude"},
    {    index: 4, text:"Acheter mon premier appartement"},
    {    index: 5, text:"Perdre 5kgs"},
    {    index: 6, text:"Gagner en productivité"},
    {    index: 7, text:"Apprendre un nouveau langage"},
    {    index: 8, text:"Faire une mission en freelance"},
    {    index: 9, text:"Organiser un meetup autour de la tech"},
    {    index: 10, text:"Faire un triathlon"}
  ];
  const image = {uri: 'https://reactjs.org/logo-og.png'};

  const [data, setData] = useState(sampleGoals);

  return (
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView>
          <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
              <Text style={styles.color}>Open up <Text style={styles.bold}>App.js</Text> to start working on your app!</Text>
              <ElementFlatList data={data} setData={setData}/>
              <InputData data={data} setData={setData}/>
              <StatusBar style='auto'/>
            </ImageBackground>
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
