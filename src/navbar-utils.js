
class NavbarObject {
  constructor() {
    this.navbarCont = document.createElement('div');
    this.navbarCont.id = 'header';
    this.title = document.createElement('h1');
    this.title.innerText = 'Atlantic Burger';
    this.navBar = document.createElement('nav');
    this.menuCont = document.createElement('div');
    this.menuCont.id = 'menu';
    this.aboutCont = document.createElement('div');
    this.aboutCont.id = 'about';
    this.aboutCont.classList.add('item');
    this.aboutCont.innerText = 'About';
    this.dishesCont = document.createElement('div');
    this.dishesCont.id = 'dishes';
    this.dishesCont.classList.add('item');
    this.dishesCont.innerText = 'Menu';
    this.contactCont = document.createElement('div');
    this.contactCont.id = 'contact';
    this.contactCont.classList.add('item');
    this.contactCont.innerText = 'Contact';

    this.contentCont = document.getElementById('content');
    this.bodyCont = document.getElementById('body');
  }

  injectNavbar() {
    this.bodyCont.removeChild(this.contentCont);
    this.menuCont.appendChild(this.aboutCont);
    this.menuCont.appendChild(this.dishesCont);
    this.menuCont.appendChild(this.contactCont);
    this.navBar.appendChild(this.menuCont);
    this.navbarCont.appendChild(this.title);
    this.navbarCont.appendChild(this.navBar);
    this.bodyCont.appendChild(this.navbarCont);
    this.bodyCont.appendChild(this.contentCont);
  }
}

export default NavbarObject;