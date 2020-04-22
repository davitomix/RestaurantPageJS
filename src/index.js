import './css/style.css';
import './img/bkg-1.jpg';
import './img/bkg-2.jpg';
import AboutObject from './about-page';

const AboutPage = AboutObject;

window.onload = function ready() {
  AboutPage.injectAboutPage();
  console.log('Initializing...');
  run();
};

const run = (() => {
  console.log('Running...');
});
