import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './components/Home';
import InputScreen from './components/InputInput';
import YesNoScreen from './components/YesOrNo';
import HeadsTailScreen from './components/HeadsOrTails';


const App = StackNavigator({
  Home: { screen: HomeScreen },
  Input: { screen: InputScreen },
  HeadsOrTails: {screen: HeadsTailScreen},
  YesOrNo: {screen: YesNoScreen}
});

export default App;
