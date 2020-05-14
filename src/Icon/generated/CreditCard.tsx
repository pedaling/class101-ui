import * as React from 'react';
import { IconProps } from '../index';
export default class SvgCreditCard extends React.PureComponent<IconProps> {
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
          d="M4 12v6h16v-6H4zm0-4h16V6H4v2zM3 4h18c.667 0 1 .333 1 1v14c0 .667-.333 1-1 1H3c-.667 0-1-.333-1-1V5c0-.667.333-1 1-1z"
          fill={this.props.fillColor}
        />
        <path fillRule="evenodd" clipRule="evenodd" d="M6 14h4v2H6v-2z" fill={this.props.fillColor} />
      </svg>
    );
  }
}
