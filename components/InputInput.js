import React, { Component } from 'react';
import { TextInput, View, Button, Alert } from 'react-native';

export default class UselessTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionsArr: ['Option 1', 'Option 2']
    };

    this.onAddPress = this.onAddPress.bind(this);
    this.onRemovePress = this.onRemovePress.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
  }

  onAddPress () {
    var options = this.state.optionsArr;
    var num = options.length + 1;
    options.push('Option ' + num);
    this.setState({optionsArr: options});
  }

  onRemovePress () {
    this.state.optionsArr.pop();
    this.setState({optionsArr: this.state.optionsArr});
  }

  onChangeText (input, i) {
    var options = this.state.optionsArr;
    options[i] = input;
    this.setState({optionsArr: options});
  }

  render() {
    return (
      <View>
        {
          this.state.optionsArr.map((optionNum, i) => {
            return (
              <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                onChangeText={(input) => this.onChangeText(input, i)} value={this.state.optionsArr[i]} key={i}
                placeholder={optionNum}
              />
            );
          })
        }
        {
          this.state.optionsArr.length > 2
            ? <Button onPress={this.onRemovePress} title="REMOVE" color="#841584" />
            : null
        }
        <Button onPress={this.onAddPress} title="ADD" color="#841584" />
        <Button onPress={() => this.props.navigation.navigate('Decision', {options: 'me'})} title="Choose!" color="#841584"  />

      </View>
    );
  }
}

