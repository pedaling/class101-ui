export function lockScroll() {
  if (typeof document !== 'undefined') {
    document.body.classList.add('lock-scrolling');
  }
}

export function unlockScroll() {
  if (typeof document !== 'undefined') {
    document.body.classList.remove('lock-scrolling');
  }
}
