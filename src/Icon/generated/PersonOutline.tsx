import * as React from 'react';
import { IconProps } from '../index';
export default class SvgPersonOutline extends React.PureComponent<IconProps> {
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
        <path
          fill={this.props.fillColor}
          fillRule="evenodd"
          d="M18 21v-2c0-2.347-1.495-6-6-6s-6 3.653-6 6v2H4v-2c0-2.826 1.607-6.544 5.505-7.666A4.997 4.997 0 017 7c0-2.762 2.238-5 5-5 2.763 0 5 2.238 5 5a4.997 4.997 0 01-2.505 4.334C18.393 12.456 20 16.174 20 19v2h-2zm-6-11c1.658 0 3-1.342 3-3s-1.342-3-3-3-3 1.342-3 3 1.342 3 3 3z"
        />
      </svg>
    );
  }
}
