import * as React from 'react';
import { IconProps } from '../index';
export default class SvgWon extends React.PureComponent<IconProps> {
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
          d="M3 5h2.5l1.136 5h2.728L10.5 5h3l1.136 5h2.728L18.5 5H21l-1.071 5H22v2h-2.5L18 19h-4l-1.75-7h-.5L10 19H6l-1.5-7H2v-2h2.071L3 5zm4.09 7L8 16l.91-4H7.09zm8 0l.91 4 .91-4h-1.82z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
