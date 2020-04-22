import './css/style.css';
import './img/bkg-1.jpg';
import AboutObject from './about-page';
import ContactObject from './contact-page';

const AboutPage = AboutObject;
const ContactPage = ContactObject;

window.onload = function ready() {
  AboutPage.injectAboutPage();
  console.log('Initializing...');
  run();
};

const run = (() => {
  ContactPage.injectContactPage();
  console.log('Running...');
});
