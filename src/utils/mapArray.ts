export function mapArray<T, U>(
  array: T[] | ReadonlyArray<T>,
  callbackfn: (value: T, index: number, array: ReadonlyArray<T>) => U
) {
  return (array as T[]).map(callbackfn);
}
