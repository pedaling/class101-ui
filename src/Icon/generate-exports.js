const fs = require('fs');
const path = require('path');

const files = fs.readdirSync(path.join(__dirname, 'generated'));

const prependCode = `
import React from 'react';

export interface IconProps {
  size?: number;
  fillColor?: string;
  accentColor?: string;
  className?: string;
  style?: React.CSSProperties;
}
`;

const generatedForExportIconCode = files
  .filter(f => f.includes('tsx'))
  .map(f => {
    const fileName = f.split('.')[0];
    return `export { default as ${fileName} } from './generated/${fileName}';`;
  })
  .join('\n');

fs.writeFile(path.join(__dirname, 'index.ts'), [prependCode, generatedForExportIconCode].join('\n'), err => {
  if (err) throw err;
  console.log('The file has been saved!');
});
