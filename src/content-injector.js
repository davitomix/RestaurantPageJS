const Injector = (() => {
  const injecting = () => {
    console.log('injecting content');
  };
  const injectAbout = (element) => {
    element.id = 'about-container';
    const subtitle = document.createElement('h2');
    subtitle.innerText = 'The best food in town! Sopa tarasca, Corundas, Enchiladas morelianas o placeras, Morisqueta, Carnitas, Aporreadillo, Uchepos, Chongos zamoranos, Ate, Nieve de pasta and much more...';
    element.appendChild(subtitle);
    return [element];
  };

  return {
    injecting,
    injectAbout
  };
})();

export default Injector;