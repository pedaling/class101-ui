import * as React from 'react';
import { IconProps } from '../index';
export default class SvgCategory extends React.PureComponent<IconProps> {
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
        <path fillRule="evenodd" clipRule="evenodd" d="M0 2h16V0H0v2zm0 6h16V6H0v2zm0 6h16v-2H0v2z" fill="#1B1C1D" />
      </svg>
    );
  }
}
