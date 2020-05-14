import * as React from 'react';
import { IconProps } from '../index';
export default class SvgCrown extends React.PureComponent<IconProps> {
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
        <path d="M21 6l-5.04 5.04L12 4l-3.96 7.04L3 6v14h18V6z" fill={this.props.fillColor} />
      </svg>
    );
  }
}
