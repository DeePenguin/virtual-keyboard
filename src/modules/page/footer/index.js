import Element from '../../../common/element';
import './footer.scss';
import node from './footer.html';

const footer = new Element({
  parentNode: document.body,
  className: 'footer',
  tag: 'footer',
  content: node,
});

export default footer;
