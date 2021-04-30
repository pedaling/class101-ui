import React from 'react';
import { IconProps } from '../index';
export const NaverTalk = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  accentColor = '#DDE0E2',
  className,
  style
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} style={style} className={className} viewBox="0 0 24 24"><path fill="#1b1c1d" fillRule="evenodd" d="M4.983 3.5H17.38a1.19 1.19 0 01.747.263l2.43 1.958a1.19 1.19 0 01.443.927v9.744a1.983 1.983 0 01-1.983 1.983h-8.41c-.837 0-1.64.331-2.234.92l-1.939 1.923a.99.99 0 01-1.325.065l-1.962-1.599a.397.397 0 01-.146-.308V5.483A1.98 1.98 0 014.983 3.5zm.303.694a1.59 1.59 0 00-1.587 1.587l.002 13.314a.198.198 0 00.342.135l1.246-1.324a5.365 5.365 0 013.908-1.689h7.715c.876 0 1.587-.71 1.587-1.587V5.781c0-.876-.71-1.587-1.587-1.587H5.287zM7.75 7.863a.95.95 0 01.95.95v2.364a.95.95 0 01-1.9 0V8.813a.95.95 0 01.95-.95zm6.6 0a.95.95 0 01.95.95v2.364a.95.95 0 11-1.9 0V8.813a.95.95 0 01.95-.95z" /></svg>);