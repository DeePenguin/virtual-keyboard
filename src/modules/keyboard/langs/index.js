import keysMapRu from './ru';
import keysMapEn from './en';

const langs = {
  options: {
    ru: keysMapRu,
    en: keysMapEn,
  },
  getLangs() {
    return Object.keys(this.options);
  },
};

export default langs;
