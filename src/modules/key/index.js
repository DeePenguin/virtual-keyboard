import Element from '../../common/element';
import './key.scss';

export default class Key extends Element {
  constructor(parentNode, config, fnDown, fnUp) {
    super({
      parentNode,
      tag: 'button',
      className: `key key_${config.code.toLowerCase()}`,
      attributes: {
        type: 'button',
        tabindex: '-1',
      },
    });
    this.config = config;
    this.data = this.config.key;
    this.symbol = this.config.symbol;
    this.type = this.config.type;
    this.shifted = this.config.shifted;
    this.actionDown = fnDown;
    this.actionUp = fnUp;
    this.isKeyPressed = false;
    this.isClicked = false;
    this.init();
  }

  init() {
    this.showContent();
    this.addListeners();
    this.setShiftedValue();
  }

  setShiftedValue() {
    if (!this.shifted && this.type === 'letter') {
      this.shifted = this.data.toUpperCase();
    }
  }

  showContent() {
    this.node.textContent = this.data;
  }

  changeLang(newConfig) {
    this.config = newConfig;
    this.type = newConfig.type;
    this.data = newConfig.key;
    this.shifted = newConfig.shifted;
    this.symbol = newConfig.symbol;
    this.setShiftedValue();
    this.showContent();
  }

  press() {
    this.node.classList.add('key_pressed');
    const data = this.symbol || this.data;
    this.actionDown(data);
  }

  unpress() {
    this.node.classList.remove('key_pressed');
    if (this.actionUp) this.actionUp();
  }

  handleDown() {
    if (!this.isClicked) {
      this.isKeyPressed = true;
      this.press();
    }
  }

  handleUp() {
    if (this.isKeyPressed) {
      this.isKeyPressed = false;
      this.unpress();
    }
  }

  changeCase() {
    if (this.type === 'letter') {
      [this.data, this.shifted] = [this.shifted, this.data];
      this.showContent();
    }
  }

  shift() {
    if (this.shifted) {
      [this.data, this.shifted] = [this.shifted, this.data];
      this.showContent();
    }
  }

  handlePointerDown = () => {
    if (!this.isKeyPressed) {
      this.isClicked = true;
      this.press();
    }
  };

  handlePointerUp = () => {
    if (this.isClicked) {
      this.isClicked = false;
      this.unpress();
    }
  };

  handlePointerLeave = () => {
    if (this.isClicked) {
      this.isClicked = false;
      this.unpress();
    }
  };

  addListeners() {
    this.node.onpointerdown = () => {
      if (!this.isKeyPressed) {
        this.isClicked = true;
        this.press();
      }
    };

    this.node.onpointerup = () => {
      if (this.isClicked) {
        this.isClicked = false;
        this.unpress();
      }
    };

    this.node.onpointerleave = () => {
      if (this.isClicked) {
        this.isClicked = false;
        this.unpress();
      }
    };
  }
}
