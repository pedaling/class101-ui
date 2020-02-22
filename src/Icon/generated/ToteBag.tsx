import React from 'react';
import { IconProps } from '../index';
export default class SvgToteBag extends React.PureComponent<IconProps> {
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
          d="M9.17 5a3.001 3.001 0 015.66 0H9.17zM7 7v2h2V7h6v2h2V7h3l-2 12H6L4 7h3zm.1-2a5.002 5.002 0 019.8 0H20a2 2 0 011.973 2.329l-2 12A2 2 0 0118 21H6a2 2 0 01-1.973-1.671l-2-12A2 2 0 014 5h3.1z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
