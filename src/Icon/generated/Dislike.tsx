import React from 'react';
import type { IconProps } from '../types';

export const Dislike = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style,
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" d="M2 12.32c0 .691.503 1.251 1.135 1.251h2.273V1H3.135C2.508 1 2 1.573 2 2.251V12.32zm11.361 2.508h6.366c1.255 0 2.272-1.126 2.272-2.514 0-.151-.012-.301-.037-.45l-1.616-9.832C20.25 1.435 19.779 1 19.23 1H7.681v12.571L11.089 23c1.704 0 2.84-1.257 2.84-3.143 0-1.257-.189-2.933-.568-5.028z" fill={fillColor} /></svg>);
