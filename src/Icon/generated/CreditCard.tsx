import React from 'react';
import { IconProps } from '../index';
export const CreditCard = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  accentColor = '#DDE0E2',
  className,
  style
}) => <svg width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M4 12v6h16v-6H4zm0-4h16V6H4v2zM3 4h18c.667 0 1 .333 1 1v14c0 .667-.333 1-1 1H3c-.667 0-1-.333-1-1V5c0-.667.333-1 1-1z" fill={fillColor} /><path fillRule="evenodd" clipRule="evenodd" d="M6 14h4v2H6v-2z" fill={fillColor} /></svg>);