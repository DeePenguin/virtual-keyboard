import './main.scss';
import Element from '../../../common/element';
import Output from '../../output';
import info from './info';

const main = new Element({
  parentNode: document.body,
  className: 'main',
  tag: 'main',
});

const components = new Element({
  parentNode: main.node,
  className: 'components',
});

const output = new Output(components.node);

components.append(info.node);

export default main;
