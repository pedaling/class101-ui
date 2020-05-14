import * as React from 'react';
import { IconProps } from '../index';
export default class SvgQuote extends React.PureComponent<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    fillColor: '#1B1C1D',
    accentColor: '#DDE0E2',
    size: 24,
  };

  public render() {
    return (
      <svg
        width={this.props.size}
        height={this.props.size}
        fill="none"
        style={this.props.style}
        className={this.props.className}
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M.899 14.526l.001.21C.9 17.75 3.239 20 6 20a5 5 0 100-10c-.244 0-.527.027-.717.1C5.706 8.243 6.518 6.317 8 4H5.5a28.473 28.473 0 00-2.932 4.28C1.613 9.97.9 12 .9 14.315c-.002.057-.002.12-.001.212zm12 0l.001.21C12.9 17.75 15.239 20 18 20a5 5 0 100-10c-.244 0-.527.027-.717.1C17.706 8.243 18.518 6.317 20 4h-2.5a28.466 28.466 0 00-2.932 4.28C13.613 9.97 12.9 12 12.9 14.315c-.002.057-.002.12-.001.212z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
