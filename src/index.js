import './css/style.css';
import './img/bkg-1.jpg';
import './img/bkg-2.jpg';
import AboutObj from './about-page';

const AboutPage = AboutObj;

let currentPage;

const run = (() => {
  AboutPage.populateHomePage();
})();
