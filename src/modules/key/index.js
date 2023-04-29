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
    this.actionDown = fnDown;
    this.actionUp = fnUp;
    this.showContent();
    this.addListeners();
  }

  showContent() {
    this.node.textContent = this.data;
  }

  changeLanguage(newConfig) {
    this.config = newConfig;
  }

  press() {
    this.node.classList.add('key_pressed');
  }

  unpress() {
    this.node.classList.remove('key_pressed');
  }

  handleDown() {
    const data = this.symbol || this.data;
    this.press();
    this.actionDown(data);
  }

  handleUp() {
    this.unpress();
    if (this.actionUp) this.actionUp();
  }

  shift() {
    if (this.type === 'letter') this.data = this.data.toUpperCase();
    else if (this.type === 'symbol' && this.config.shifted) this.data = this.config.shifted;
    this.showContent();
  }

  addListeners() {
    this.node.onpointerdown = () => {
      this.isClicked = true;
      this.handleDown();
    };

    this.node.onpointerup = () => {
      this.isClicked = false;
      this.handleUp();
    };

    this.node.onpointerleave = () => {
      if (this.isClicked) {
        this.isClicked = false;
        this.handleUp();
      }
    };
  }
}
