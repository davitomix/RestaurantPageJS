import DomObj from './dom-utils';

let contents = null;

const domMultiplexor = new DomObj();
const aboutCtnr = document.createElement('div');
const subtitle = document.createElement('h2');

class AboutObject {
  constructor() {
    aboutCtnr.id = 'about-container';
    subtitle.innerText = 'About Page.';
    aboutCtnr.appendChild(subtitle);
  }

  injectAboutPage() {
    contents = contents || [aboutCtnr];
    domMultiplexor.setContent(contents);
  }
}

export default AboutObject;