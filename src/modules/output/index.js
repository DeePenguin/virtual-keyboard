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
    this.node.autofocus = true;
    this.createContainerEl(parentNode);
    this.container.append(this.node);
  }

  createContainerEl(parentNode) {
    this.container = new Element({
      parentNode,
      className: 'output-container',
    });
  }
}
