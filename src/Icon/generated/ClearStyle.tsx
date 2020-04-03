import * as React from 'react';
import { IconProps } from '../index';
export default class SvgClearStyle extends React.PureComponent<IconProps> {
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
          d="M1.5 3L3 1.5 22.5 21 21 22.5l-8-8V20h2v2H9v-2h2v-7.5L4.5 6H3V4.5L1.5 3zM6.5 2l2 2H11v2.5l2 2V4h6v2h2V2H6.5z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
