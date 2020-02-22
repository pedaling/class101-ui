import * as React from 'react';
import { IconProps } from '../index';
export default class SvgBellOutline extends React.PureComponent<IconProps> {
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
          d="M17 11a5 5 0 00-10 0v6h10v-6zm-6.5-6.839V3.5a1.5 1.5 0 013 0v.661A7.003 7.003 0 0119 11v5.5l1 .5v2H4v-2l1-.5V11a7.003 7.003 0 015.5-6.839zM10 20h4a2 2 0 11-4 0z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
