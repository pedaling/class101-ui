import * as React from 'react';
import { IconProps } from '../index';
export default class SvgArrowRight extends React.PureComponent<IconProps> {
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
        <path d="M13.5 4L12 5.5l5.17 5.5H3v2h14.17L12 18.5l1.5 1.5 7.5-8-7.5-8z" fill={this.props.fillColor} />
      </svg>
    );
  }
}
