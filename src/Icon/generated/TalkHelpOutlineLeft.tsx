import React from 'react';
import { IconProps } from '../index';
export const TalkHelpOutlineLeft = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  accentColor = '#DDE0E2',
  className,
  style
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#1b1c1d" fillRule="evenodd" style={style} className={className} viewBox="0 0 24 24"><path d="M6.387 19.083l.685.45A8.95 8.95 0 0012 21a9 9 0 10-9-9 8.95 8.95 0 001.467 4.928l.449.685-.367 1.837 1.837-.368zM2 22l.795-3.975A10.95 10.95 0 011 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11a10.95 10.95 0 01-6.025-1.795L2 22zm11-4v-2h-2v2h2zM12 6a4 4 0 00-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 .879-.58 1.324-1.23 1.822C11.942 12.457 11 13.179 11 15h2c0-1.095.705-1.712 1.432-2.347l.009-.008C15.21 11.973 16 11.283 16 10a4 4 0 00-4-4z" /></svg>);