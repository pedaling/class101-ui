let generateCount = 0;

export default function generateID(prefix = '') {
  generateCount = generateCount + 1;
  return `${prefix}${generateCount}`;
}
