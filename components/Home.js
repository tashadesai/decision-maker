import React from 'react';
import { StyleSheet, View, Alert, ImageBackground, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Button, Text } from 'native-base';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../public/pickleLogo4.png')} style={{width: 400, height: 100}} />
        <View style={styles.buttons}>
        <Button transparent onPress={() => this.props.navigation.navigate('HeadsOrTails')}>
          <Text style={styles.buttonText}>HEADS or TAILS?</Text>
        </Button>
        <Button transparent onPress={() => this.props.navigation.navigate('YesOrNo')}>
          <Text style={styles.buttonText}>YES or NO?</Text>
        </Button>
        <Button transparent onPress={() => this.props.navigation.navigate('Input')}>
          <Text style={{color: '#8affe8', fontSize: 35, lineHeight: 35, fontStyle: 'italic'}}>ENTER YOUR OWN </Text>
        </Button>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303030',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttons: {
    flexDirection: 'column'
  },
  buttonText : {
    color: '#8affe8',
    fontSize: 35,
    lineHeight: 35
  }
});
