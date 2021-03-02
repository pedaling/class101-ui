import React from 'react';
import { IconProps } from '../index';
export const Badge = React.memo<IconProps>(
  ({ size = 24, fillColor = '#1B1C1D', accentColor = '#DDE0E2', className, style }) => (
    <svg width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 20a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2H4zm5.406-5.536c-.087.467.213.667.67.446L12 13.984l1.923.926c.459.22.758.02.671-.446l-.367-1.962 1.556-1.39c.37-.33.255-.654-.257-.722l-2.15-.286-.961-1.785c-.23-.425-.6-.425-.83 0l-.962 1.785-2.15.286c-.511.068-.626.391-.256.722l1.556 1.39-.367 1.962z"
        fill={fillColor}
      />
    </svg>
  )
);
