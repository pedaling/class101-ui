import * as React from 'react';
import { IconProps } from '../index';
export default class SvgLocation extends React.PureComponent<IconProps> {
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
          d="M12.549 19.512a24.119 24.119 0 002.475-2.262c2.185-2.306 3.476-4.674 3.476-6.917 0-1.805-.628-3.318-1.905-4.594C15.32 4.463 13.805 3.836 12 3.836c-1.805 0-3.319.627-4.595 1.903C6.128 7.015 5.5 8.529 5.5 10.333c0 2.243 1.291 4.61 3.476 6.917A24.123 24.123 0 0012 19.936c.172-.129.356-.27.549-.424zm7.951-9.179c0 2.861-1.521 5.65-4.024 8.292a26.124 26.124 0 01-3.568 3.126c-.165.119-.285.202-.353.248l-.555.37-.555-.37a12.565 12.565 0 01-.353-.248 26.121 26.121 0 01-3.568-3.126C5.021 15.983 3.5 13.195 3.5 10.333c0-2.336.839-4.357 2.49-6.009C7.644 2.674 9.665 1.836 12 1.836s4.358.837 6.01 2.488c1.651 1.652 2.49 3.673 2.49 6.009zm-6.75 0c0-1.252-.498-1.75-1.75-1.75s-1.75.498-1.75 1.75c0 1.253.498 1.75 1.75 1.75s1.75-.497 1.75-1.75zm1.5 0c0 2.081-1.17 3.25-3.25 3.25s-3.25-1.169-3.25-3.25c0-2.08 1.17-3.25 3.25-3.25s3.25 1.17 3.25 3.25z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
