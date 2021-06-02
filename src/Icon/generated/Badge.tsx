import React from 'react';
import type { IconProps } from '../types';

export const Badge = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style,
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" d="M4 20a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2H4zm5.406-5.536c-.087.467.213.667.671.446L12 13.984l1.924.926c.458.221.758.021.671-.446l-.367-1.962 1.556-1.39c.37-.331.255-.654-.256-.722l-2.15-.286-.962-1.785c-.229-.425-.6-.425-.829 0l-.962 1.785-2.15.286c-.512.068-.627.391-.256.722l1.556 1.39-.368 1.962z" fill={fillColor} /></svg>);
