import * as React from 'react';
import { IconProps } from '../index';
export default class SvgDivider extends React.PureComponent<IconProps> {
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
          d="M3 7a1 1 0 001 1h16a1 1 0 001-1V2h-2v4H5V2H3v5zM3 17a1 1 0 011-1h16a1 1 0 011 1v5h-2v-4H5v4H3v-5zM22 11H2v2h20v-2z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
