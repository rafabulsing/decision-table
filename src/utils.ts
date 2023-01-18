export function last<T extends unknown>(arr: T[]): T {
  return arr[arr.length - 1];
}
