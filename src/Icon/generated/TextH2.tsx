import React from 'react';
import { IconProps } from '../index';
export const TextH2 = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  accentColor = '#DDE0E2',
  className,
  style
}) => <svg width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" style={style} className={className} viewBox="0 0 24 24"><path d="M2.5 2h2v9h9V2h2v20h-2v-9h-9v9h-2V2z" fill={fillColor} /><path fillRule="evenodd" clipRule="evenodd" d="M20.251 13.75c-.825 0-1.495.668-1.498 1.493l-.003.76-1.5-.006.003-.76a2.999 2.999 0 015.997.012v.25c0 1.269-.626 2.437-1.72 3.531a40.52 40.52 0 01-1.553 1.47H23.5V22h-6v-1.357l.277-.225.003-.002.01-.009.043-.035.165-.137a40.044 40.044 0 002.472-2.265c.928-.929 1.28-1.738 1.28-2.47v-.25a1.5 1.5 0 00-1.499-1.5z" fill={fillColor} /></svg>);