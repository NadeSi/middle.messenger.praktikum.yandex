export function formatList<S, T>(list: S[], format: (item: S) => T): T[] {
  return list.map(format);
}
