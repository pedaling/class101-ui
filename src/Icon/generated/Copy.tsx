import * as React from 'react';
import { IconProps } from '../index';
export default class SvgCopy extends React.PureComponent<IconProps> {
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
          d="M10 4v10h10V4H10zM9 2a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V3a1 1 0 00-1-1H9z"
          fill={this.props.fillColor}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6 8H3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1v-3h-2v2H4V10h2V8z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
