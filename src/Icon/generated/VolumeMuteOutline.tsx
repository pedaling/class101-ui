import React from 'react';
import { IconProps } from '../index';
export const VolumeMuteOutline = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  accentColor = '#DDE0E2',
  className,
  style
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#1b1c1d" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" d="M20.5 20L19 21.5l-6-6V20a1 1 0 01-1.555.832L5.697 17H2a1 1 0 01-1-1V8a1 1 0 011-1h2.5l-3-3L3 2.5 20.5 20zM3 9v6h3a1 1 0 01.555.168L11 18.132V13.5L6.411 8.911A1 1 0 016 9H3z" /><path d="M13 4v5.5l-2-2V5.869l-.979.653L8.579 5.08l2.866-1.911A1 1 0 0113 4zm10 8c0 2.219-.538 4.295-1.468 6.032l-1.49-1.49C20.649 15.213 21 13.663 21 12c0-3.012-1.151-5.654-2.897-7.283l1.576-1.261C21.714 5.481 23 8.568 23 12zm-4 0a8.998 8.998 0 01-.506 2.994l-1.625-1.625A7.16 7.16 0 0017 12c0-1.974-.793-3.708-2.003-4.798l1.578-1.262C18.065 7.412 19 9.589 19 12z" /></svg>);