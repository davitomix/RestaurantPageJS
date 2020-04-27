import './css/style.css';
import './img/bkg-1.jpg';
import AboutObject from './about-page';
import ContactObject from './contact-page';
import MenuObject from './menu-page';
import DomObj from './dom-utils';

const AboutPage = new AboutObject();
const ContactPage = new ContactObject();
const MenuPage = new MenuObject();
const DomMultiplexor = new DomObj();

window.onload = function ready() {
  AboutPage.injectAboutPage();
  console.log('Initializing...');
  run();
};

const setListenerTool = (selector, contentInjector) => {
  DomMultiplexor.qrySelector(selector).addEventListener('click', contentInjector);
};

const aboutContent = () => {
  AboutPage.injectAboutPage();
  console.log('about');
};

const contactContent = () => {
  ContactPage.injectContactPage();
  console.log('contact');
};

const dishesContent = () => {
  MenuPage.injectMenuPage();
  console.log('menu');
};

const run = (() => {
  console.log('Running...');
  setListenerTool('about', aboutContent);
  setListenerTool('contact', contactContent);
  setListenerTool('dishes', dishesContent);
});
