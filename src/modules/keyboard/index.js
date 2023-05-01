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
            () => this.handleShift(true),
          );
          break;
        case 'Backspace':
          key = new Key(this.node, config[keyCode], () => this.backspace());
          break;
        case 'Delete':
          key = new Key(this.node, config[keyCode], () => this.delete());
          break;
        case 'CapsLock':
          key = new Key(this.node, config[keyCode], () => this.handleCaps());
          break;
        case 'Lang':
          key = new Key(this.node, config[keyCode], () => this.toNextLang());
          break;
        case 'ArrowUp':
          key = new Key(this.node, config[keyCode], () => this.moveCursorVertically('backward'));
          break;
        case 'ArrowDown':
          key = new Key(this.node, config[keyCode], () => this.moveCursorVertically('forward'));
          break;
        case 'ArrowLeft':
          key = new Key(this.node, config[keyCode], () => this.moveCursorHorizontally(-1));
          break;
        case 'ArrowRight':
          key = new Key(this.node, config[keyCode], () => this.moveCursorHorizontally(1));
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
    this.updateCaretPosition();
    const value = this.output.content;
    this.value = value.substring(0, this.selStart)
      .concat(data)
      .concat(value.substring(this.selEnd));
    this.output.content = this.value;
    this.output.focus(this.selStart + data.length);
  }

  backspace() {
    this.updateCaretPosition();
    const value = this.output.content;
    if (this.hasSelection) this.selStart = Math.max(this.selStart - 1, 0);
    this.value = value.substring(0, this.selStart)
      .concat(value.substring(this.selEnd));
    this.output.content = this.value;
    this.output.focus(this.selStart);
  }

  delete() {
    this.updateCaretPosition();
    const value = this.output.content;
    if (this.hasSelection) this.selEnd = Math.min(this.selEnd + 1, value.length);
    this.value = value.substring(0, this.selStart)
      .concat(value.substring(this.selEnd));
    this.output.content = this.value;
    this.output.focus(this.selStart);
  }

  handleShift(isKeyup) {
    this.updateCaretPosition();
    this.state.handleShift(this.keys, isKeyup);
    this.output.focus(this.selStart, this.selEnd);
  }

  handleCaps() {
    this.updateCaretPosition();
    this.state.handleCaps(this.keys);
    this.output.focus(this.selStart, this.selEnd);
  }

  toNextLang() {
    this.updateCaretPosition();
    this.currentLangIndex = (this.currentLangIndex + 1) % this.langs.length;
    this.currentLang = this.langs[this.currentLangIndex];
    const config = this.keysConfig[this.currentLang];
    this.state.changeLang(config, this.keys);
    this.output.focus(this.selStart, this.selEnd);
  }

  updateCaretPosition() {
    [this.selStart, this.selEnd] = this.output.getCaretInfo();
    this.hasSelection = this.selStart === this.selEnd;
  }

  moveCursorVertically(direction) {
    this.updateCaretPosition();
    const selection = window.getSelection();
    selection.modify('move', direction, 'line');
    this.updateCaretPosition();
    this.output.focus(this.selStart);
  }

  moveCursorHorizontally(direction) {
    this.updateCaretPosition();
    this.selStart += direction;
    this.selStart = Math.max(this.selStart, 0);
    this.output.focus(this.selStart);
  }
}
