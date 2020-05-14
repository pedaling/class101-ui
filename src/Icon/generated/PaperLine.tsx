import * as React from 'react';
import { IconProps } from '../index';
export default class SvgPaperLine extends React.PureComponent<IconProps> {
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
        <path d="M7 7v2h10V7H7zM17 11H7v2h10v-2zM17 15v2H7v-2h10z" fill={this.props.fillColor} />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 1a1 1 0 00-1 1v20a1 1 0 001 1h18a1 1 0 001-1V2a1 1 0 00-1-1H3zm17 2H4v18h16V3z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
