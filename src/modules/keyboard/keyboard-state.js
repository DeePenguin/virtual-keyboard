export default class KeyboardState {
  constructor(keyboard) {
    this.keyboard = keyboard;
    this.isShifted = false;
    this.isCapsed = false;
  }

  handleShift(keys) {
    this.isShifted = !this.isShifted;
    console.log(this);
  }

  handleCaps(keys) {
    this.isCapsed = !this.isCapsed;
    console.log(this);
  }
}
