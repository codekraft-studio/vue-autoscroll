const scrollToBottom = (el, smooth) => {
  el.scroll({
    top: el.scrollHeight,
    behavior: smooth
      ? 'smooth'
      : 'instant'
  });
};

const VueAutoscroll = {
  bind: (el, binding) => {
    let scrolled = false;

    el.addEventListener('scroll', () => {
      scrolled = el.scrollTop + el.clientHeight + 1 < el.scrollHeight;
    });

    (new MutationObserver(e => {
      const config = binding.value || {smooth: true};
      const pause = config.always === false && scrolled;
      if (pause || e[e.length - 1].addedNodes.length != 1) {
        return;
      }
      scrollToBottom(el, config.smooth);
    })).observe(el, {childList: true});
  },
  inserted: scrollToBottom
};

export default VueAutoscroll;
