import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

const pressRetentionOffset = {
  top: 10,
  left: 10,
  bottom: 10,
  right: 10,
};

export default class Key extends React.Component {
  render() {
    let primaryFunction = this.props.functions[0] || {
      title: '',
      action: () => {},
    };
    let secondaryFunction = this.props.functions[1];
    let secondaryText;
    if (secondaryFunction) {
      secondaryText = <Text style={styles.secondaryFunctionText}>{secondaryFunction.title}</Text>;
    }
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={primaryFunction.action}
          style={[styles.button, styles.container]}
          pressRetentionOffset={pressRetentionOffset}>
          {secondaryText}
          <Text style={styles.primaryFunctionText}>{primaryFunction.title}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
  button: {
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#bbb',
  },
  primaryFunctionText: {
    fontSize: 40,
  },
  secondaryFunctionText: {
    fontSize: 20,
    color: '#333',
  },
});

Key.propTypes = {
  buffer: PropTypes.shape({
    text: PropTypes.string,
  }),
  functions: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      action: PropTypes.func,
    })
  ),
};
