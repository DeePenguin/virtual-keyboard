import './app.scss';

import header from '../header';
import main from '../main';
import footer from '../footer';

export default class App {
  constructor() {
    this.header = header;
    this.main = main;
    this.footer = footer;
  }
}
