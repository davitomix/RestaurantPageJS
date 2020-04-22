const Injector = (() => {
  const injecting = () => {
    console.log('injecting content');
  };
  const injectContent = (element) => {
    element.id = 'about-container';
    const subtitle = document.createElement('h2');
    subtitle.innerText = 'The best food in town! Sopa tarasca, Corundas, Enchiladas morelianas o placeras, Morisqueta, Carnitas, Aporreadillo, Uchepos, Chongos zamoranos, Ate, Nieve de pasta and much more...';
    element.appendChild(subtitle);
    return [element];
  };
  
  return {
    injecting,
    injectContent
  };
})();

export default Injector;