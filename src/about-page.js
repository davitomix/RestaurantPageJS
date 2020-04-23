import DomObj from './dom-utils';

class AboutObject {
  constructor() {
    this.contents = null;
    this.domMultiplexor = new DomObj();
    this.aboutCtnr = document.createElement('div');
    this.subtitle = document.createElement('h2');
    this.aboutCtnr.id = 'about-container';
    this.subtitle.innerText = 'About Page.';
    this.aboutCtnr.appendChild(this.subtitle);
  }

  getCtnr() {
    return [this.aboutCtnr];
  }

  injectAboutPage() {
    this.contents = this.contents || this.getCtnr();
    this.domMultiplexor.setContent(this.contents);
  }
}

export default AboutObject;