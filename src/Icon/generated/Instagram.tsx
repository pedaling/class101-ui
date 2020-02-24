import * as React from 'react';
import { IconProps } from '../index';
export default class SvgInstagram extends React.PureComponent<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    fillColor: '#3E4042',
    accentColor: '#DDE0E2',
    size: 24,
  };

  public render() {
    return (
      <svg
        width={this.props.size}
        height={this.props.size}
        style={this.props.style}
        className={this.props.className}
        viewBox="0 0 24 24"
      >
        <defs>
          <path
            id="Instagram_svg__a"
            d="M12 3c2.444 0 2.75.01 3.71.054.959.044 1.613.196 2.185.419.592.23 1.094.537 1.594 1.038.5.5.809 1.002 1.039 1.594.222.572.374 1.226.418 2.184C20.99 9.25 21 9.556 21 12s-.01 2.75-.054 3.71c-.044.959-.196 1.613-.418 2.185a4.412 4.412 0 01-1.039 1.594c-.5.5-1.002.809-1.594 1.039-.572.222-1.226.374-2.184.418-.96.044-1.267.054-3.711.054s-2.75-.01-3.71-.054c-.959-.044-1.613-.196-2.185-.418a4.412 4.412 0 01-1.594-1.039c-.5-.5-.809-1.002-1.038-1.594-.223-.572-.375-1.226-.419-2.184C3.01 14.75 3 14.444 3 12s.01-2.75.054-3.71c.044-.959.196-1.613.419-2.185A4.411 4.411 0 014.51 4.51c.5-.5 1.002-.809 1.594-1.038.572-.223 1.226-.375 2.184-.419C9.25 3.01 9.556 3 12 3zm0 1.622c-2.403 0-2.688.009-3.637.052-.877.04-1.354.187-1.67.31-.421.163-.72.358-1.036.673-.315.315-.51.615-.673 1.035-.123.317-.27.794-.31 1.671-.043.95-.052 1.234-.052 3.637s.009 2.688.052 3.637c.04.877.187 1.354.31 1.67.163.421.358.72.673 1.036.315.315.615.51 1.035.673.317.123.794.27 1.671.31.95.043 1.234.052 3.637.052s2.688-.009 3.637-.052c.877-.04 1.354-.187 1.67-.31.421-.163.72-.358 1.036-.673.315-.315.51-.615.673-1.035.123-.317.27-.794.31-1.671.043-.95.052-1.234.052-3.637s-.009-2.688-.052-3.637c-.04-.877-.187-1.354-.31-1.67a2.788 2.788 0 00-.673-1.036 2.788 2.788 0 00-1.035-.673c-.317-.123-.794-.27-1.671-.31-.95-.043-1.234-.052-3.637-.052zM12 15a3 3 0 100-6 3 3 0 000 6zm0-7.622a4.622 4.622 0 110 9.244 4.622 4.622 0 010-9.244zm5.884-.182a1.08 1.08 0 11-2.16 0 1.08 1.08 0 012.16 0z"
          />
        </defs>
        <use fill={this.props.fillColor} fillRule="evenodd" xlinkHref="#Instagram_svg__a" />
      </svg>
    );
  }
}
