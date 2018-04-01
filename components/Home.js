import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Decision Maker</Text>
        <Button title="Heads or Tails?" onPress={() => this.props.navigation.navigate('HeadsOrTails')} />
        <Button title="Yes or No?" onPress={() => this.props.navigation.navigate('YesOrNo')} />
        <Button title="Enter your own" onPress={() => this.props.navigation.navigate('Input')} />
      </View>
    );
  }
}
