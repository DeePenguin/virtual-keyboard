const keysMapRu = [{
  Backquote: {
    code: 'Backquote',
    type: 'letter',
    key: 'ё',
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
    shifted: '"',
    key: '2',
  },
  Digit3: {
    code: 'Digit3',
    type: 'symbol',
    shifted: '№',
    key: '3',
  },
  Digit4: {
    code: 'Digit4',
    type: 'symbol',
    shifted: ';',
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
    shifted: ':',
    key: '6',
  },
  Digit7: {
    code: 'Digit7',
    type: 'symbol',
    shifted: '?',
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
    key: 'й',
  },
  KeyW: {
    code: 'KeyW',
    type: 'letter',
    key: 'ц',
  },
  KeyE: {
    code: 'KeyE',
    type: 'letter',
    key: 'у',
  },
  KeyR: {
    code: 'KeyR',
    type: 'letter',
    key: 'к',
  },
  KeyT: {
    code: 'KeyT',
    type: 'letter',
    key: 'е',
  },
  KeyY: {
    code: 'KeyY',
    type: 'letter',
    key: 'н',
  },
  KeyU: {
    code: 'KeyU',
    type: 'letter',
    key: 'г',
  },
  KeyI: {
    code: 'KeyI',
    type: 'letter',
    key: 'ш',
  },
  KeyO: {
    code: 'KeyO',
    type: 'letter',
    key: 'щ',
  },
  KeyP: {
    code: 'KeyP',
    type: 'letter',
    key: 'з',
  },
  BracketLeft: {
    code: 'BracketLeft',
    type: 'letter',
    key: 'х',
  },
  BracketRight: {
    code: 'BracketRight',
    type: 'letter',
    key: 'ъ',
  },
  Backslash: {
    code: 'Backslash',
    type: 'symbol',
    key: '\\',
    shifted: '/',
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
    key: 'ф',
  },
  KeyS: {
    code: 'KeyS',
    type: 'letter',
    key: 'ы',
  },
  KeyD: {
    code: 'KeyD',
    type: 'letter',
    key: 'в',
  },
  KeyF: {
    code: 'KeyF',
    type: 'letter',
    key: 'а',
  },
  KeyG: {
    code: 'KeyG',
    type: 'letter',
    key: 'п',
  },
  KeyH: {
    code: 'KeyH',
    type: 'letter',
    key: 'р',
  },
  KeyJ: {
    code: 'KeyJ',
    type: 'letter',
    key: 'о',
  },
  KeyK: {
    code: 'KeyK',
    type: 'letter',
    key: 'л',
  },
  KeyL: {
    code: 'KeyL',
    type: 'letter',
    key: 'д',
  },
  Semicolon: {
    code: 'Semicolon',
    type: 'letter',
    key: 'ж',
  },
  Quote: {
    code: 'Quote',
    type: 'letter',
    key: 'э',
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
    key: 'я',
  },
  KeyX: {
    code: 'KeyX',
    type: 'letter',
    key: 'ч',
  },
  KeyC: {
    code: 'KeyC',
    type: 'letter',
    key: 'с',
  },
  KeyV: {
    code: 'KeyV',
    type: 'letter',
    key: 'м',
  },
  KeyB: {
    code: 'KeyB',
    type: 'letter',
    key: 'и',
  },
  KeyN: {
    code: 'KeyN',
    type: 'letter',
    key: 'т',
  },
  KeyM: {
    code: 'KeyM',
    type: 'letter',
    key: 'ь',
  },
  Comma: {
    code: 'Comma',
    type: 'letter',
    key: 'б',
  },
  Period: {
    code: 'Period',
    type: 'letter',
    key: 'ю',
  },
  Slash: {
    code: 'Slash',
    type: 'symbol',
    key: '.',
    shifted: ',',
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
    type: 'symbol',
    key: 'Alt',
  },
  Space: {
    code: 'Space',
    type: 'symbol',
    key: ' ',
  },
  AltRight: {
    code: 'AltRight',
    type: 'symbol',
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

export default keysMapRu;
