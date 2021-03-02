import React from 'react';
import { IconProps } from '../index';
export const Home = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  accentColor = '#DDE0E2',
  className,
  style
}) => <svg width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M1 11.5L2.5 13l1-.947V21H11v-4h2v4h7.5v-8.947l1 .947 1.5-1.5L12 1 1 11.5zm17.5-1.342L12 4l-6.5 6.158V19H9v-3a1 1 0 011-1h4a1 1 0 011 1v3h3.5v-8.842z" fill={fillColor} /></svg>);