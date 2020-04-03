import * as React from 'react';
import { IconProps } from '../index';
export default class SvgFullScreen extends React.PureComponent<IconProps> {
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
          d="M1 11V3h12v2H3v6H1zm0 3h2v3.5L6.5 14 8 15.5 4.5 19H8v2H1v-7zm22-4h-2V6.5L17.5 10 16 8.5 19.5 5H16V3h7v7zm0 3v8H11v-2h10v-6h2z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
