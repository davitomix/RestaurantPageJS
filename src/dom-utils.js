const DomObj = (() => {
  const qrySelect = document.querySelector.bind(document);
  const mainContainer = qrySelect('#content');
  const div = document.createElement('div');

  return {
    qrySelect,
    mainContainer,
    div
  };
})();

export default DomObj;