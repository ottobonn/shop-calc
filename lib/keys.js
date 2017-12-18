module.exports = {
  fraction: {
    functions: [
      {
        title: '⅟',
        action: calculatorAPI => calculatorAPI.toFraction(),
      },
    ],
  },
  spacer: {},
  backspace: {
    functions: [
      {
        title: '⌫',
        action: calculatorAPI => calculatorAPI.deleteText(),
      },
    ],
  },
  '7': {
    functions: [
      {
        title: '7',
      },
    ],
  },
  '8': {
    functions: [
      {
        title: '8',
      },
    ],
  },
  '9': {
    functions: [
      {
        title: '9',
      },
    ],
  },
  '4': {
    functions: [
      {
        title: '4',
      },
    ],
  },
  '5': {
    functions: [
      {
        title: '5',
      },
    ],
  },
  '6': {
    functions: [
      {
        title: '6',
      },
    ],
  },
  '1': {
    functions: [
      {
        title: '1',
      },
    ],
  },
  '2': {
    functions: [
      {
        title: '2',
      },
    ],
  },
  '3': {
    functions: [
      {
        title: '3',
      },
    ],
  },
  '0': {
    functions: [
      {
        title: '0',
      },
    ],
  },
  add: {
    functions: [
      {
        title: '+',
      },
    ],
  },
  subtract: {
    functions: [
      {
        title: '-',
      },
    ],
  },
  divide: {
    functions: [
      {
        title: '÷',
        action: calculatorAPI => calculatorAPI.insertText('/'),
      },
    ],
  },
  multiply: {
    functions: [
      {
        title: '×',
        action: calculatorAPI => calculatorAPI.insertText('*'),
      },
    ],
  },
  'open-paren': {
    functions: [
      {
        title: '(',
      },
    ],
  },
  'close-paren': {
    functions: [
      {
        title: ')',
      },
    ],
  },
  'decimal-point': {
    functions: [
      {
        title: '.',
      },
    ],
  },
  enter: {
    functions: [
      {
        title: '✓',
        action: calculatorAPI => calculatorAPI.eval(),
      },
      {
        title: 'Ans',
      },
    ],
  },
  secondary: {
    functions: [
      {
        title: '2nd',
      },
    ],
  },
};
