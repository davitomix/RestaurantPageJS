const qrySelect = document.querySelector.bind(document);
const mainContainer = qrySelect('#content');
const fragment = document.createDocumentFragment();

class DomObj {
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
}

export default DomObj;