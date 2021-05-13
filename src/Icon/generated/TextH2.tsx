import React from 'react';
import type { IconProps } from '../types';
export const TextH2 = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox="0 0 24 24"><path d="M2.5 2h2v9h9V2h2v20h-2v-9h-9v9h-2V2z" /><path fillRule="evenodd" d="M20.251 13.75a1.5 1.5 0 00-1.499 1.493l-.003.76-1.5-.006.003-.76a3 3 0 012.999-2.987 3 3 0 012.999 2.999v.251c0 1.268-.626 2.436-1.72 3.53l-1.553 1.47H23.5V22h-6v-1.357l.277-.225.003-.002.01-.008.042-.035.165-.138.601-.517 1.871-1.748c.928-.928 1.28-1.738 1.28-2.47v-.251a1.5 1.5 0 00-1.499-1.499z" /></svg>);