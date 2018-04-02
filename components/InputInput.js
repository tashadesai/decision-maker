import React, { Component } from 'react';
import { TextInput, View, Button, Alert, StyleSheet } from 'react-native';
import { Icon, ListItem, List, Body, Left, Right, Container } from 'native-base';

export default class Input extends Component {
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

  onRemovePress (i) {
    var options = this.state.optionsArr.slice(0, i).concat(this.state.optionsArr.slice(i + 1));
    this.setState({optionsArr: options});
  }

  onChangeText (input, i) {
    var options = this.state.optionsArr;
    options[i] = input;
    this.setState({optionsArr: options});
  }

  render() {
    return (
      <Container style={styles.container}>
        <List>
        {
          this.state.optionsArr.map((optionTxt, i) => {
            return (
              <ListItem key={i} style={{borderColor: 'transparent'}}>
                <Body>
                  <TextInput
                    style={{height: 40, borderColor: 'grey', borderWidth: 1}}
                    onChangeText={(input) => this.onChangeText(input, i)}
                    placeholder={'Option ' + (i + 1)}
                    value={optionTxt.split(' ')[0] === 'Option' ? null : optionTxt}
                  />
                </Body>
                <Right>
                  {
                    i > 1 ? <Icon name="close-circle" onPress={() => this.onRemovePress(i)} /> : null
                  }
                </Right>
              </ListItem>
            );
          })
        }
        </List>
        <Icon name="add" onPress={this.onAddPress} style={{color: '#b3feff', fontSize: 70, fontWeight: 'bold'}} />
        <Button onPress={() => this.props.navigation.navigate('Decision', {options: this.state.optionsArr})} title="Choose!" color="#841584"  />

      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303030',
  },
});

