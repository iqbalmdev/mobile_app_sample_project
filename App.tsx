/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {Fragment, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  FlatList,
  Linking,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function App() {
  const [state, setState] = useState(false);

  const items = [
    {id: 1, name: 'Apple', color: 'red'},
    {id: 2, name: 'Banana', color: 'yellow'},
    {id: 3, name: 'Grapes', color: 'purple'},
    {id: 4, name: 'Orange', color: 'orange'},

  ];

  const [redresh,setRefresh] = useState(false)

  const onRefresh =()=>{
    setRefresh(true)
    setTimeout(()=>{
setRefresh(false)
    },2000)
  }
  return (
  <View style={styles.main_view}>
<Text>
  Please enter your name here:
</Text>
<View>
<TextInput style={styles.input}/>
</View>
  </View>
  );
}

const styles = StyleSheet.create({
  main_view: {
    flexDirection: 'column',
    flex:1
  },

  first_part: {
    flex:2,
    backgroundColor: '#008bb9',
    margin: 10,
    justifyContent:'center',
    alignItems:'center'

  },
  one: {
    color: '#FF0000',
  },
  input:{
    borderColor:"grey",
    borderRadius:10,
    borderWidth:1
  }
});

export default App;
