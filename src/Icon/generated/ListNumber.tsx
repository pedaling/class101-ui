import * as React from 'react';
import { IconProps } from '../index';
export default class SvgListNumber extends React.PureComponent<IconProps> {
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
          d="M1 17h2v.5H2v1h1v.5H1v1h3v-4H1v1zm1-9h1V4H1v1h1v3zm-1 3h1.8L1 13.1v.9h3v-1H2.2L4 10.9V10H1v1zm5-6v2h16V5H6zm0 14h16v-2H6v2zm0-6h16v-2H6v2z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
