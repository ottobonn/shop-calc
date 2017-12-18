import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import mathjs from 'mathjs';
import _ from 'underscore';

import Keypad from './components/keypad';

mathjs.config({
  number: 'BigNumber',
});

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buffer: {
        text: '',
        selection: undefined, // TODO
        cursorIndex: undefined, // TODO
      },
    };
    const calculatorAPI = {
      insertText(text) {
        this.setState({ buffer: { text: this.state.buffer.text + String(text) } });
      },
      deleteText() {
        // TODO add selection support
        this.setState({
          buffer: { text: this.state.buffer.text.substring(0, this.state.buffer.text.length - 1) },
        });
      },
      eval() {
        let result;
        try {
          result = mathjs.eval(this.state.buffer.text).toString();
          this.setState({ buffer: { text: result } });
        } catch (e) {
          console.log(e);
        }
      },
      toFraction() {
        this.calculatorAPI.eval();
        let fraction = mathjs.fraction(this.state.buffer.text);
        let fractionString = mathjs.format(fraction, { fraction: 'ratio' });
        this.setState({ buffer: { text: fractionString } });
      },
    };
    this.calculatorAPI = _.mapObject(calculatorAPI, apiFunction => apiFunction.bind(this));
  }

  onSubmitInput() {
    this.calculatorAPI.eval();
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={text => this.setState({ buffer: { text } })}
          onSubmitEditing={() => this.onSubmitInput()}
          autoCapitalize="none"
          keyboardType="numeric"
          autoGrow
          value={this.state.buffer.text}
        />
        <Keypad calculatorAPI={this.calculatorAPI} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 100,
    fontSize: 40,
    width: '100%',
    borderWidth: 0,
    textAlign: 'right',
  },
});
