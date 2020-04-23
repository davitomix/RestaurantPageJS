import './css/style.css';
import './img/bkg-1.jpg';
import AboutObject from './about-page';
import ContactObject from './contact-page';
import MenuObject from './menu-page';

const AboutPage = new AboutObject();
const ContactPage = new ContactObject();
const MenuPage = new MenuObject();
const domMultiplexor = new DomObj();

window.onload = function ready() {
  AboutPage.injectAboutPage();
  console.log('Initializing...');
  run();
};

const setMenuItemEventListener = (selector, contentsFn) => {
  domMultiplexor.getQrySelect(selector).addEventListener('click', contentsFn);
};

const run = (() => {
  // ContactPage.injectContactPage();
  MenuPage.injectMenuPage();
  // AboutPage.injectAboutPage();
  console.log('Hello World...');
});
