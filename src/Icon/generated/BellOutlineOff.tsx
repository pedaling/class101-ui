import * as React from 'react';
import { IconProps } from '../index';
export default class SvgBellOutlineOff extends React.PureComponent<IconProps> {
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
          d="M21 20.5L19.5 22l-3-3H4v-2l1-.5V11c0-1.027.221-2.003.619-2.881L2.5 5 4 3.5l17 17zM7.177 9.677A5.005 5.005 0 007 11v6h7.5L7.177 9.677z"
          fill={this.props.fillColor}
        />
        <path
          d="M8.46 4.96l1.482 1.482A5 5 0 0117 11v2.5l2 2V11a7.003 7.003 0 00-5.5-6.839V3.5a1.5 1.5 0 00-3 0v.661a6.955 6.955 0 00-2.04.799zM14 20a2 2 0 11-4 0h4z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
