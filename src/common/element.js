export default class Element {
  constructor({
    parentNode = null,
    tag = 'div',
    className = '',
    content = '',
  }) {
    const node = document.createElement(tag);
    node.className = className;
    node.innerHTML = content;
    if (parentNode) parentNode.append(node);
    this.node = node;
  }

  remove() {
    this.node.remove();
  }
}
