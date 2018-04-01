import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import InputInput from './components/InputInput';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>What do you need to decide?</Text>
        <Button
          onPress={() => {
            Alert.alert('You tapped the button!');
          }}
          title="Heads or Tails?"
        />
        <Text>Yes or No?</Text>
        <Text>Input or Input?</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
