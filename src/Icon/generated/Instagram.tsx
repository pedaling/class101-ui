import React from 'react';
import type { IconProps } from '../types';

export const Instagram = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style,
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={size} height={size} style={style} className={className} viewBox="0 0 24 24">
    <defs><path id="Instagram_svg__a" d="M12 3l3.711.054c.958.044 1.612.196 2.185.418A4.41 4.41 0 0119.49 4.51a4.41 4.41 0 011.038 1.594c.222.572.375 1.227.418 2.185L21 12l-.054 3.711c-.044.958-.196 1.612-.418 2.185a4.41 4.41 0 01-1.038 1.594 4.41 4.41 0 01-1.594 1.038c-.572.222-1.227.375-2.185.418L12 21c-2.444 0-2.751-.01-3.711-.054s-1.612-.196-2.185-.418A4.41 4.41 0 014.51 19.49a4.41 4.41 0 01-1.038-1.594c-.222-.572-.375-1.227-.418-2.185L3 12l.054-3.711c.044-.958.196-1.612.418-2.185A4.41 4.41 0 014.51 4.51a4.41 4.41 0 011.594-1.038c.572-.222 1.227-.375 2.185-.418L12 3zm0 1.622l-3.637.052c-.877.04-1.354.187-1.671.31-.42.163-.72.358-1.035.673s-.51.615-.673 1.035c-.123.317-.27.794-.31 1.671L4.622 12l.052 3.637c.04.877.187 1.354.31 1.671.163.42.358.72.673 1.035s.615.51 1.035.673c.317.123.794.27 1.671.31l3.637.052 3.637-.052c.877-.04 1.354-.187 1.671-.31.42-.163.72-.358 1.035-.673s.51-.615.673-1.035c.123-.317.27-.794.31-1.671L19.378 12l-.052-3.637c-.04-.877-.187-1.354-.31-1.671-.163-.42-.358-.72-.673-1.035s-.615-.51-1.035-.673c-.317-.123-.794-.27-1.671-.31L12 4.622zM12 15a3 3 0 100-6 3 3 0 100 6zm0-7.622a4.622 4.622 0 110 9.244 4.622 4.622 0 010-9.244zm5.884-.183a1.08 1.08 0 11-2.16 0 1.08 1.08 0 112.16 0z" /></defs>
    <use fill={fillColor} fillRule="evenodd" xlinkHref="#Instagram_svg__a" />
  </svg>
));
