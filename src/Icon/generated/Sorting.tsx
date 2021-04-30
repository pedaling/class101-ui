import React from 'react';
import { IconProps } from '../index';
export const Sorting = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  accentColor = '#DDE0E2',
  className,
  style
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} style={style} className={className} viewBox="0 0 24 24"><path d="M11.928 15.813l-1.45-1.4c-.1-.1-.25-.1-.35 0l-2.4 2.4V2.763c0-.15-.1-.25-.25-.25h-2c-.15 0-.25.1-.25.25v14.05l-2.4-2.4c-.1-.1-.25-.1-.35 0l-1.4 1.4c-.1.1-.1.25 0 .35l5.25 5.25c.1.1.25.1.35 0l5.25-5.25c.05-.05.05-.25 0-.35zm11-7.6l-1.45 1.4c-.1.1-.25.1-.35 0l-2.4-2.4v14.05c0 .15-.1.25-.25.25h-2c-.15 0-.25-.1-.25-.25V7.213l-2.4 2.4c-.1.1-.25.1-.35 0l-1.4-1.4c-.1-.1-.1-.25 0-.35l5.2-5.3c.1-.1.25-.1.35 0l5.25 5.25c.15.1.15.3.05.4z" /></svg>);