import React from 'react';
import { IconProps } from '../index';
export const EditOutline = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  accentColor = '#DDE0E2',
  className,
  style
}) => <svg width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M13.5 7.914l-8.5 8.5V19h2.586l8.5-8.5L13.5 7.914zM14.914 6.5L17.5 9.086l.793-.793a1.829 1.829 0 00-2.586-2.586l-.793.793zM4 21a1 1 0 01-1-1v-4a1 1 0 01.293-.707l11-11a3.828 3.828 0 115.414 5.414l-11 11A1 1 0 018 21H4z" fill={fillColor} /></svg>);