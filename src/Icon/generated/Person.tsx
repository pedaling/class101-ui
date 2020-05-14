import * as React from 'react';
import { IconProps } from '../index';
export default class SvgPerson extends React.PureComponent<IconProps> {
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
          d="M15.557 12.832A8 8 0 0120 20v1H4v-1a8 8 0 014.443-7.168 6 6 0 117.114 0z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
