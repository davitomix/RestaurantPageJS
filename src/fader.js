class Fader {
  fade(element, delay = 100, start = 0, stop = 10, delta = 1) {
    (function f() {
      start += delta;
      element.style.opacity = start / 10.0;
      if (start !== stop) {
        setTimeout(f, delay);
      }
    }());
  }

  fadeIn(element, step = 100) {
    this.fade(element, step);
  }

  fadeSwap(element, callback, delay = 100) {
    let start = 10;
    let delta = -1;
    (function f() {
      start += delta;
      element.style.opacity = start / 10.0;
      if (start === 0) {
        callback();
        delta = 1;
      }
      if (start < 10) {
        setTimeout(f, delay);
      }
    }());
  }
}

export default Fader;