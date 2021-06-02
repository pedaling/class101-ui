function createUniqIDGenerator(prefix: string): () => string {
  let count = 0;
  return () => {
    count += 1;
    return `${prefix}${count}`;
  };
}

export default createUniqIDGenerator;
