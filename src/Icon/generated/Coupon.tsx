import * as React from 'react';
import { IconProps } from '../index';
export default class SvgCoupon extends React.PureComponent<IconProps> {
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
          d="M17.5 4c-.276 0-.494.227-.562.495a2 2 0 01-3.876 0C12.994 4.227 12.776 4 12.5 4H2a1 1 0 00-1 1v14a1 1 0 001 1h10.5c.276 0 .494-.227.562-.495a2 2 0 013.876 0c.068.268.286.495.562.495H22a1 1 0 001-1V5a1 1 0 00-1-1h-4.5z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
