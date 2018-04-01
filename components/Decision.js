import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class HeadsOrTails extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Decision</Text>
        <Text>{'props' + this.props.navigation.state.params.options}</Text>
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
