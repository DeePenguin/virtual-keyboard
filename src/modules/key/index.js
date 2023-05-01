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
    this.repeat = this.config.repeat;
    this.actionDown = fnDown;
    this.actionUp = fnUp;
    this.isKeyPressed = false;
    this.isClicked = false;
    this.init();
  }

  init() {
    if (this.config.style) this.node.classList.add('key_special');
    if (this.config.icon) {
      this.node.classList.add('key_icon');
      this.node.append(new Element({
        tag: 'span',
        className: 'icon material-symbols-rounded',
        content: this.config.icon,
      }).node);
    }
    this.content = new Element({
      parentNode: this.node,
      tag: 'span',
      className: 'key-text',
    }).node;
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
    this.content.textContent = this.data;
  }

  changeLang(newConfig) {
    this.config = newConfig;
    this.type = newConfig.type;
    this.data = newConfig.key;
    this.shifted = newConfig.shifted;
    this.symbol = newConfig.symbol;
    this.repeat = newConfig.repeat;
    this.setShiftedValue();
    this.showContent();
  }

  press() {
    this.node.classList.add('key_pressed');
    const data = this.symbol ?? this.data;
    this.actionDown(data);
  }

  unpress() {
    this.node.classList.remove('key_pressed');
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
      if (this.actionUp) this.actionUp();
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

  toggle(className, state) {
    this.node.classList.toggle(className, state);
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
