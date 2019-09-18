export function isClient() {
  return typeof window !== 'undefined' && window.document;
}

export function isServer() {
  return !isClient();
}
