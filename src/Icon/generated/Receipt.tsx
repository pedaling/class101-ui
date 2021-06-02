import React from 'react';
import type { IconProps } from '../types';

export const Receipt = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style,
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24"><path d="M19 2a1 1 0 011 1v18a1 1 0 01-.528.882c-.325.173-.72.154-1.027-.05l-2.318-1.545-1.42 1.42c-.195.196-.451.293-.707.293s-.512-.097-.707-.293L12 20.414l-1.293 1.293a1 1 0 01-1.414 0l-1.42-1.42-2.318 1.545a1.005 1.005 0 01-1.027.05A1 1 0 014 21V3a1 1 0 011-1h14zm-1 17.132V4H6v15.132l1.445-.964a1 1 0 011.262.125L10 19.586l1.293-1.293a.997.997 0 011.414 0L14 19.586l1.293-1.293a1 1 0 011.262-.125l1.445.964zM9 6h6a1 1 0 110 2H9a1 1 0 110-2zm0 4h6a1 1 0 110 2H9a1 1 0 110-2zm0 4h6a1 1 0 110 2H9a1 1 0 110-2z" fill={fillColor} /></svg>);
