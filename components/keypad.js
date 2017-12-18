import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import _ from 'underscore';
import Key from './key';
import keys from '../lib/keys';

const layout = [
  ['fraction', 'spacer', 'secondary', 'backspace'],
  ['7', '8', '9', 'multiply'],
  ['4', '5', '6', 'add'],
  ['1', '2', '3', 'subtract'],
  ['0', 'open-paren', 'close-paren', 'divide'],
  ['spacer', 'spacer', 'decimal-point', 'enter'],
];

export default class Keypad extends React.Component {
  constructor(props) {
    super(props);
    // Load key info for layout
    const rows = layout.map(row => {
      return row.map(keyName => {
        const keyInfo = keys[keyName] || {};
        const functions = _.map(keyInfo.functions, func => {
          // The default function action is to insert text
          if (!func.action) {
            func.action = this.insertAction(func.title.toString());
          }
          // Curry the action with the calculator API
          func.action = func.action.bind(null, this.props.calculatorAPI);
          return func;
        });
        return {
          functions,
        };
      });
    });
    this.keyConfiguration = rows;
    console.log(JSON.stringify(this.keyConfiguration, null, 2));
  }
  insertAction(insertText) {
    return () => this.props.calculatorAPI.insertText(insertText);
  }
  render() {
    const keyRows = this.keyConfiguration.map((rowConfig, rowIndex) => {
      const rowKeys = rowConfig.map((keyInfo, keyIndex) => {
        return <Key key={keyIndex} functions={keyInfo.functions} />;
      });
      return (
        <View key={rowIndex} style={styles.row}>
          {rowKeys}
        </View>
      );
    });
    return <View style={styles.container}>{keyRows}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
});

Keypad.propTypes = {
  // TODO after API stabilizes
};
