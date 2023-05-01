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
    this.selStart = 0;
    this.selEnd = 0;
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
    return this.node.value;
  }

  set content(value) {
    this.node.value = value;
  }

  focus(selStart, selEnd = selStart) {
    setTimeout(() => {
      this.node.focus();
      this.node.setSelectionRange(selStart, selEnd);
    }, 0);
  }

  getCaretInfo() {
    return [this.node.selectionStart, this.node.selectionEnd];
  }
}
