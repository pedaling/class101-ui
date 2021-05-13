import React from 'react';
import { IconProps } from '../index';
export const PlayOutline = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" d="M18.984 12L8 5.723v12.554L18.984 12zM7.496 3.132A1 1 0 006 4v16a1 1 0 001.496.868l14-8a1 1 0 000-1.736l-14-8z" fill={fillColor} /></svg>);