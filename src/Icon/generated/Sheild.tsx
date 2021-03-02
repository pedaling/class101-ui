import React from 'react';
import { IconProps } from '../index';
export const Sheild = React.memo<IconProps>(
  ({ size = 24, fillColor = '#1B1C1D', accentColor = '#DDE0E2', className, style }) => (
    <svg width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 18c-3.307 0-6-2.693-6-6s2.693-6 6-6 6 2.693 6 6-2.693 6-6 6zm.073-16.5h-.146C9.729 3.337 6.549 4.5 3 4.5V12c0 7.524 9 10.5 9 10.5s9-3 9-10.5V4.5c-3.549 0-6.729-1.163-8.927-3zm.426 10.754l.251 1.996h-1.5l.25-1.996a1.124 1.124 0 01-.625-1.004 1.125 1.125 0 012.25 0c0 .441-.257.818-.626 1.004zM12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z"
        fill={fillColor}
      />
    </svg>
  )
);
