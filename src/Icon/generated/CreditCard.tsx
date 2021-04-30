import React from 'react';
import { IconProps } from '../index';
export const CreditCard = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} fillRule="evenodd" style={style} className={className} viewBox="0 0 24 24"><path d="M4 12v6h16v-6H4zm0-4h16V6H4v2zM3 4h18c.667 0 1 .333 1 1v14c0 .667-.333 1-1 1H3c-.667 0-1-.333-1-1V5c0-.667.333-1 1-1zm3 10h4v2H6v-2z" /></svg>);