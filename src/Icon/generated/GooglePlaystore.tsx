import React from 'react';
import { IconProps } from '../index';
export const GooglePlaystore = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  accentColor = '#DDE0E2',
  className,
  style
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} style={style} className={className} viewBox="0 0 24 24"><path fill={fillColor} fillRule="evenodd" d="M4.033 21.26A1.016 1.016 0 014 21V3c0-.09.012-.178.033-.26l9.26 9.26-9.26 9.26zm.708.706L14 12.707l2.802 2.802L5.49 21.872a.986.986 0 01-.75.094zM16.8 8.491L14 11.293l-9.26-9.26a.986.986 0 01.75.095l11.312 6.363zm.906.51l3.783 2.127a1 1 0 010 1.744L17.707 15l-3-3 3-3z" /></svg>);