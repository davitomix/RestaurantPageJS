import DomObj from './dom-utils';


const AboutObject = (() => {
  const domObject = DomObj;

  const set = () => {
    domObject.objPrint();
  };

  return {
    set
  };
})();

export default AboutObject;