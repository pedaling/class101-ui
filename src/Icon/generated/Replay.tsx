import * as React from 'react';
import { IconProps } from '../index';
export default class SvgReplay extends React.PureComponent<IconProps> {
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
          d="M17.02 6L12 11V7c-3.84.021-6.979 3.16-7 7-.014 3.847 3.153 7.014 7 7 3.847-.014 7.006-3.153 7.02-7H21c-.021 4.943-4.057 8.979-9 9-4.929.021-9.028-4.064-9-9 .028-4.936 4.064-8.972 9-9V1l5.02 5z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
