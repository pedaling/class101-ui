export function isClient(): boolean {
  return typeof window !== 'undefined' && !!window.document;
}

export function isServer(): boolean {
  return !isClient();
}
