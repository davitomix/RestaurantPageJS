import './css/style.css';
import './img/bkg-1.jpg';
import AboutObject from './about-page';
import ContactObject from './contact-page';
import MenuObject from './menu-page';

const AboutPage = AboutObject;
const ContactPage = ContactObject;
const MenuPage = MenuObject;

window.onload = function ready() {
  AboutPage.injectAboutPage();
  console.log('Initializing...');
  run();
};

const run = (() => {
  ContactPage.injectContactPage();
  MenuPage.injectMenuPage();
  console.log('Running...');
});
