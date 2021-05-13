import React from 'react';
import { IconProps } from '../index';
export const Apple = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} style={style} className={className} viewBox="0 0 24 24"><path fill={fillColor} fillRule="evenodd" d="M17.336 12.043c.028 3.003 2.635 4.003 2.664 4.016-.022.07-.417 1.424-1.373 2.822-.827 1.209-1.686 2.413-3.038 2.438-1.329.025-1.756-.788-3.276-.788s-1.994.763-3.251.813c-1.306.049-2.299-1.307-3.134-2.512-1.705-2.465-3.007-6.963-1.258-9.999.869-1.508 2.421-2.463 4.106-2.487 1.282-.024 2.492.862 3.276.862s2.253-1.067 3.799-.91c.647.027 2.464.261 3.63 1.968-.094.058-2.167 1.265-2.145 3.776m-2.498-7.374c.693-.839 1.16-2.007 1.033-3.169-.999.04-2.207.666-2.924 1.504-.642.743-1.205 1.931-1.053 3.07 1.113.086 2.251-.566 2.944-1.405" /></svg>);