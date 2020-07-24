import React from 'react';
import { IconProps } from '../index';
export const Paper3 = React.memo<IconProps>(
  ({ size = 24, fillColor = '#1B1C1D', accentColor = '#DDE0E2', className, style }) => (
    <svg width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24">
      <path
        d="M17.083 1.916a.268.268 0 00-.249-.25H3.166a.268.268 0 00-.25.25v16.168c0 .125.125.25.25.25h8.309a.377.377 0 00.29-.125l5.152-5.154a.378.378 0 00.125-.291V1.916h.041zm-5.816 10.765v3.533H5.035V3.744h9.971v8.73h-3.531c-.125 0-.208.082-.208.207z"
        fill={fillColor}
      />
      <path
        d="M12.721 7.693h-5.4c-.125 0-.208-.083-.208-.207v-.832c0-.124.083-.208.207-.208h5.401c.125 0 .208.084.208.208v.832c0 .124-.083.207-.208.207zM12.721 10.603h-5.4c-.125 0-.208-.083-.208-.208v-.831c0-.125.083-.208.207-.208h5.401c.125 0 .208.083.208.208v.83c0 .126-.083.209-.208.209z"
        fill={fillColor}
      />
    </svg>
  )
);
