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
        fill="none"
        style={this.props.style}
        className={this.props.className}
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.443 12.832a6 6 0 117.114 0A8 8 0 0120 20v1h-2v-1a6 6 0 00-12 0v1H4v-1a8 8 0 014.443-7.168zM16 8a4 4 0 11-8 0 4 4 0 018 0z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
