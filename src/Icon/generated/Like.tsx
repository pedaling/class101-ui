import * as React from 'react';
import { IconProps } from '../index';
export default class SvgLike extends React.PureComponent<IconProps> {
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
          d="M2 10.68c0-.691.503-1.251 1.135-1.251h2.273V22H3.135C2.508 22 2 21.427 2 20.749v-10.07zM13.361 8.17h6.367c1.255 0 2.272 1.126 2.272 2.515 0 .15-.012.301-.037.45l-1.615 9.832C20.25 21.566 19.779 22 19.23 22H7.68V9.429L11.09 0c1.703 0 2.84 1.257 2.84 3.143 0 1.257-.19 2.933-.569 5.028z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
