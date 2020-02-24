import * as React from 'react';
import { IconProps } from '../index';
export default class SvgHot extends React.PureComponent<IconProps> {
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
          d="M14 1c-2 .86-2.5 2-2.5 3S12 8 10 8C9 8 8.333 7 8 5c-3 2.25-4.5 6.12-4.5 9.5 0 4.42 3.5 7.494 8.5 7.5 5 .006 8.5-3 8.5-7.5 0-2.5-.5-4.429-2.5-7C16 4.929 14 4 14 1zM8 15.5c0-1.5 1-3 3-3.5s2.5-1 3-2c1.08.867 2 3 2 5 0 2.786-2 4-4 4-1.78 0-4-1-4-3.5z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
