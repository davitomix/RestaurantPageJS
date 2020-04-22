const DomObj = (() => {
  const qrySelect = document.querySelector.bind(document);
  const mainContainer = qrySelect('#content');

  const setContent = (content) => {
    const fragment = document.createDocumentFragment();
    content.forEach(element => fragment.appendChild(element));
    clearContent(mainContainer);
    mainContainer.appendChild(fragment);
  };

  const clearContent = (container) => {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
  };
  
  return {
    qrySelect,
    mainContainer,
    setContent
  };
})();

export default DomObj;