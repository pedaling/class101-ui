export default function defaultTo<T, TDefault>(value: T | null | undefined, defaultValue: TDefault): T | TDefault {
  return value == null || value !== value ? defaultValue : value;
}
