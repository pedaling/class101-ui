import * as React from 'react';
import { IconProps } from '../index';
export default class SvgFullScreenExit extends React.PureComponent<IconProps> {
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
          d="M21 12v8H10v-2h9v-6h2zM3 12V4h11v2H5v6H3zm5 9H6v-3.5L2.5 21 1 19.5 4.5 16H1v-2h7v7zm8-18h2v3.5L21.5 3 23 4.5 19.5 8H23v2h-7V3z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
