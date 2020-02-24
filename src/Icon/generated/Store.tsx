import * as React from 'react';
import { IconProps } from '../index';
export default class SvgStore extends React.PureComponent<IconProps> {
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
          d="M5 13.874V20h14v-6.126a4.01 4.01 0 01-4-1.228A3.99 3.99 0 0112 14a3.99 3.99 0 01-3-1.354 3.99 3.99 0 01-4 1.228zm16-1.228V20a2 2 0 01-2 2H5a2 2 0 01-2-2v-7.354a3.985 3.985 0 01-1-2.604c-.004-.103.008-.21.038-.317l2-7A1 1 0 015 2h14a1 1 0 01.962.725l2 7c.03.107.042.214.038.317a3.985 3.985 0 01-1 2.604zM19.389 8l-1.143-4H5.754L4.611 8h14.777zM6 12a2 2 0 002-2H4a2 2 0 002 2zm6 0a2 2 0 002-2h-4a2 2 0 002 2zm6 0a2 2 0 002-2h-4a2 2 0 002 2z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
