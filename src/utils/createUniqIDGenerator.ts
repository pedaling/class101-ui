export function createUniqIDGenerator(prefix: string) {
  let count = 0;
  return () => {
    count = count + 1;
    return `${prefix}${count}`;
  };
}
