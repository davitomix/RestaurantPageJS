import DomObj from './dom-utils';

class AboutObject {
  constructor() {
    this.contents = null;
    this.domMultiplexor = new DomObj();
    this.aboutCtnr = document.createElement('div');
    this.subtitle = document.createElement('h2');
    this.aboutCtnr.id = 'about-container';
    this.subtitle.innerText = "Meditation palo santo marfa cornhole brunch street art, chia copper mug jianbing heirloom asymmetrical cred kale chips direct trade. Vexillologist beard wayfarers franzen, whatever shaman four loko stumptown austin blue bottle craft beer snackwave knausgaard direct trade. Vape shabby chic cold-pressed fanny pack, scenester glossier hammock gastropub ethical cronut banh mi synth messenger bag. Normcore street art echo park green juice master cleanse blog. Tumblr farm-to-table vaporware fanny pack palo santo bicycle rights chartreuse artisan plaid tilde";
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