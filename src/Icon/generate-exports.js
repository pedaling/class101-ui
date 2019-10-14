const fs = require('fs');
const path = require('path');

const files = fs.readdirSync(path.join(__dirname, 'generated'));

const prependCode = `
import React from 'react';
`;

const indexCode = `
interface IconProps {
  size?: number;
  fillColor?: string;
  accentColor?: string;
  className?: string;
  style?: React.CSSProperties;
}

import * as Icon from './generated';

export { Icon, IconProps };
`;

const generatedForExportIconCode = files
  .filter(f => f.includes('tsx'))
  .map(f => {
    const fileName = f.split('.')[0];
    return `export { default as ${fileName} } from './${fileName}';`;
  })
  .join('\n');

fs.writeFile(path.join(__dirname, 'generated', 'index.ts'), [generatedForExportIconCode].join('\n'), err => {
  if (err) throw err;
  console.log('The generated icons index file has been saved!');
});

fs.writeFile(path.join(__dirname, 'index.ts'), [indexCode].join('\n'), err => {
  if (err) throw err;
  console.log('The index file has been saved!');
});
