const DomObj = (() => {
  const qrySelect = document.querySelector.bind(document);
  const mainContainer = qrySelect('#content');
  const div = document.createElement('div');

  const setContent = (content) => {
    const fragment = document.createDocumentFragment();
    content.forEach(element => fragment.appendChild(element));
    clearContents(mainContainer);
    mainContainer.appendChild(fragment);
  };

  const clearContents = (container) => {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
  };
  
  return {
    qrySelect,
    mainContainer,
    div,
    setContent
  };
})();

export default DomObj;