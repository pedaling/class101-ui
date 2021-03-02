import React from 'react';
import { IconProps } from '../index';
export const CheckCircle = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  accentColor = '#DDE0E2',
  className,
  style
}) => <svg width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 1c6.072 0 11 4.928 11 11s-4.928 11-11 11S1 18.072 1 12 5.928 1 12 1zm5.834 8.295l-7.5 7.5-4.167-4.167 1.175-1.175 2.992 2.984 6.325-6.326 1.175 1.184z" fill={fillColor} /></svg>);