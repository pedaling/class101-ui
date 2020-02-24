import * as React from 'react';
import { IconProps } from '../index';
export default class SvgClip extends React.PureComponent<IconProps> {
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
          d="M17 18v-7c0-2.4-2-3-3-3-1.9 0-3 1.5-3 3v6a1 1 0 102 0v-6c0-.25.153-1 1-1s1 .75 1 1v7a3 3 0 11-6 0V6c0-1 .234-3 3-3 2.716 0 3 2 3 3 0 0 0 1 1 1s1-1 1-1c0-1.5-.6-5-5-5S7 4.333 7 6v12a5 5 0 0010 0z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
