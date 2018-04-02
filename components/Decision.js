import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class HeadsOrTails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      optionsArr: ['Option 1', 'Option 2']
    };

    this.decisionMaker = this.decisionMaker.bind(this);
  }

  decisionMaker (options) {
    return options[Math.floor(Math.random() * options.length)];
  }

  render() {
    var options = this.props.navigation.state.params.options;

    return (
      <View style={styles.container}>
        <Text>Decision:</Text>
        <Text>{this.decisionMaker(options)}</Text>
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
