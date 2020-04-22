import DomObj from './dom-utils';

const AboutObject = (() => {
  let contents = null;
  const domMultiplexor = DomObj;
  const aboutCtnr = document.createElement('div');
  const subtitle = document.createElement('h2');
  aboutCtnr.id = 'about-container';
  subtitle.innerText = 'About Page.';
  aboutCtnr.appendChild(subtitle);

  const getCtnr = () => {
    return [aboutCtnr];
  };

  const injectAboutPage = () => {
    contents = contents || getCtnr();
    domMultiplexor.setContent(contents);
  };

  return {
    injectAboutPage
  };
})();

export default AboutObject;