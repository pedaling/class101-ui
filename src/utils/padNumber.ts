export default function padNumber(value: number, digits: number) {
  return value.toString().padStart(digits, '0');
}
