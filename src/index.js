import './css/style.css';
import './img/bkg-1.jpg';
import AboutObject from './about-page';
import ContactObject from './contact-page';
import MenuObject from './menu-page';
import DomObj from './dom-utils';
import Fader from './fader';
import NavbarObject from './navbar-utils';


const DomMultiplexor = new DomObj();
const FaderObj = new Fader();
const AboutPage = new AboutObject();
const ContactPage = new ContactObject();
const MenuPage = new MenuObject();
const navBar = new NavbarObject();

let currentPage;
/* eslint-disable */
const swapContents = (injectorFunction, page) => {
  return () => {
    if (page !== currentPage) {
      FaderObj.fadeSwap(DomMultiplexor.getMainContainer(), injectorFunction, 42);
      currentPage = page;
    }
  };
};
/* eslint-enable */
const setListenerTool = (selector, contentInjector, page) => {
  DomMultiplexor.qrySelector(selector).addEventListener('click', swapContents(contentInjector, page));
};

const aboutContent = () => {
  AboutPage.injectAboutPage();
};

const contactContent = () => {
  ContactPage.injectContactPage();
};

const dishesContent = () => {
  MenuPage.injectMenuPage();
};

const run = (() => {
  setListenerTool('about', aboutContent, 1);
  setListenerTool('contact', contactContent, 2);
  setListenerTool('dishes', dishesContent, 3);

  FaderObj.fadeIn(document.getElementsByTagName('body')[0], 50);
});

window.onload = function ready() {
  navBar.injectNavbar();
  AboutPage.injectAboutPage();
  run();
};
