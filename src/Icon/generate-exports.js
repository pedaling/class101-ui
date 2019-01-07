const fs = require('fs');
const path = require('path');

const files = fs.readdirSync(path.join(__dirname, 'generated'));
console.log(
  files
    .filter(f => f.includes('tsx'))
    .map(f => {
      const fileName = f.split('.')[0];
      return `export { default as ${fileName} } from './generated/${fileName}';`;
    })
    .join('\n')
);
