import * as React from 'react';
import { IconProps } from '../index';
export default class SvgRepeat extends React.PureComponent<IconProps> {
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
          d="M22 13v-2h-2v2a5 5 0 01-5 5H8v-1.5a.5.5 0 00-.82-.384l-3 2.5a.5.5 0 000 .768l3 2.5A.5.5 0 008 21.5V20h7a7 7 0 007-7zM2 11v2h2v-2a5 5 0 015-5h7v1.5a.5.5 0 00.82.384l3-2.5a.5.5 0 000-.768l-3-2.5A.5.5 0 0016 2.5V4H9a7 7 0 00-7 7z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
