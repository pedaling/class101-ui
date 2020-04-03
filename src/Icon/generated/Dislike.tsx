import * as React from 'react';
import { IconProps } from '../index';
export default class SvgDislike extends React.PureComponent<IconProps> {
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
          d="M2 12.32c0 .691.503 1.251 1.135 1.251h2.273V1H3.135C2.508 1 2 1.573 2 2.251v10.07zm11.361 2.509h6.367c1.255 0 2.272-1.126 2.272-2.515 0-.15-.012-.301-.037-.45l-1.615-9.832C20.25 1.435 19.779 1 19.23 1H7.68v12.571L11.09 23c1.703 0 2.84-1.257 2.84-3.143 0-1.257-.19-2.933-.569-5.028z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
