export default class KeyboardState {
  constructor(keyboard) {
    this.keyboard = keyboard;
    this.isShifted = false;
    this.isCapsed = false;
  }

  resetShift(shiftKey) {
    shiftKey.toggle('key_on', this.isShifted);
  }

  handleShift(keys, isKeyup) {
    if (isKeyup && !this.isShifted) {
      this.resetShift(keys.ShiftLeft);
    } else {
      this.isShifted = !this.isShifted;
      keys.ShiftLeft.toggle('key_on');
      Object.values(keys).forEach((key) => key.shift());
    }
  }

  handleCaps(keys) {
    this.isCapsed = !this.isCapsed;
    keys.CapsLock.toggle('key_on');
    Object.values(keys).forEach((key) => key.changeCase());
  }

  changeLang(config, keys) {
    if (this.isShifted) {
      this.isShifted = false;
      this.resetShift(keys.ShiftLeft);
    }
    Object.keys(config)
      .forEach((keyCode) => {
        keys[keyCode].changeLang(config[keyCode]);
        if (this.isCapsed) keys[keyCode].changeCase();
      });
  }
}
