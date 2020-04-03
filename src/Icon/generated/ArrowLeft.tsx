import * as React from 'react';
import { IconProps } from '../index';
export default class SvgArrowLeft extends React.PureComponent<IconProps> {
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
        <path d="M10.5 4L12 5.5 6.83 11H21v2H6.83L12 18.5 10.5 20 3 12l7.5-8z" fill={this.props.fillColor} />
      </svg>
    );
  }
}