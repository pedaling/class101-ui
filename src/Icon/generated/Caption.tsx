import React from 'react';
import type { IconProps } from '../types';

export const Caption = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style,
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox="0 0 24 24"><path d="M18.5 2v4h-2V4h-5v16h2v2h-6v-2h2V4h-5v2h-2V2h16zM22 14v1.5h-2.75v5h1.25V22h-4v-1.5h1.25v-5H15V14h7z" /></svg>);
