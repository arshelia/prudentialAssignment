import React, {Component} from 'react';
import {StyleSheet, View, Button} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: 'ox-shadow: 0 -6px 16px rgba(0, 0, 0, 0.15);',
  },
  button: {
    width: 250,
    height: 80,
    borderRadius: 50,
    backgroundColor: '#000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
});

export default class Home extends Component {
  static navigationOptions = {
    title: '主页',
  };
  enterHandler = () => {
    this.props.navigation.navigate('MindRecord');
  };
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="点击进入历史心情指数"
          style={styles.button}
          onPress={this.enterHandler}
        />
      </View>
    );
  }
}
