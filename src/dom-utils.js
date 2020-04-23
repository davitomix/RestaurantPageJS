const qrySelect;
const mainContainer = qrySelect('#content');
const fragment = document.createDocumentFragment();

class DomObj {
  constructor() {
    qrySelect = document.querySelector.bind(document)
  }

  setContent(content) {
    content.forEach(element => fragment.appendChild(element));
    this.clearContent(mainContainer);
    mainContainer.appendChild(fragment);
  }

  clearContent(container) {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
  }

  getQrySelect(document) {
    return this.qrySelect(document);
  }
}

export default DomObj;