import * as React from 'react';
import { IconProps } from '../index';
export default class SvgFullScreenExit extends React.PureComponent<IconProps> {
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
        style={this.props.style}
        className={this.props.className}
        viewBox="0 0 24 24"
      >
        <path
          fill={this.props.fillColor}
          fillRule="evenodd"
          d="M10 4v6H4V8h4V4h2zm4 16v-6h6v2h-4v4h-2zm-4 0H8v-2.5L5.5 20 4 18.5 6.5 16H4v-2h6v6zm4-16h2v2.5L18.5 4 20 5.5 17.5 8H20v2h-6V4z"
        />
      </svg>
    );
  }
}
