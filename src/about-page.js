import DomObj from './dom-utils';

const AboutObject = (() => {
const domObject = DomObj;

  const prints = () => {
    domObject.prints();
  };

  return {
    prints
  };
})();

export default AboutObject;