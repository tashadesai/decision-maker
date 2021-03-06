import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class YesOrNo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Yes or No?</Text>
        <Text>{Math.floor(Math.random() * 2) === 0 ? 'Yes' : 'No'} </Text>
        <Button onPress={() => this.forceUpdate()} title="Again" color="#841584" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303030',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
