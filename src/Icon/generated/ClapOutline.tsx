import React from 'react';
import { IconProps } from '../index';
export const ClapOutline = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" d="M10.782 5.457a1 1 0 01.792.289l5.094 5.094C17 9 18.169 7.709 19.509 7.709H22V14.5a3 3 0 01-.879 2.121l-4.991 5.015a3 3 0 01-4.238.004l-6.29-6.211a2 2 0 01-.235-2.583l4.685-6.97a1 1 0 01.732-.42zM11 8l-4 6 6.302 6.222a1 1 0 001.414 0l4.992-5.015A1 1 0 0020 14.5V9.709h-.491a1 1 0 00-.962.725l-.378 1.902L16.5 13.5 11 8z" /><path d="M7.369 5.492L7.81 6l-4.145 6.256a3 3 0 00.379 3.778L9.51 21.5a2.12 2.12 0 01-3 0l-4.191-4.191a4.5 4.5 0 01-.562-5.678l4.026-6.038a1 1 0 011.588-.1zM8 .5L8.5 4 6 2 8 .5zm2 0V4l2-3-2-.5zM13.5 2l-2 2.5 3-.5-1-2z" /><path fillRule="evenodd" d="M18.243 7a2 2 0 00-1.414.586l-.621.621-1.414-1.414.621-.621A4 4 0 0118.243 5H19v2h-.757z" /></svg>);