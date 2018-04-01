import React, { Component } from 'react';
import { TextInput, View, Button, Alert } from 'react-native';

export default class UselessTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfOptions: [1, 2]
    };

    this.onAddPress = this.onAddPress.bind(this);
    this.onRemovePress = this.onRemovePress.bind(this);
  }

  onAddPress () {
    var options = this.state.numberOfOptions;
    options.push(options[options.length - 1] + 1);
    this.setState({numberOfOptions: options});
  }

  onRemovePress () {
    this.state.numberOfOptions.pop();
    this.setState({numberOfOptions: this.state.numberOfOptions});
  }

  render() {
    return (
      <View>
        {
          this.state.numberOfOptions.map((optionNum) => {
            return (
              <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                onChangeText={(input) => this.setState({text1: input})}
                value={'Option ' + optionNum} key={optionNum}
              />
            );
          })
        }
        {
          this.state.numberOfOptions.length > 2
            ? <Button onPress={this.onRemovePress} title="REMOVE" color="#841584" />
            : null
        }
        <Button onPress={this.onAddPress} title="ADD" color="#841584" />

      </View>
    );
  }
}

