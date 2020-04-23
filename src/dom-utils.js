class DomObj {
  constructor() {
    this.qrySelect = document.querySelector.bind(document);
    this.mainContainer = this.qrySelect('#content');
    this.fragment = document.createDocumentFragment();
  }

  setContent(content) {
    content.forEach(element => this.fragment.appendChild(element));
    this.clearContent(this.mainContainer);
    this.mainContainer.appendChild(this.fragment);
  }

  clearContent(container) {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
  }
}

export default DomObj;