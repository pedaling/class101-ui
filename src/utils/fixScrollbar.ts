import { isServer } from './ssr';

function fixScrollbar(): number {
  if (isServer()) {
    return 0;
  }
  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll';
  document.body.appendChild(outer);

  const inner = document.createElement('div');
  outer.appendChild(inner);

  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

  if (outer.parentNode) {
    outer.parentNode.removeChild(outer);
  }
  return scrollbarWidth;
}

export default fixScrollbar;
