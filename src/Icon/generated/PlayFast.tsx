import * as React from 'react';
import { IconProps } from '../index';
export default class SvgPlayFast extends React.PureComponent<IconProps> {
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
          d="M11 14.667l-6.445 4.297A1 1 0 013 18.132V5.868a1 1 0 011.555-.833L11 9.333V5.87a1 1 0 011.555-.833l9.197 6.132a1 1 0 010 1.664l-9.197 6.132A1 1 0 0111 18.132v-3.465z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
