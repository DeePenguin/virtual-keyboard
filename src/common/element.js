export default class Element {
  constructor({
    parentNode = null,
    tag = 'div',
    className = '',
    content = '',
    attributes = {},
  }) {
    const node = document.createElement(tag);
    node.className = className;
    node.innerHTML = content;
    Object.entries(attributes).forEach(([prop, value]) => node.setAttribute(prop, value));
    if (parentNode) parentNode.append(node);
    this.node = node;
  }

  remove() {
    this.node.remove();
  }

  appendTo(parentNode) {
    parentNode.append(this.node);
  }

  append(...nodes) {
    this.node.append(...nodes);
  }
}
