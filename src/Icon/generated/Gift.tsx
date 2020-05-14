import * as React from 'react';
import { IconProps } from '../index';
export default class SvgGift extends React.PureComponent<IconProps> {
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
          d="M13 6h-2v4H3a1 1 0 01-1-1V7a1 1 0 011-1h3.337A3.5 3.5 0 0112 2.05 3.5 3.5 0 0117.663 6H21a1 1 0 011 1v2a1 1 0 01-1 1h-8V6zm-2.085-2c.055.156.085.325.085.5V6H9.5A1.498 1.498 0 018 4.5a1.5 1.5 0 012.915-.5zM13 6V4.5A1.497 1.497 0 0114.5 3a1.5 1.5 0 010 3H13z"
          fill={this.props.fillColor}
        />
        <path d="M11 12H3v8a1 1 0 001 1h7v-9zM13 21h7a1 1 0 001-1v-8h-8v9z" fill={this.props.fillColor} />
      </svg>
    );
  }
}
