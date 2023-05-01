export default class KeyboardState {
  constructor(keyboard) {
    this.keyboard = keyboard;
    this.isShifted = false;
    this.isCapsed = false;
  }

  handleShift(keys) {
    this.isShifted = !this.isShifted;
    Object.values(keys).forEach((key) => key.shift());
  }

  handleCaps(keys) {
    this.isCapsed = !this.isCapsed;
    Object.values(keys).forEach((key) => key.changeCase());
    keys.CapsLock.toggle('key_capslock_on');
  }

  changeLang(config, keys) {
    Object.keys(config)
      .forEach((keyCode) => {
        keys[keyCode].changeLang(config[keyCode]);
        if (this.isCapsed) keys[keyCode].changeCase();
      });
  }
}
