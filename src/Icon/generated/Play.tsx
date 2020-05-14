import * as React from 'react';
import { IconProps } from '../index';
export default class SvgPlay extends React.PureComponent<IconProps> {
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
          d="M6.498 3.135a1 1 0 01.998-.003l14 8a1 1 0 010 1.736l-14 8A1 1 0 016 20V4a1 1 0 01.498-.865z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
