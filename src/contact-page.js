import DomObj from './dom-utils';
import ContactImg from './img/contact.jpg';

class ContactObject {  
  constructor() {
    this.contents = null;
    this.domMultiplexor = new DomObj();
    this.contactCtnr = document.createElement('address');
    this.imgElem = document.createElement('img');
    this.header = document.createElement('h1');
    this.email = document.createElement('div');
    this.cellular = document.createElement('div'); 
    this.whats = document.createElement('div');
    this.contactCtnr.id = 'contact-container';
    this.imgElem.src = ContactImg;
    this.header.innerText = 'Contact';

    this.email.className = 'email';
    this.email.innerHTML = '<a href="mailto:contact@bericburger.com">contact@bericburger.com</a>';

    this.cellular.className = 'cell';
    this.cellular.innerHTML = 'Cell phone: <a href="tel:4433005440">555 555 5555</a>';

    this.whats.className = 'whats';
    this.whats.innerHTML = 'Whatsapp: <a href="https://api.whatsapp.com/send?phone=+525555555555">+52 555 555 5555</a>';

    this.contactCtnr.appendChild(this.imgElem);
    this.contactCtnr.appendChild(this.header);
    this.contactCtnr.appendChild(this.email);
    this.contactCtnr.appendChild(this.cellular);
    this.contactCtnr.appendChild(this.whats);
  }

  getCtnr() {
    return [this.contactCtnr];
  }

  injectContactPage() {
    this.contents = this.contents || this.getCtnr();
    this.domMultiplexor.setContent(this.contents);
  };
};

export default ContactObject;