import * as React from 'react';
import { IconProps } from '../index';
export default class SvgCouponOutline extends React.PureComponent<IconProps> {
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
          d="M1 5a1 1 0 011-1h11a1 1 0 011 1 1 1 0 102 0 1 1 0 011-1h5a1 1 0 011 1v14a1 1 0 01-1 1h-5a1 1 0 01-1-1 1 1 0 10-2 0 1 1 0 01-1 1H2a1 1 0 01-1-1V5zm2 1v12h9.17a3.001 3.001 0 015.66 0H21V6h-3.17a3.001 3.001 0 01-5.66 0H3z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
