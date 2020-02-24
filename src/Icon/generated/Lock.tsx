import * as React from 'react';
import { IconProps } from '../index';
export default class SvgLock extends React.PureComponent<IconProps> {
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
        fill="none"
        style={this.props.style}
        className={this.props.className}
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6 10V7a6 6 0 1112 0v3h1c.667 0 1 .333 1 1v10c0 .667-.333 1-1 1H5c-.667 0-1-.333-1-1V11c0-.667.333-1 1-1h1zm2 0h8V7a4 4 0 00-8 0v3zm3 6.732V18a1 1 0 102 0v-1.268A2 2 0 0012 13a2 2 0 00-1 3.732z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
