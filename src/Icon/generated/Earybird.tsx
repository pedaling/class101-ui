import React from 'react';
import { IconProps } from '../index';
export const Earybird = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" d="M3 5.315h2.14C6.698 4.097 8.183 3.726 9.597 4.2c2.12.711 2.603 2.118 2.58 3.801v.895a9.542 9.542 0 008.057-4.056s3.581 8.057-4.476 11.638C17.601 17.73 19.773 18.089 22 18c-2 1-4 2-7 2C9 20 4 15.577 4 9a7.4 7.4 0 01.191-1.77A61.9 61.9 0 013 5.315z" fill={fillColor} /></svg>);