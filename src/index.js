import './css/style.css';
import './img/bkg-1.jpg';
import AboutObject from './about-page';
import ContactObject from './contact-page';
import MenuObject from './menu-page';
import DomObj from './dom-utils';
import Fader from './fader';

const AboutPage = new AboutObject();
const ContactPage = new ContactObject();
const MenuPage = new MenuObject();
const DomMultiplexor = new DomObj();
const FaderObj = new Fader();

let currentPage;

window.onload = function ready() {
  AboutPage.injectAboutPage();
  console.log('Initializing...');
  run();
};

const swapContents = (injectorFunction, page) => {
  return () => {
    if (page !== currentPage) {
      FaderObj.fadeSwap(DomMultiplexor.getMainContainer(), injectorFunction, 42);
      currentPage = page;
    }
  };
}

const setListenerTool = (selector, contentInjector, page) => {
  DomMultiplexor.qrySelector(selector).addEventListener('click', swapContents(contentInjector, page));
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
  setListenerTool('about', aboutContent, 1);
  setListenerTool('contact', contactContent, 2);
  setListenerTool('dishes', dishesContent, 3);

  FaderObj.fadeIn(document.getElementsByTagName('body')[0], 50);
});
