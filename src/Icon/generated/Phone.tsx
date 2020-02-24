import * as React from 'react';
import { IconProps } from '../index';
export default class SvgPhone extends React.PureComponent<IconProps> {
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
          d="M4.338 11.412a4.572 4.572 0 01-.021-6.442L5.92 3.346a1.15 1.15 0 011.608-.017l3.06 2.969c.458.443.464 1.175.014 1.628l-2.704 2.703 5.547 5.405 2.654-2.6a1.141 1.141 0 011.607.01l2.959 2.958c.446.445.446 1.165.003 1.613l-1.619 1.628a4.57 4.57 0 01-6.47.009l-8.241-8.24z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
