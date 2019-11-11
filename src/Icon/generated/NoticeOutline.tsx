import React from 'react';
import { IconProps } from '../index';
export default class SvgNoticeOutline extends React.PureComponent<IconProps> {
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
          d="M22 11a4.002 4.002 0 00-3-3.874V3a1 1 0 00-1.515-.858L12.723 5H8a6 6 0 00-1 11.917V20a1 1 0 001 1h2a1 1 0 001-1v-3h1.723l4.762 2.858A1 1 0 0019 19v-4.126c1.725-.444 3-2.01 3-3.874zM7.984 15H13a1 1 0 01.514.143L17 17.233V4.767l-3.486 2.091A1 1 0 0113 7H8a4 4 0 00-.016 8zM20 11a2 2 0 01-1 1.732V9.268A2 2 0 0120 11z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
