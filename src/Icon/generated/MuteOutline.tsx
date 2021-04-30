import React from 'react';
import { IconProps } from '../index';
export const MuteOutline = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" d="M20 22.5l1.5-1.5L3 2.5 1.5 4l3 3H2a1 1 0 00-1 1v8a1 1 0 001 1h4l5.445 3.832A1 1 0 0013 20v-4.5l3.375 3.375a5.87 5.87 0 01-.571.145 1 1 0 10.392 1.961 7.91 7.91 0 001.726-.559L20 22.5zm-9-9L6.5 9H3v6h3.633L11 18.073V13.5z" /><path d="M23 12c0 2.255-.68 4.205-1.783 5.717L19.78 16.28C20.537 15.133 21 13.68 21 12c0-3.817-2.389-6.458-5.196-7.019a1 1 0 01.392-1.961C19.901 3.761 23 7.186 23 12zm-4 0c0 1.048-.21 2.012-.647 2.853l-1.531-1.531A4.61 4.61 0 0017 12c0-1.387-.486-2.455-1.555-3.168a1 1 0 011.109-1.664C18.225 8.282 19 9.987 19 12zm-6-8v5.5l-2-2V5.927l-.923.65-1.435-1.435 2.804-1.973A1 1 0 0113 4z" /></svg>);