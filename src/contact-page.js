import DomObj from './dom-utils';
import ContactImg from './img/contact.jpg';

const ContactObject = (() => {
  const domMultiplexor = DomObj;
  let contents = null;
  
  const contactCtnr = document.createElement('address');
  contactCtnr.id = 'contact-container';

  const imgElem = document.createElement('img');
  imgElem.src = ContactImg;

  const header = document.createElement('h1');
  header.innerText = 'Contact';

  const email = document.createElement('div');
  email.className = 'email';
  email.innerHTML = '<a href="mailto:contact@malolarestaurant.com">contact@malolarestaurant.com</a>';

  const cellular = document.createElement('div'); 
  cellular.className = 'cell';
  cellular.innerHTML = 'Cell phone: <a href="tel:4433005440">555 555 5555</a>';

  const whats = document.createElement('div');
  whats.className = 'whats';
  whats.innerHTML = 'whatsapp: <a href="https://api.whatsapp.com/send?phone=+525555555555">+52 555 555 5555</a>';

  contactCtnr.appendChild(imgElem);
  contactCtnr.appendChild(header);
  contactCtnr.appendChild(email);
  contactCtnr.appendChild(cellular);
  contactCtnr.appendChild(whats);

  const getCtnr = () => {
    return [contactCtnr];
  };

  const injectContactPage = () => {
    contents = contents || getCtnr();
    domMultiplexor.setContent(contents);
  };

  return {
    injectContactPage
  };
})();

export default ContactObject;