const keysMapEn = [{
  Backquote: {
    code: 'Backquote',
    type: 'symbol',
    key: '`',
    shifted: '~',
  },
  Digit1: {
    code: 'Digit1',
    type: 'symbol',
    shifted: '!',
    key: '1',
  },
  Digit2: {
    code: 'Digit2',
    type: 'symbol',
    shifted: '@',
    key: '2',
  },
  Digit3: {
    code: 'Digit3',
    type: 'symbol',
    shifted: '#',
    key: '3',
  },
  Digit4: {
    code: 'Digit4',
    type: 'symbol',
    shifted: '$',
    key: '4',
  },
  Digit5: {
    code: 'Digit5',
    key: '5',
    type: 'symbol',
    shifted: '%',
  },
  Digit6: {
    code: 'Digit6',
    type: 'symbol',
    shifted: '^',
    key: '6',
  },
  Digit7: {
    code: 'Digit7',
    type: 'symbol',
    shifted: '&',
    key: '7',
  },
  Digit8: {
    code: 'Digit8',
    type: 'symbol',
    shifted: '*',
    key: '8',
  },
  Digit9: {
    code: 'Digit9',
    type: 'symbol',
    shifted: '(',
    key: '9',
  },
  Digit0: {
    code: 'Digit0',
    type: 'symbol',
    shifted: ')',
    key: '0',
  },
  Minus: {
    code: 'Minus',
    type: 'symbol',
    shifted: '_',
    key: '-',
  },
  Equal: {
    code: 'Equal',
    type: 'symbol',
    shifted: '+',
    key: '=',
  },
  Backspace: {
    code: 'Backspace',
    type: 'functional',
    key: 'Backspace',
  },
},
{
  Tab: {
    code: 'Tab',
    type: 'functional',
    key: 'Tab',
    symbol: '\t',
  },
  KeyQ: {
    code: 'KeyQ',
    type: 'letter',
    key: 'q',
  },
  KeyW: {
    code: 'KeyW',
    type: 'letter',
    key: 'w',
  },
  KeyE: {
    code: 'KeyE',
    type: 'letter',
    key: 'e',
  },
  KeyR: {
    code: 'KeyR',
    type: 'letter',
    key: 'r',
  },
  KeyT: {
    code: 'KeyT',
    type: 'letter',
    key: 't',
  },
  KeyY: {
    code: 'KeyY',
    type: 'letter',
    key: 'y',
  },
  KeyU: {
    code: 'KeyU',
    type: 'letter',
    key: 'u',
  },
  KeyI: {
    code: 'KeyI',
    type: 'letter',
    key: 'i',
  },
  KeyO: {
    code: 'KeyO',
    type: 'letter',
    key: 'o',
  },
  KeyP: {
    code: 'KeyP',
    type: 'letter',
    key: 'p',
  },
  BracketLeft: {
    code: 'BracketLeft',
    type: 'symbol',
    key: '[',
    shifted: '{',
  },
  BracketRight: {
    code: 'BracketRight',
    type: 'symbol',
    key: ']',
    shifted: '}',
  },
  Backslash: {
    code: 'Backslash',
    type: 'symbol',
    key: '\\',
    shifted: '|',
  },
  Delete: {
    code: 'Delete',
    type: 'functional',
    key: 'Del',
  },
},
{
  CapsLock: {
    code: 'CapsLock',
    type: 'functional',
    key: 'CapsLock',
  },
  KeyA: {
    code: 'KeyA',
    type: 'letter',
    key: 'a',
  },
  KeyS: {
    code: 'KeyS',
    type: 'letter',
    key: 's',
  },
  KeyD: {
    code: 'KeyD',
    type: 'letter',
    key: 'd',
  },
  KeyF: {
    code: 'KeyF',
    type: 'letter',
    key: 'f',
  },
  KeyG: {
    code: 'KeyG',
    type: 'letter',
    key: 'g',
  },
  KeyH: {
    code: 'KeyH',
    type: 'letter',
    key: 'h',
  },
  KeyJ: {
    code: 'KeyJ',
    type: 'letter',
    key: 'j',
  },
  KeyK: {
    code: 'KeyK',
    type: 'letter',
    key: 'k',
  },
  KeyL: {
    code: 'KeyL',
    type: 'letter',
    key: 'l',
  },
  Semicolon: {
    code: 'Semicolon',
    type: 'symbol',
    key: ';',
    shifted: ':',
  },
  Quote: {
    code: 'Quote',
    type: 'symbol',
    key: '\'',
    shifted: '"',
  },
  Enter: {
    code: 'Enter',
    type: 'functional',
    key: 'Enter',
    symbol: '\n',
  },
},
{
  ShiftLeft: {
    code: 'ShiftLeft',
    type: 'functional',
    key: 'Shift',
  },
  KeyZ: {
    code: 'KeyZ',
    type: 'letter',
    key: 'z',
  },
  KeyX: {
    code: 'KeyX',
    type: 'letter',
    key: 'x',
  },
  KeyC: {
    code: 'KeyC',
    type: 'letter',
    key: 'c',
  },
  KeyV: {
    code: 'KeyV',
    type: 'letter',
    key: 'v',
  },
  KeyB: {
    code: 'KeyB',
    type: 'letter',
    key: 'b',
  },
  KeyN: {
    code: 'KeyN',
    type: 'letter',
    key: 'n',
  },
  KeyM: {
    code: 'KeyM',
    type: 'letter',
    key: 'm',
  },
  Comma: {
    code: 'Comma',
    type: 'symbol',
    key: ',',
    shifted: '<',
  },
  Period: {
    code: 'Period',
    type: 'symbol',
    key: '.',
    shifted: '>',
  },
  Slash: {
    code: 'Slash',
    type: 'symbol',
    key: '/',
    shifted: '?',
  },
  ShiftRight: {
    code: 'ShiftRight',
    type: 'functional',
    key: 'Shift',
  },
  ArrowUp: {
    code: 'ArrowUp',
    type: 'symbol',
    key: '▲',
  },
  Lang: {
    code: 'Lang',
    type: 'functional',
    key: 'Lang',
  },
},
{
  ControlLeft: {
    code: 'ControlLeft',
    type: 'functional',
    key: 'Ctrl',
  },
  MetaLeft: {
    code: 'MetaLeft',
    type: 'functional',
    key: 'Meta',
  },
  AltLeft: {
    code: 'AltLeft',
    type: 'functional',
    key: 'Alt',
  },
  Space: {
    code: 'Space',
    type: 'symbol',
    key: ' ',
  },
  AltRight: {
    code: 'AltRight',
    type: 'functional',
    key: 'Alt',
  },
  ControlRight: {
    code: 'ControlRight',
    type: 'functional',
    key: 'Ctrl',
  },
  ArrowLeft: {
    code: 'ArrowLeft',
    type: 'symbol',
    key: '◄',
  },
  ArrowDown: {
    code: 'ArrowDown',
    type: 'symbol',
    key: '▼',
  },
  ArrowRight: {
    code: 'ArrowRight',
    type: 'symbol',
    key: '►',
  },
},
];

export default keysMapEn;
