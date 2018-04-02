import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default class HeadsOrTails extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Heads or Tails?</Text>
        <Text>{Math.floor(Math.random() * 2) === 0 ? 'Heads' : 'Tails'} </Text>
        <Button onPress={() => this.forceUpdate()} title="Flip Again" color="#841584" />
      </View>
    );
  }
}

