import { useEffect } from 'react';

const UseCursorHover = (selector, onEnter, onLeave) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });
    return () => {
      elements.forEach(el => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, [selector, onEnter, onLeave]);
};

export default UseCursorHover;