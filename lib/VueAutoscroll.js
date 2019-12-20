const defaults = {
  always: false,
  smooth: true
};

const scrollToBottom = (el, smooth) => {
  el.scroll({
    top: el.scrollHeight,
    behavior: smooth
      ? 'smooth'
      : 'instant'
  });
};

const VueAutoscroll = {
  bind: (el, { value, modifiers }) => {
    let scrolled = false;
    let observeOptions = {
      childList: true,
      subtree: modifiers.deep
    };

    el.addEventListener('scroll', ({ target }) => {
      scrolled = target.scrollTop + target.clientHeight + 1 < target.scrollHeight;
    });

    el.autoScrollObserver = new MutationObserver(e => {
      const config = { ...defaults, ...value }
      const pause = config.always === false && scrolled;
      if (pause || e[e.length - 1].addedNodes.length != 1) {
        return;
      }
      scrollToBottom(el, config.smooth);
    });

    el.autoScrollObserver.observe(el, observeOptions);
  },
  unbind: (el) => {
    el.autoScrollObserver.disconnect()
  },
  inserted: scrollToBottom,
};

export default VueAutoscroll;
