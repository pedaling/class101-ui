import * as React from 'react';
import { IconProps } from '../index';
export default class SvgChevronUp extends React.PureComponent<IconProps> {
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
          d="M18.5 15.5l-6.5-6-6.5 6L4 14l8-7.5 8 7.5-1.5 1.5z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
