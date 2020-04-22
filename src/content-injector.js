const Injector = (() => {
  const injecting = () => {
    console.log('injecting content');
  };
  return {
    injecting
  };
})();

export default Injector;