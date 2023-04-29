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
    this.state = new KeyboardState(this);
    this.value = this.output.content;
    this.getCurrentLang();
    this.createKeys();
    this.addListeners();
  }

  getCurrentLang() {
    this.currentLang = localStorage.getItem('keyboard-lang') || this.langs[0];
  }

  saveCurrentLang() {
    localStorage.setItem('keyboard-lang', this.currentLang);
  }

  createKeys() {
    const config = this.keysConfig[this.currentLang];
    config.forEach((row) => {
      const rowEl = new Element({
        parentNode: this.node,
        className: 'keyboard-row',
      });

      Object.keys(row).forEach((keyCode) => {
        let key;
        switch (keyCode) {
          case 'ShiftLeft':
          case 'ShiftRight':
            key = new Key(rowEl, row[keyCode], () => this.handleShift(), () => this.handleShift());
            break;
          case 'Backspace':
            key = new Key(rowEl, row[keyCode], () => this.backspace());
            break;
          case 'CapsLock':
            key = new Key(rowEl, row[keyCode], () => this.handleCaps());
            break;
          default:
            key = new Key(rowEl, row[keyCode], (data) => this.print(data));
        }
        this.keys[keyCode] = key;
      });
    });
  }

  addListeners() {
    window.addEventListener('keydown', (e) => this.handleKeyDown(e));
    window.addEventListener('keyup', (e) => this.handleKeyUp(e));
  }

  handleKeyDown(e) {
    const currentKey = this.keys[e.code];
    if ((e.code === 'ShiftLeft' || e.code === 'ShiftRight') && e.repeat) return;
    if (currentKey) {
      currentKey.handleDown();
    }
  }

  handleKeyUp(e) {
    const currentKey = this.keys[e.code];
    if (currentKey) {
      currentKey.handleUp();
    }
  }

  print(data) {
    this.value += data;
    this.output.content = this.value;
    this.output.focus();
  }

  backspace() {
    this.value = this.value.slice(0, -1);
    this.output.content = this.value;
    this.output.focus();
  }

  handleShift() {
    this.state.handleShift(this.keys);
  }

  handleCaps() {
    this.state.handleCaps(this.keys);
  }
}
