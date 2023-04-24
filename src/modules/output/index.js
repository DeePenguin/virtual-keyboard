import Element from '../../common/element';

export default class Output extends Element {
  constructor(parentNode) {
    super({ parentNode, tag: 'textarea', className: 'output' });
  }
}
