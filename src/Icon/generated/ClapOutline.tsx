import React from 'react';
import { IconProps } from '../index';
export const ClapOutline = React.memo<IconProps>(
  ({ size = 24, fillColor = '#1B1C1D', accentColor = '#DDE0E2', className, style }) => (
    <svg width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.782 5.457a1 1 0 01.793.29l5.094 5.093c.331-1.84 1.5-3.13 2.84-3.13H22v6.79a3 3 0 01-.879 2.121l-4.991 5.016a3 3 0 01-4.239.004l-6.29-6.212a2 2 0 01-.235-2.582l4.685-6.97a1 1 0 01.731-.42zM11 8l-4 6 6.302 6.222a1 1 0 001.414 0l4.991-5.015A1 1 0 0020 14.5V9.71h-.491a1 1 0 00-.962.724l-.378 1.902L16.5 13.5 11 8z"
        fill={fillColor}
      />
      <path
        d="M7.37 5.492L7.81 6l-4.146 6.256a3 3 0 00.38 3.778L9.509 21.5a2.121 2.121 0 01-3 0L2.32 17.31a4.5 4.5 0 01-.563-5.678L5.78 5.592a1 1 0 011.588-.1zM8 .5L8.5 4 6 2 8 .5zM10 .5V4l2-3-2-.5zM13.5 2l-2 2.5 3-.5-1-2z"
        fill={fillColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.243 7a2 2 0 00-1.415.586l-.62.621-1.415-1.414.621-.621A4 4 0 0118.243 5H19v2h-.757z"
        fill={fillColor}
      />
    </svg>
  )
);
