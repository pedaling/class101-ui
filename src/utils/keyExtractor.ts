type Item = any;

export function keyExtractor(item: Item, index: number, extractor?: (item: Item, index: number) => string) {
  if (extractor != null) {
    const key = extractor(item, index);
    if (key != null) {
      return key;
    }
  }
  if (item.key != null) {
    return item.key;
  }
  if (item.id != null) {
    return item.id;
  }
  return String(index);
}
