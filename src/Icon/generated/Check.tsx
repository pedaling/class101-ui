import * as React from 'react';
import { IconProps } from '../index';
export default class SvgCheck extends React.PureComponent<IconProps> {
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
          d="M10 18l-6-6 1.5-1.5L10 15l9-9 1.5 1.5L10 18z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
