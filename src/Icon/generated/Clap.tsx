import React from 'react';
import type { IconProps } from '../types';

export const Clap = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style,
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M10.126 5.855a.986.986 0 011.467-.089l.832.82 5.586 5.586 1.262-3.51a1 1 0 01.94-.662h1.797v7a2 2 0 01-.586 1.414l-6 6a2 2 0 01-2.828 0l-7-7a2 2 0 01-.25-2.524l4-6c.153-.23.476-.65.78-1.035z" />
    <path d="M20.033 6.996V6h-2.307a1 1 0 00-.941.662l-.776 1.725 1.418 1.418.835-2.167a1 1 0 01.93-.64l.84-.002zM7.369 5.492L7.81 6l-4.145 6.256a3 3 0 00.379 3.778L9.51 21.5a2.12 2.12 0 01-3 0l-4.191-4.191a4.5 4.5 0 01-.562-5.678l4.026-6.038a1 1 0 011.588-.1zM8 .5L8.5 4 6 2 8 .5zm2 0V4l2-3-2-.5zM13.5 2l-2 2.5 3-.5-1-2z" />
  </svg>
));
