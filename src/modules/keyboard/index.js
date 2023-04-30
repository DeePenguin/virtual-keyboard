import Element from '../../common/element';
import './keyboard.scss';
import Key from '../key';
import langs from './langs';
import KeyboardState from './keyboard-state';

export default class Keyboard extends Element {
  constructor(parentNode, output) {
    super({
      parentNode,
      className: 'keyboard',
    });
    this.langs = langs.getLangs();
    this.keysConfig = langs.options;
    this.keys = {};
    this.value = '';
    this.output = output;
    this.init();
  }

  init() {
    this.value = this.output.content;
    this.getCurrentLang();
    this.createKeys();
    this.state = new KeyboardState(this);
    this.addListeners();
  }

  getCurrentLang() {
    this.currentLang = localStorage.getItem('keyboard-lang') || this.langs[0];
    this.currentLangIndex = this.langs.indexOf(this.currentLang);
  }

  saveCurrentLang() {
    localStorage.setItem('keyboard-lang', this.currentLang);
  }

  createKeys() {
    const config = this.keysConfig[this.currentLang];
    Object.keys(config).forEach((keyCode) => {
      let key;
      switch (keyCode) {
        case 'ShiftLeft':
        case 'ShiftRight':
          key = new Key(
            this.node,
            config[keyCode],
            () => this.handleShift(),
            () => this.handleShift(),
          );
          break;
        case 'Backspace':
          key = new Key(this.node, config[keyCode], () => this.backspace());
          break;
        case 'CapsLock':
          key = new Key(this.node, config[keyCode], () => this.handleCaps());
          break;
        case 'Lang':
          key = new Key(this.node, config[keyCode], () => this.toNextLang());
          break;
        default:
          key = new Key(this.node, config[keyCode], (data) => this.print(data));
      }
      this.keys[keyCode] = key;
    });
  }

  addListeners() {
    window.addEventListener('keydown', (e) => this.handleKeyDown(e));
    window.addEventListener('keyup', (e) => this.handleKeyUp(e));
    window.addEventListener('beforeunload', () => this.saveCurrentLang());
  }

  handleKeyDown(e) {
    const currentKey = this.keys[e.code];
    if (currentKey) {
      if (e.repeat && !currentKey.repeat) return;
      currentKey.handleDown();
    }
    if ((e.code === 'AltLeft' && e.ctrlKey) || (e.code === 'ControlLeft' && e.altKey)) this.toNextLang();
  }

  handleKeyUp(e) {
    const currentKey = this.keys[e.code];
    if (currentKey) {
      currentKey.handleUp();
    }
  }

  print(data) {
    const value = this.output.content;
    const [start, end] = this.output.getCaretInfo();
    this.value = value.substring(0, start)
      .concat(data)
      .concat(value.substring(end));
    this.output.content = this.value;
    this.output.focus(start + 1);
  }

  backspace() {
    const value = this.output.content;
    const [selStart, selEnd] = this.output.getCaretInfo();
    const start = selStart === selEnd
      ? Math.max(selStart - 1, 0)
      : selStart;
    this.value = value.substring(0, start)
      .concat(value.substring(selEnd));
    this.output.content = this.value;
    this.output.focus(start);
  }

  handleShift() {
    this.state.handleShift(this.keys);
    this.output.focus();
  }

  handleCaps() {
    this.state.handleCaps(this.keys);
    this.output.focus();
  }

  toNextLang() {
    this.currentLangIndex = (this.currentLangIndex + 1) % this.langs.length;
    this.currentLang = this.langs[this.currentLangIndex];
    const config = this.keysConfig[this.currentLang];
    Object.keys(config)
      .forEach((keyCode) => this.keys[keyCode].changeLang(config[keyCode]));
    this.output.focus();
  }
}
