import DomObj from './dom-utils';
import Injector from './content-injector';

const AboutObject = (() => {
  const domObject = DomObj;
  const injector = Injector;
  const set = () => {
    const divObj = domObject.div;
    injector.injecting();
  };

  return {
    set
  };
})();

export default AboutObject;