import Element from '../../../common/element';
import './header.scss';
import node from './header.html';

const header = new Element({
  parentNode: document.body,
  className: 'header',
  tag: 'header',
  content: node,
});

export default header;
