import DomObj from './dom-utils';
import ContactImg from './img/contact.jpg';

let contents = null;

const domMultiplexor = new DomObj();
const contactCtnr = document.createElement('address');
const imgElem = document.createElement('img');
const header = document.createElement('h1');
const email = document.createElement('div');
const cellular = document.createElement('div'); 
const whats = document.createElement('div');

class ContactObject {  
  constructor() {
    contactCtnr.id = 'contact-container';
    imgElem.src = ContactImg;
    header.innerText = 'Contact';

    email.className = 'email';
    email.innerHTML = '<a href="mailto:contact@malolarestaurant.com">contact@malolarestaurant.com</a>';

    cellular.className = 'cell';
    cellular.innerHTML = 'Cell phone: <a href="tel:4433005440">555 555 5555</a>';

    whats.className = 'whats';
    whats.innerHTML = 'whatsapp: <a href="https://api.whatsapp.com/send?phone=+525555555555">+52 555 555 5555</a>';

    contactCtnr.appendChild(imgElem);
    contactCtnr.appendChild(header);
    contactCtnr.appendChild(email);
    contactCtnr.appendChild(cellular);
    contactCtnr.appendChild(whats);
  }

  injectContactPage() {
    contents = contents || [contactCtnr];
    domMultiplexor.setContent(contents);
  };
};

export default ContactObject;