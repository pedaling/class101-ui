import * as React from 'react';
import { IconProps } from '../index';
export default class SvgPlayOutline extends React.PureComponent<IconProps> {
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
          d="M17.984 12L7 5.723v12.554L17.984 12zM6.496 3.132A1 1 0 005 4v16a1 1 0 001.496.868l14-8a1 1 0 000-1.736l-14-8z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
