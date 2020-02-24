import * as React from 'react';
import { IconProps } from '../index';
export default class SvgLocationCurrent extends React.PureComponent<IconProps> {
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
          d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm2.062-1H7v2H4.062A8.004 8.004 0 0011 19.938V17h2v2.938A8.004 8.004 0 0019.938 13H17v-2h2.938A8.004 8.004 0 0013 4.062V7h-2V4.062A8.004 8.004 0 004.062 11z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
