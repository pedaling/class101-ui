import * as React from 'react';
import { IconProps } from '../index';
export default class SvgFilter extends React.PureComponent<IconProps> {
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
          d="M3 19h18v-2H3v2zm0-6h18v-2H3v2zm0-8v2h18V5H3z"
          fill={this.props.fillColor}
        />
        <circle cx={8} cy={18} r={2} fill={this.props.fillColor} />
        <circle cx={8} cy={6} r={2} fill={this.props.fillColor} />
        <circle cx={16} cy={12} r={2} fill={this.props.fillColor} />
      </svg>
    );
  }
}
