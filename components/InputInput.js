import React, { Component } from 'react';
import { TextInput, View, Button, Alert, StyleSheet } from 'react-native';
import { Icon, ListItem, List, Body, Left, Right, Container } from 'native-base';

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionsArr: ['Option 1', 'Option 2'],
      currentlyAdding: ''
    };

    this.onAddPress = this.onAddPress.bind(this);
    this.onRemovePress = this.onRemovePress.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
  }

  onAddPress () {
    var options = this.state.optionsArr;
    options.push(this.state.currentlyAdding);
    this.setState({
      optionsArr: options,
      currentlyAdding: ''
    });
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
                <ListItem key={i} style={{borderColor: 'white', alignItems: 'center'}}>
                  <Body>
                    <TextInput
                      style={styles.txtInput}
                      onChangeText={(input) => this.onChangeText(input, i)}
                      placeholder={'Enter Option ' + (i + 1)} placeholderTextColor='grey'
                      value={optionTxt.split(' ')[0] === 'Option' ? null : optionTxt}
                    />
                  </Body>
                  <Icon name="close-circle" onPress={() => this.onRemovePress(i)} style={i > 1 ? styles.delIcon : styles.hiddenDel} />
                </ListItem>
              );
            })
          }
          <ListItem style={{borderColor: 'white', alignItems: 'center'}}>
            <Body>
              <TextInput
                style={styles.txtInput}
                onChangeText={(input) => this.setState({currentlyAdding: input})}
                placeholder={'Add another option'} placeholderTextColor='grey'
                value={this.state.currentlyAdding}
              />
            </Body>
            <Icon name="add" onPress={this.onAddPress} style={styles.plusIcon} />
          </ListItem>
        </List>

        <View style={styles.buttons}>

          <Button onPress={() => this.props.navigation.navigate('Decision', {options: this.state.optionsArr})} title="MAKE A DECISION!" color="#8af8ff" />
        </View>

      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303030'
  },
  buttons: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  txtInput: {
    height: 30,
    color:'#8af8ff',
    fontSize: 20,
    borderRadius: 10
  },
  delIcon: {
    color: 'pink',
    fontSize: 40,
    fontWeight: 'bold'
  },
  hiddenDel: {
    color: 'transparent',
    fontSize: 40,
    fontWeight: 'bold'
  },
  plusIcon: {
    color: '#8af8ff',
    fontSize: 60,
    fontWeight: 'bold'
  }
});

