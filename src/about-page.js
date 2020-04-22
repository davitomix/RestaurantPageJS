import DomObj from './dom-utils';
import Injector from './content-injector';

const AboutObject = (() => {
  const domObject = DomObj;
  const injector = Injector;
  
  const set = () => {
    let divObj = domObject.div;
    divObj = injector.injectContent(divObj);
    domObject.setContent(divObj);
  };

  return {
    set
  };
})();

export default AboutObject;