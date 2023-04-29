import Element from '../../common/element';
import './output.scss';

export default class Output extends Element {
  constructor(parentNode) {
    super({
      tag: 'textarea',
      className: 'output',
      attributes: {
        placeholder: 'Type something...',
      },
    });
    this.value = '';
    this.node.autofocus = true;
    this.createContainerEl(parentNode);
    this.container.append(this.node);
    this.node.onkeydown = (e) => {
      e.preventDefault();
    };
  }

  createContainerEl(parentNode) {
    this.container = new Element({
      parentNode,
      className: 'output-container',
    });
  }

  get content() {
    return this.value;
  }

  set content(value) {
    this.value = value;
    this.node.value = this.value;
  }

  focus() {
    setTimeout(() => this.node.focus(), 0);
  }
}
