export default function padNumber(value: number, digits: number): string {
  return value.toString().padStart(digits, '0');
}
