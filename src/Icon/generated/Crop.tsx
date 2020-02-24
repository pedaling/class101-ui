import * as React from 'react';
import { IconProps } from '../index';
export default class SvgCrop extends React.PureComponent<IconProps> {
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
          d="M8 3a1 1 0 00-2 0v3H3a1 1 0 000 2h3v9a1 1 0 001 1h14a1 1 0 100-2h-3V7a1 1 0 00-1-1H9v2h7v8H8V3zM17 22a1 1 0 001-1v-2h-2v2a1 1 0 001 1z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
